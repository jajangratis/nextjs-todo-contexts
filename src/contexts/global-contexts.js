'use client'
import { createContext } from "react";

export const GlobalContexts = createContext({
    task: {
        data: [],
        setData: undefined,
    },
})