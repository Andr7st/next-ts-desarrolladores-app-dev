import type { NextPage } from 'next'
import { useEffect } from 'react'
import Navbar from '../test/NavBar'
const Home: NextPage = () => {
  useEffect(()=>{
    document.title="desarrolladores" 
  },[])
  return (
    <>
      <Navbar />
    </>
  )
}

export default Home