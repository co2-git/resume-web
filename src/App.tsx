import * as React from 'react'
import Provider from '@francoisv/graff-project-18276098/dist/core/Provider'
import Home from './components/Layout/Home'

const App = () => (
  <Provider uri={ 'https://francois-dev.herokuapp.com/graphql' }>
    <Home />
  </Provider>
)

export default App
