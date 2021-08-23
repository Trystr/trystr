import Head from 'next/head'
import Layout from '../components/layout'
import Post from '../components/post'

export default function Feed() {
  return (
    <Layout title="Feed">
      <Post/>
    </Layout>
  )
}
