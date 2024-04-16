'use client';

import { useState } from "react";
import { GlobalContexts } from "./contexts/global-contexts";


export function Providers({ children }) {
    const [task, setTask] = useState([])
    return (
        <GlobalContexts.Provider value={
                {task: {data:task, setData: setTask}
            }
        }>{children}</GlobalContexts.Provider>
    );
}