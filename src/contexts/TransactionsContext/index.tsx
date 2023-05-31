import { createContext, useEffect, useState } from "react";

import * as T from './types'

export const TransactionsContext = createContext({} as T.ContextData)

export function TransactionsContextProvider({ children }: T.Props) {
    const [ transactions, setTransactions ] = useState<T.Transaction[]>([])

    async function fetchTransactions() {
        const response = await fetch('http://localhost:3333/transactions')
        const data = await response.json()

        setTransactions(data)
    }

    useEffect(() => {
        fetchTransactions()
    }, [])

    return (
        <TransactionsContext.Provider value={{ transactions }}>
            { children }
        </TransactionsContext.Provider>
    )
}