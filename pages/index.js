import Layout from "../components/Layout"
import Header from "../components/Header"
import Videos from "../components/Videos"

export default function Home({products}) {

  return (
    <Layout>
      <Header />
      <Videos />
    </Layout>
  )
}

