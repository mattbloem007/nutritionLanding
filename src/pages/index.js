import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import One from '../components/One'
import Two from '../components/Two'
import TwoTwo from '../components/Two2'
import Three from '../components/Three'
import Four from '../components/Four'
import Five from '../components/Five'

class Home extends React.Component {
  render() {
    return (
      <Layout location="/">
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          title="Group Cleanse 2020"
          meta={[
            { name: 'description', content: 'Group Cleanse 2020' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        ></Helmet>
        <Banner />
        <One />
        <Two />
        <TwoTwo />
        <Three />
        <Four />
        <Five />
      </Layout>
    )
  }
}

export default Home
