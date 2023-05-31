import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import * as Dialog from '@radix-ui/react-dialog'
import * as z from 'zod'

import * as S from './styles'
import { useTransactions } from '../../../hooks/useTransactions'

const FormSchemaTransactionModal = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInput = z.infer<typeof FormSchemaTransactionModal>

export function NewTransactionModal() {
  const { createTransaction } = useTransactions()

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInput>({
    resolver: zodResolver(FormSchemaTransactionModal),
    defaultValues: {
      type: 'income',
    },
  })

  async function handleCreateNewTransaction(data: NewTransactionFormInput) {
    createTransaction(data)

    reset()
  }

  return (
    <Dialog.Portal>
      <S.Overlay />

      <S.Content>
        <S.CloseButton>
          <X size={24} />
        </S.CloseButton>

        <Dialog.Title>Nova Transação</Dialog.Title>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />

          <input
            type="number"
            placeholder="Preço"
            required
            {...register('price', { valueAsNumber: true })}
          />

          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <S.TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <S.ButtonType variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </S.ButtonType>

                  <S.ButtonType variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Saída
                  </S.ButtonType>
                </S.TransactionType>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </S.Content>
    </Dialog.Portal>
  )
}
