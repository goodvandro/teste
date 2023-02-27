import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory'

// generated by Fragment Matcher plugin
import introspectionResult from '~/fragmentTypes.json'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: introspectionResult,
})
const cache = new InMemoryCache({
  fragmentMatcher,
})

export default ({ req, app }) => {
  return {
    httpEndpoint:
      process.env.BACKEND_URL ||
      'https://www.admin.visitsaotomeprincipe.st/graphql',
    cache: cache,
  }
}