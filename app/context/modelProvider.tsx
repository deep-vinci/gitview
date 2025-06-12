"use client";

import {
    createContext,
    useContext,
    useState,
    ReactNode,
    Children,
} from "react";

interface modelType {
    model: String;
    setModel: (m: String) => void;
}

const ModelContext = createContext<any>(null);

export function ModelProvider({ children }: { children: ReactNode }) {
    const [model, setModel] = useState<"3d" | "heat">("3d"); // ✅ default is "3d"
    return (
        <ModelContext.Provider value={{ model, setModel }}>
            {children}
        </ModelContext.Provider>
    );
}

export const useModel = (): modelType => {
    const context = useContext(ModelContext);
    if (!context) {
        throw new Error("err");
    }
    return context;
};
