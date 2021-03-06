import React from 'react'
import { GamePanels, ToolbarButton } from 'components/common'
import {
  Toolbar,
  ToolbarTop,
  ToolbarBottom,
  ToolbarLogo,
  ExitButton,
} from '../common'
import styles from './style.scss'

const GameToolbar = ({ panelState, switchPanel }) => {
  return (
    <Toolbar className={styles.component}>
      <ToolbarTop>
        <ToolbarLogo white />
        { GamePanels.map(panel => (
          <ToolbarButton
            key={panel.key}
            icon={panel.icon}
            dark
            selected={panelState === panel.key}
            domProps={{
              onClick: () => switchPanel(panel.key),
            }}
          />
        ))}
      </ToolbarTop>
      <ToolbarBottom>
        <ExitButton />
      </ToolbarBottom>
    </Toolbar>
  )
}

export default GameToolbar
