import React from 'react'
import { browserHistory } from 'react-router'
import { ToolbarButton } from 'components/common/ToolbarLink'
import DisplayStats from '../common/DisplayStats'
import DisplayObjects from '../common/DisplayObjects'
import styles from './style.scss'
import logoWhite from '../../../common/logo_white.svg'
// import { RouteService } from '../../../../services'

const TrialToolbar = () => {
  return (
    <div className={styles.component}>
      <div className={styles.top}>
        <img className={styles.logo} alt="logo" src={logoWhite} />
        <DisplayStats />
        <DisplayObjects />
      </div>
      <div className={styles.bottom}>
        {/* TODO: Externalize this button */}
        <div onClick={browserHistory.goBack}>
          <ToolbarButton
            domProps={{ className: styles.darkButton }}
            icon="exit_to_app"
          />
        </div>
      </div>
    </div>
  )
}

export default TrialToolbar
