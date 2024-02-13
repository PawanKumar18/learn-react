// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
import PackingList from './components/props_item'
import Gallery from './components/gallery'
import Bio from './qcomps/bios'
import MyComp from './qcomps/firstcomp'
import TodoList from './qcomps/todos'

export default function Home() {
  return (
    <div className={styles.main}>
        <Gallery/>
        <Bio/>
        <MyComp/>
        <Profile/>
        <TodoList/>
        <Gallery/>
        <PackingList/>
    </div>
  )
}
