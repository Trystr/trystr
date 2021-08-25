import Head from 'next/head'
import Layout from '../components/layout'
import Post from '../components/post'
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(function Feed() {
  return (
    <Layout title="Feed">
      <Post />
      </Layout>
  )
});
