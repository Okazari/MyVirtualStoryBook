import React from 'react'
import { connect } from 'react-redux'
import { Layout, GameContent, Panel, GameToolbar } from 'components/Layout'
import { DisplayStats, DisplayItems } from 'components/common'
import Game from 'components/Views/Game'

const mapStateToProps = ({ ui: { panelIsOpen } }) => ({ panelIsOpen })

const GameView = (props) => {
  const { panelIsOpen } = props
  return (
    <Layout>
      <GameToolbar />
      <GameContent>
        {
          panelIsOpen &&
          <Panel>
            <DisplayStats />
            <DisplayItems />
          </Panel>
        }
        <Game {...props} />
      </GameContent>
    </Layout>
  )
}

export default connect(mapStateToProps)(GameView)
