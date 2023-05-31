import { useForm } from 'react-hook-form';
import { MagnifyingGlass } from 'phosphor-react';
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import * as S from './styles'

const SearchFormSchema = z.object({
  query: z.string()
})

type SearchFormInput = z.infer<typeof SearchFormSchema>

export function SearchForm(){
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SearchFormInput>({
    resolver: zodResolver(SearchFormSchema)
  });

  async function handleSearchTransactions(data: SearchFormInput) {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(data);
  }

  return (
    <S.Container onSubmit={handleSubmit(handleSearchTransactions)}>
      <input 
        type="text" 
        placeholder='Busque uma transação'
        {...register('query')}
      />
      <button disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </S.Container>
  );
}