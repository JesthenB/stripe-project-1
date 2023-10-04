import Image from 'next/image'
import styles from './page.module.css'
import React from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import Submenu from './components/Submenu';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Hero/>
      <Submenu/>
    </div>
  )
}
