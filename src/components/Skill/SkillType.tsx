import * as React from 'react'
import { SkillTypeModel, SkillModel } from '@francoisv/graff-project-18276098/dist/core/typings'
import withSkill from '@francoisv/graff-project-18276098/dist/models/Skill/react/decorator'
import Typography from '@material-ui/core/Typography'

import SkillGrid from './SkillGrid'

export interface SkillTypeGraff {
  listOfSkill: SkillModel[]
}

export interface SkillTypeOwnProps {
  skillType: SkillTypeModel
}

export type SkillTypeProps =
  & SkillTypeGraff
  & SkillTypeOwnProps

const headerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
}

const lineStyle: React.CSSProperties = {
  borderBottom: '1px dashed #ccc',
  height: 0,
  padding: 0.5,
  flexGrow: 2,
  marginLeft: 16,
}

const containerStyle: React.CSSProperties = {
  margin: '16px 16px'
}

const SkillType: React.SFC<SkillTypeProps> = (props: SkillTypeProps) => (
  <div key={ props.skillType._id } style={ containerStyle }>
    <div style={ headerStyle }>
      <Typography variant="headline" gutterBottom>
        <span>{ props.skillType.name }</span>
        <small style={{ color: '#aaa' }}> ({ props.listOfSkill.length })</small>
      </Typography>
      <div style={ lineStyle } />
    </div>
    <div>
      <SkillGrid skills={ props.listOfSkill } />
    </div>
  </div>
)

const projection = {
  limit: 100,
  sort: [
    { field: 'level', reverse: true },
    { field: 'name', reverse: false },
  ]
}

export default withSkill(
  SkillType,
  (props: SkillTypeOwnProps) => ({
    input: {
      type: props.skillType._id,
    },
    projection,
  })
)
