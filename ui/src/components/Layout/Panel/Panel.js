import React from 'react'
import styles from './style.scss'

const Panel = ({ children }) => {
  return (
    <div className={styles.panel}>
      {children}
    </div>
  )
}

export default Panel
