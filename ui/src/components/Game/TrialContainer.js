import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import AuthService from 'services/AuthService'
import Game from './Game'

const query = gql`
  query tryGame($bookId: ID!, $playerId: ID!) {
    tryGame(bookId: $bookId, playerId: $playerId) {
      id
      currentPageId
      playerId
      book {
        name
        tags
        synopsis
        cover
        startingPageId
        genreId
        draft
        creationDate
        lastModificationDate
        revision
        author {
          username
        }
        pages {
          id
          title
          description
          text
          effects {
            operator
            subject
            value
            type
          }
          transitions {
            fromPage
            toPage
            text
            conditionOperator
            effects {
              operator
              subject
              value
              type
            }
            conditions {
              operator
              subject
              value
              type
            }
          }
        }
      }
      stats
      objects
    }
  }
`
// TODO: Add loading and error returns
const TrialContainer = ({ params }) => {
  return (
    <Query
      query={query}
      variables={{
        bookId: params.bookId,
        playerId: AuthService.getConnectedUserId(),
      }}
    >
      {
        ({ loading, error, data }) => {
          if (loading) return null
          if (error) return null
          const game = data.tryGame
          return <Game gameId={game.id} key={game.id} game={game} />
        }
      }
    </Query>
  )
}

export default TrialContainer
