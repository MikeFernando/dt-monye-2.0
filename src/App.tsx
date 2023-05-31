import { ThemeProvider } from 'styled-components'

import { Home } from './pages/Home'

import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/theme/default'
import { TransactionsContextProvider } from './contexts/TransactionsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsContextProvider>
        <Home />
      </TransactionsContextProvider>

      <GlobalStyles />
    </ThemeProvider>
  )
}
