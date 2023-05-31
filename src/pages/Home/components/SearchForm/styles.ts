import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border: 0;
    border-radius: 6px;
    background-color: ${props => props.theme['gray-900']};
    color: ${props => props.theme['gray-300']};
    padding: 1rem;


    &::placeholder {
      color: ${props => props.theme['gray-500']};
    }
  }

  button {
    height: 45px;
    border: 1px solid ${props => props.theme['green-300']};
    background-color: transparent;
    color: ${props => props.theme['green-300']};
    padding: 0 1.25rem;
    border-radius: 6px;
    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      background-color: ${props => props.theme['green-300']};
      color: ${props => props.theme.white};
      transition: background-color .3s, color 0.3s ease;
    }
  }
`