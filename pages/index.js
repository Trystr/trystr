import Head from 'next/head'
import Layout from '../components/layout'
import { LoginButton} from '../components/auth'


export default function Feed() {
  return (
    <div>TODO (maybe redirect to /feed if logged in)
      <LoginButton/>
   </div>
  )
}
