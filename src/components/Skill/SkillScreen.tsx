import * as React from 'react'
import withSkillType from '@francoisv/graff-project-18276098/dist/models/SkillType/react/decorator'
import { SkillTypeModel } from '@francoisv/graff-project-18276098/dist/core/typings'
import SkillType from './SkillType';

export interface SkillScreenProps {
  listOfSkillType: SkillTypeModel[]
}

const SkillScreen: React.SFC<SkillScreenProps> = (props: SkillScreenProps) => {
  return (
    <div>
      { props.listOfSkillType.map(skillType => (
        <SkillType key={ skillType._id } skillType={ skillType } />
      )) }
    </div>
  )
}

const projection = {
  limit: 100,
  sort: [{ field: 'position', reverse: false }],
}

export default withSkillType(SkillScreen, { projection })
