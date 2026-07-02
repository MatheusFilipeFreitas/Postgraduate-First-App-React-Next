// =============================================================================
// FILE: CountProvider / CountContext
// =============================================================================
// Shared counter state for the /medium route segment via React Context.
// Client Component ("use client") — context and sessionStorage run in the browser.
// Used in: app/medium/layout.tsx (wraps all /medium pages)

// =============================================================================
// TOPIC: React Context API
// =============================================================================
// Study notes:
// - createContext(defaultValue) creates a shared store any descendant can read.
// - Provider wraps part of the tree and supplies the live value via value={...}.
// - useContext(CountContext) reads count and setCount without prop drilling.
// - Default value is a fallback when no Provider exists (here: count 0, no-op setter).
//
// Used here: GlobalCount and GlobalValueCount share the same count state.

'use client';

import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";

export type CountType = number | null;

type CountContextType = {
    count: CountType;
    setCount: Dispatch<SetStateAction<CountType>>;
}

export const CountContext = createContext<CountContextType>({
    count: 0,
    setCount: () => {},
});

// =============================================================================
// TOPIC: Provider component and sessionStorage persistence
// =============================================================================
// Study notes:
// - CountProvider holds useState and wraps {children} with CountContext.Provider.
// - sessionStorage survives page refreshes within the same browser tab (not across tabs forever like localStorage).
// - Mount effect reads 'count' from sessionStorage and hydrates state.
// - [count] effect writes back whenever count changes so refresh keeps the value.
// - count starts as null until hydration; display components should handle null if needed.
// - CountType is exported so consumers can type helpers (e.g. normalizeCount in GlobalCount).
//
// Used here: /medium layout wraps pages so GlobalCount and GlobalValueCount stay in sync.

export default function CountProvider ({children} : { children: React.ReactNode }): React.ReactNode {
    const [count, setCount] = useState<CountType>(null);

    useEffect(() => {
        const countSessionStorage = sessionStorage.getItem('count');
        if (countSessionStorage) {
            setCount(parseInt(countSessionStorage) as CountType);
        }
    }, []);

    useEffect(() => {
        sessionStorage.setItem('count', count?.toString() ?? '0');
    }, [count]);
    
    return (
        <CountContext.Provider value={{ count, setCount }}>
            {children}
        </CountContext.Provider>
    )
};
