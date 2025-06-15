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
