import React from 'react'
import styles from './Header.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>O meu site</h1>

      <nav>
          <ul>
            <li><Link href="/"></Link></li>
          </ul>
      </nav>
    
    </header>
  )
}
