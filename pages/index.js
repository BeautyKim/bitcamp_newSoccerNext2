import { Footer, Layout, Pagination, Nav, Table, Modal, Header } from '@/components'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Header/>
      <Nav/>
      <Table/>
      <Pagination/>
      <Footer/>
      <Modal/>
    </Layout>
  )
}