import * as React from 'react'
import Column from '../Flex/Column'
import Picker from '../Picker/Picker'
import { SkillModel } from '@francoisv/graff-project-18276098/dist/core/typings'
import withSkill from '@francoisv/graff-project-18276098/dist/models/Skill/react/decorator'

export interface SearchSkillProps {
  skills: SkillModel[]
}

const Item = (skill: SkillModel) => (
  <div key={ skill._id }>
    { skill.name }
  </div>
)

class SearchSkill extends React.PureComponent<SearchSkillProps> {

  public render() {
    console.log(this.props.skills)
    return (
      <Column stretch={ true } className="gutter">
        <Picker
          items={ this.props.skills }
          onFocus={ this.onFocus }
          placeholder={ 'Which skills are you looking for in a developer?' }
          renderItem={ Item }
        />
      </Column>
    )
  }

  private onFocus = () => {
    console.log('focus')
  }

}

const projection = {
  limit: 5,
  sort: [
    { field: 'level', reverse: true },
    { field: 'name', reverse: false },
  ]
}

export default withSkill(SearchSkill, { projection })
