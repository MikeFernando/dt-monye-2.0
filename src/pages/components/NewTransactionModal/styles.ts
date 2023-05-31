import styled from 'styled-components'

import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 33.4375rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme['gray-800']};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      background-color: ${(props) => props.theme['gray-900']};
      border-radius: 6px;
      border: 0;
      color: ${(props) => props.theme.white};
      padding: 1rem;
    }

    button[type='submit'] {
      background-color: ${(props) => props.theme['green-500']};
      border-radius: 6px;
      color: ${(props) => props.theme.white};
      border: 0;
      padding: 1.25rem 2rem;
      font-weight: 400;
      font-size: 1rem;
      margin-top: 2.5625rem;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background-color: ${(props) => props.theme['green-700']};
        transition: background-color 0.2s;
        cursor: pointer;
      }
    }
  }
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`

export const ButtonType = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  padding: 1rem 1.5rem;
  color: ${(props) => props.theme['gray-300']};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
  border: 0;
  background-color: ${(props) => props.theme['gray-700']};
  border-radius: 0.375rem;

  &[data-state='checked'] {
    background-color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-500']
        : props.theme['red-500']};

    color: ${(props) => props.theme.white};

    svg {
      color: ${(props) => props.theme.white};
    }
  }

  &[data-state='unchecked']:hover {
    background-color: ${(props) => props.theme['gray-600']};
  }

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }
`

export const CloseButton = styled(Dialog.Close)`
  line-height: 0;
  color: ${(props) => props.theme['gray-500']};
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  position: absolute;
`
