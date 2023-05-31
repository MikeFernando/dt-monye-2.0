import { Header } from "../components/Header";
import { Summary } from "../components/Summary";
import { SearchForm } from "./components/SearchForm";

import { formatterDate, formatterPrice } from "../../util/formatter";
import { useTransactions } from "../../hooks/useTransactions";

import * as S from './styles'

export function Home(){
  const { transactions } = useTransactions()

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
                    {transaction.type === 'outcome' && '- '}
                    {formatterPrice(transaction.price)}
                  </S.PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{formatterDate(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </S.TransactionsContainer>
    </div>
  );
}