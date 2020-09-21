
import { AuthProvider } from '../lib/auth'
import { ThemeProvider } from '@chakra-ui/core'

export default function App ({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  )
}
