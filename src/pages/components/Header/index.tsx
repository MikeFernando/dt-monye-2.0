import * as Dialog from '@radix-ui/react-dialog'

import Logo from '../../../assets/logo.svg'

import * as S from './styles'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <S.Container>
      <S.Content>
        <img src={Logo} alt="triangulo" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <S.NewTransactionButton>Nova Transação</S.NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </S.Content>
    </S.Container>
  )
}
