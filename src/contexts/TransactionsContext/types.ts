import { ReactNode } from 'react'
import * as z from 'zod'

export interface Transaction {
  id: number
  price: number
  category: string
  createdAt: string
  description: string
  type: 'income' | 'outcome'
}

const CreateTransactionInput = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

export type NewTransactionFormInput = z.infer<typeof CreateTransactionInput>

export interface ContextData {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: NewTransactionFormInput) => Promise<void>
}

export interface Props {
  children: ReactNode
}
