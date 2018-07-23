import * as React from 'react'
import { SkillModel } from '@francoisv/graff-project-18276098/dist/core/typings'
import Typography from '@material-ui/core/Typography'
import SkillLevel from './SkillLevel';

export interface SkillGridProps {
  skills: SkillModel[]
}

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  // flexWrap: 'wrap',
  overflow: 'auto'
}

const skillStyle: React.CSSProperties = {
  backgroundColor: 'white',
  boxShadow: '0 2px 2px 1px rgba(0, 0, 0, 0.1)',
  boxSizing: 'border-box',
  borderRadius: 4,
  padding: 6,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: 120,
  height: 120,
  margin: 18,
}

const skillWrapperStyle: React.CSSProperties = {

}

const imageWrapperStyle: React.CSSProperties = {
  // border: '1px solid #999',
  padding: 8,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}

const titleStyle: React.CSSProperties = {
  textAlign: 'center'
}

const SkillGrid: React.SFC<SkillGridProps> = (props: SkillGridProps) => {
  console.log(props)
  return (
    <div style={ containerStyle }>
      { props.skills.map(skill => (
        <div key={ skill._id } style={ skillWrapperStyle }>
          <div style={ skillStyle }>
            <Typography variant="subheading" gutterBottom style={ titleStyle } color="textSecondary">
              { skill.name }
            </Typography>
            <div style={ imageWrapperStyle }>
              <img src={ skill.iconUrl } style={{ width: 80 }} />
            </div>
          </div>
          <SkillLevel level={ skill.level } />
        </div>
      )) }
    </div>
  )
}

export default SkillGrid
