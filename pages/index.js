/** @jsx jsx */
import { useRouter } from 'next/router'
import { useAuth } from '../lib/auth'
import Auth from '../components/Auth'
import { jsx } from '@emotion/core'
import { useToast } from '@chakra-ui/core'

export default () => {
  const auth = useAuth()
  const toast = useToast()
  const router = useRouter()

  const signUp = ({ email, pass }) => {
    auth.signUp(email, pass)
      .then(() => {
        toast({
          title: 'Success! 🍻',
          description: 'Your account has been created.',
          status: 'success',
          duration: 3000,
          isClosable: true
        })
        router.push('/students')
      })
      .catch((error) => {
        toast({
          title: 'An error occurred.',
          description: error.message,
          status: 'error',
          duration: 9000,
          isClosable: true
        })
      })
  }

  return <Auth type='Sign Up' onSubmit={signUp} />
}
