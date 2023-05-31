import incomeImg from '../../../assets/income.svg'
import outcomeImg from '../../../assets/outcome.svg'
import totalImg from '../../../assets/cifrao.svg'

import { useTransactions } from '../../../hooks/useTransactions'
import { formatterPrice } from '../../../util/formatter'

import * as S from './styles'

export function Summary() {
  const { transactions } = useTransactions()

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
        acc.total += transaction.price
      } else {
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }

      return acc
    },
    { income: 0, outcome: 0, total: 0 },
  )

  return (
    <S.Container>
      <S.SummaryCard>
        <header>
          <span>Entradas</span>
          <img src={incomeImg} alt="Seta apontando para cima" />
        </header>

        <strong>{formatterPrice(summary.income)}</strong>
      </S.SummaryCard>

      <S.SummaryCard>
        <header>
          <span>Saídas</span>
          <img src={outcomeImg} alt="Seta apontando para baixo" />
        </header>

        <strong>-{formatterPrice(summary.outcome)}</strong>
      </S.SummaryCard>

      <S.SummaryCard variant="green">
        <header>
          <span>Total</span>
          <img src={totalImg} alt="Cifrão dólar" />
        </header>

        <strong>{formatterPrice(summary.total)}</strong>
      </S.SummaryCard>
    </S.Container>
  )
}
