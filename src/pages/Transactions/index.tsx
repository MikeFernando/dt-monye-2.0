import { Header } from "../components/Header";
import { Summary } from "../components/Summary";
import { SearchForm } from "./components/SearchForm";

import * as S from './styles'

export function Transactions(){
  return (
    <div>
      <Header />
      <Summary />

      <S.TransactionsContainer>
        <SearchForm />
        
        <S.Table>
          <tbody>
            <tr>
              <td>Desenvolvimento de app</td>
              <td>
                <S.PriceHighlight transactionType='income'>
                  R$ 12.000,00
                </S.PriceHighlight>
              </td>
              <td>Venda</td>
              <td>27/08/2022</td>
            </tr>
            <tr>
              <td>Aluguel</td>
              <td>
                <S.PriceHighlight transactionType='outcome'>
                  - R$ 2.000,00
                </S.PriceHighlight>
              </td>
              <td>Casa</td>
              <td>28/08/2022</td>
            </tr>
          </tbody>
        </S.Table>
      </S.TransactionsContainer>
    </div>
  );
}