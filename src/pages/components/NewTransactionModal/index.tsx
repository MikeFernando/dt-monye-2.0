import * as Dialog from '@radix-ui/react-dialog';

import * as S from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

export function NewTransactionModal(){
  return (
    <Dialog.Portal>
        <S.Overlay />

        <S.Content>
            <S.CloseButton>
                <X size={24} />
            </S.CloseButton>

            <Dialog.Title>Nova Transação</Dialog.Title>

            <form action="">
            <input type="text"  placeholder="Descrição"/>
            <input type="number"  placeholder="Preço"/>
            <input type="text"  placeholder="Categoria"/>

            <S.TransactionType>
                <S.ButtonType variant='income' value='income'>
                    <ArrowCircleUp size={24} />
                    Entrada
                </S.ButtonType>

                <S.ButtonType variant='outcome' value='outcome'>
                    <ArrowCircleDown size={24} />
                    Saída
                </S.ButtonType>
            </S.TransactionType>

            <button type="submit">Cadastrar</button>
            </form>

        </S.Content>
    </Dialog.Portal>
  );
}