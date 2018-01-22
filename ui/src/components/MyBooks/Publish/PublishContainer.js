//eslint-disable-next-line
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { AuthService } from 'services'
import Publish from './Publish'

const query = gql`
  query ConnectedUserBook($author: ID!) {
    books(author: $author, draft: true) {
      id
      name
      cover
      authorId
    }
  }
`

// TODO: Add Publish mutation


export default graphql(query, {
  options: () => ({
    variables: {
      author: AuthService.getConnectedUserId(),
    },
  }),
  props: ({ data: { books }, ...rest }) => ({
    ...rest,
    drafts: books,
  }),
})(Publish)
