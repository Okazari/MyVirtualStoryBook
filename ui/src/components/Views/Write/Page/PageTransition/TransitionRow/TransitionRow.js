import React from 'react'
import posed from 'react-pose'
import { RouteService } from 'services'
import { TextAreaInput, ButtonIcon, Button, SelectInput } from 'components/common'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TransitionRowBody from './TransitionRowBody'
import styles from './style.scss'

const Body = posed(TransitionRowBody)({
  hidden: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 300 },
      opacity: { duration: 300 },
    },
  },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: { duration: 300 },
      opacity: { duration: 300 },
    },
  },
})

const TransitionRow = (props) => {
  const {
    book,
    transition,
    updateTransition,
    removeTransition,
    visible,
    setVisible,
    onLinkNewPage,
  } = props

  const editPage = () => {
    RouteService.goTo(RouteService.routes.writebookpage(book.id, transition.toPage))
  }

  const linkButton = (
    <Button
      className={styles.renderButton}
      domProps={{ onClick: onLinkNewPage }}
    >
      Créer et lier la nouvelle page
    </Button>
  )

  const goButton = (
    <Button
      className={styles.renderButton}
      domProps={{ onClick: editPage }}
    >
      Editer la page de destination
    </Button>
  )

  const renderButton = () => {
    if (transition.toPage === '' || transition.toPage === null) {
      return linkButton
    }
    return goButton
  }
  const icon = visible ? 'angle-up' : 'angle-down'
  const doRemoveTransition = () => removeTransition(transition.id)
  return !!book && (
    <div className={styles.component}>
      <div className={styles.header}>
        <div className={styles.row}>
          <TextAreaInput
            className={styles.textArea}
            debounce={500}
            domProps={{
              value: transition.text,
              onChange: text => updateTransition({ text }),
              placeholder: 'Texte de la transition',
            }}
          />
          <ButtonIcon
            className={styles.deleteButton}
            icon="delete"
            domProps={{ onClick: doRemoveTransition }}
          />
        </div>
        <div className={styles.destination}>
          <span>Page de destination : </span>
          <SelectInput
            className={styles.selectPage}
            domProps={{
              value: transition.toPage,
              onChange: toPage => updateTransition({
                toPage,
              }),
            }}
          >
            <option value="">-- Vers une nouvelle page --</option>
            {book.pages.map(page => <option value={page.id} key={page.id}>{page.title}</option>)}
          </SelectInput>
          {
            renderButton()
          }
        </div>
      </div>
      <Body
        {...props}
        pose={visible ? 'visible' : 'hidden'}
      />
      <div
        className={styles.summary}
        onClick={() => setVisible(!visible)}
      >
        <div className={styles.summaryDisplay}>
          <div className={styles.summaryLabel}>Conditions</div>
          <div className={styles.summaryNumber}>{transition.conditions.length}</div>
        </div>
        <div className={styles.summaryDisplay}>
          <div className={styles.summaryLabel}>Effets</div>
          <div className={styles.summaryNumber}>{transition.effects.length}</div>
        </div>
        <div className={styles.summaryDisplay}>
          <div className={styles.summaryLabel}>Lancers</div>
          <div className={styles.summaryNumber}>{transition.rolls.length}</div>
        </div>
        <div className={styles.collapseButton}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={icon}
          />
        </div>
      </div>
    </div>
  )
}

export default TransitionRow
