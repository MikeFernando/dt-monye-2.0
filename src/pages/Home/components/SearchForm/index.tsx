import { useForm } from 'react-hook-form'
import { MagnifyingGlass } from 'phosphor-react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { useTransactions } from '../../../../hooks/useTransactions'

import * as S from './styles'

const SearchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof SearchFormSchema>

export function SearchForm() {
  const { fetchTransactions } = useTransactions()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInput>({
    resolver: zodResolver(SearchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInput) {
    await fetchTransactions(data.query)
  }

  return (
    <S.Container onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque uma transação"
        {...register('query')}
      />
      <button disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </S.Container>
  )
}
