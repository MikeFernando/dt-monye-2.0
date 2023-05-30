import incomeImg from '../../../assets/income.svg'
import outcomeImg from '../../../assets/outcome.svg'
import totalImg from '../../../assets/cifrao.svg'

import * as S from './styles'

export function Summary(){
  return (
    <S.Container>
      <S.SummaryCard>
        <header>
          <span>Entradas</span>
          <img src={incomeImg} alt="Seta apontando para cima" />
        </header>

        <strong>R$ 17.400,00</strong>
      </S.SummaryCard>

      <S.SummaryCard>
        <header>
          <span>Saídas</span>
          <img src={outcomeImg} alt="Seta apontando para baixo" />
        </header>

        <strong>R$ 17.400,00</strong>
      </S.SummaryCard>

      <S.SummaryCard variant='green'>
        <header>
          <span>Total</span>
          <img src={totalImg} alt="Cifrão dólar" />
        </header>

        <strong>R$ 17.400,00</strong>
      </S.SummaryCard>
    </S.Container>
  );
}