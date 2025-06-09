"use client";

import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

interface UserData {
    name: string;
    login: string;
    avatarUrl: string;
    bio: string;
    company: string;
    location: string;
    websiteUrl: string;
    twitterUsername: string;
    followers: {
        totalCount: number;
    };
    following: {
        totalCount: number;
    };
    contributionsCollection: {
        contributionCalendar: {
            totalContributions: number;
            weeks: Array<{
                contributionDays: Array<{
                    contributionCount: number;
                    date: string;
                    weekday: number;
                    color: string;
                }>;
            }>;
        };
        commitContributionsByRepository: Array<{
            repository: {
                nameWithOwner: string;
                url: string;
            };
            contributions: {
                totalCount: number;
            };
        }>;
        issueContributions: {
            totalCount: number;
        };
        pullRequestContributions: {
            totalCount: number;
        };
        pullRequestReviewContributions: {
            totalCount: number;
        };
        restrictedContributionsCount: number;
    };
    repositories: {
        nodes: Array<{
            name: string;
            description: string;
            url: string;
            stargazerCount: number;
            forkCount: number;
            updatedAt: string;
            primaryLanguage: {
                name: string;
                color: string;
            } | null; // primaryLanguage can be null
        }>;
    };
}

interface UserDataProvider {
    children: ReactNode;
}

interface UserDataContextType {
    userData: UserData | null;
    fetchData: (username: String) => Promise<any>;
}
const UserDataContext = createContext<UserDataContextType | null>(null);

export function UserDataProvider({ children }: UserDataProvider) {
    const [userData, setUserData] = useState<UserData | null>(null);

    async function fetchData(username: String): Promise<any> {
        let results = await fetch(`/api/data?username=${username}`, {
            method: "GET",
        });
        let characters = await results.json();
        characters = characters.results;
        // console.log(characters.results);
        console.log(characters.data);
        if (characters.data && characters.data.user) {
            setUserData(characters.data.user); // Assuming characters.data.user matches UserData
        } else {
            setUserData(null); // Set to null if no user data or an error
        }
        return characters;
    }

    return (
        <UserDataContext.Provider value={{ userData, fetchData }}>
            {children}
        </UserDataContext.Provider>
    );
}

export const useUserData = (): UserDataContextType => {
    const context = useContext(UserDataContext);
    if (!context) {
        throw new Error("err");
    }
    return context;
};
