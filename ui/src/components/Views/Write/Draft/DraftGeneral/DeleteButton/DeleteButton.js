import React from 'react'
import classnames from 'classnames'
import { AlertMessage, Emphasis, WideButton } from 'components/common'
import styles from '../style.scss'

const buttonClassName = classnames(styles.button, styles.delete)

const DeleteButton = ({ onClick }) => (
  <div className={styles.actionWarning}>
    <AlertMessage title={'Attention !'}>
      <Emphasis>Supprimer</Emphasis>
      votre brouillon supprimera celui-ci
      <Emphasis>définitivement</Emphasis>
      et de manière<Emphasis>irréversible.</Emphasis>
    </AlertMessage>
    <WideButton
      domProps={{ onClick }}
      className={buttonClassName}
    >
      Supprimer
    </WideButton>
  </div>
)

export default DeleteButton
