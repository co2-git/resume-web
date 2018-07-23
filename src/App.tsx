import * as React from 'react'
import Provider from '@francoisv/graff-project-18276098/dist/core/Provider'

import SkillScreen from './components/Skill/SkillScreen'

const App = () => (
  <Provider uri={ 'https://francois-dev.herokuapp.com/graphql' }>
    <SkillScreen />
  </Provider>
)

export default App
