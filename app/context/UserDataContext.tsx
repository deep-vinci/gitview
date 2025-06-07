"use client";

import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import { UserData } from "../types/userData";

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
        let results = await fetch("https://api.github.com/graphql", {
            method: "POST",

            headers: {
                Authorization: `Bearer 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`,
            },

            body: JSON.stringify({
                query: `query($userName: String!) {
                        user(login: $userName) {
                            name
                            login
                            avatarUrl
                            bio
                            company
                            location
                            websiteUrl
                            twitterUsername
        
                            followers {
                            totalCount
                            }
                            following {
                            totalCount
                            }
        
                            contributionsCollection {
                            contributionCalendar {
                                totalContributions
                                weeks {
                                contributionDays {
                                    contributionCount
                                    date
                                    weekday
                                    color  # Only if supported (not in official schema but inferred by GitHub's frontend)
                                }
                                }
                            }
        
                            commitContributionsByRepository(maxRepositories: 5) {
                                repository {
                                nameWithOwner
                                url
                                }
                                contributions {
                                totalCount
                                }
                            }
        
                            issueContributions {
                                totalCount
                            }
        
                            pullRequestContributions {
                                totalCount
                            }
        
                            pullRequestReviewContributions {
                                totalCount
                            }
        
                            restrictedContributionsCount
                            }
        
                            repositories(first: 5, orderBy: {field: STARGAZERS, direction: DESC}) {
                            nodes {
                                name
                                description
                                url
                                stargazerCount
                                forkCount
                                updatedAt
                                primaryLanguage {
                                name
                                color
                                }
                            }
                            }
                        }
                    }`,
                variables: {
                    userName: username, // or just `id` if parameter name is same
                },
            }),
        });
        let characters = await results.json();
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
