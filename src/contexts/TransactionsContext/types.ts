import { ReactNode } from "react"

export interface Transaction {
    id: number
    price: number
    category: string
    createdAt: string
    description: string
    type: 'income' | 'outcome'
}

export interface ContextData {
    transactions: Transaction[]
}

export interface Props {
    children: ReactNode
}