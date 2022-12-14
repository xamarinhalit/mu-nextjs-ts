import React,{FC} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import NavigationComponent from '@/components/layout/navigationComponent'

type LayoutPropsType ={
  children: React.ReactNode
} 

const Layout: FC<LayoutPropsType> = ({children}) => {
    return <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationComponent />
      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
};

export default Layout;
