import { useEffect, useState } from "react";

import { Header } from "../components/Header";
import { Summary } from "../components/Summary";
import { SearchForm } from "./components/SearchForm";

import * as S from './styles'

interface Transaction {
  id: number
  description: string
  price: number
  category: string
  createdAt: string
  type: 'income' | 'outcome'
}

export function Transactions(){
  const [ transactions, setTransactions ] = useState<Transaction[]>([])

  async function fetchTransactions() {
    const response = await fetch('http://localhost:3333/transactions')
    const data = await response.json()

    setTransactions(data)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <div>
      <Header />
      <Summary />

      <S.TransactionsContainer>
        <SearchForm />
        
        <S.Table>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.description}</td>
                <td>
                  <S.PriceHighlight transactionType={transaction.type}>
                    {new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(transaction.price)}
                  </S.PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{new Intl.DateTimeFormat('pt-br').format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </S.TransactionsContainer>
    </div>
  );
}