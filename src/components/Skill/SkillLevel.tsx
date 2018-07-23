import * as React from 'react'
import StarIcon from '@material-ui/icons/Star'
import StarBorderIcon from '@material-ui/icons/StarBorder'

export interface SkillLevelProps {
  level: number
}

const SkillLevel: React.SFC<SkillLevelProps> = (props: SkillLevelProps) => {
  const stars = []
  for (let i = 0; i < props.level; i++) {
    stars.push(
      <StarIcon
        key={ i }
        color={ 'disabled' }
        fontSize={ 'default' }
        style={{ fontSize: 16, opacity: 0.5 }}
      />
    )
  }
  for (let i = props.level; i < 5; i++) {
    stars.push(
      <StarBorderIcon
        key={ i }
        color={ 'disabled' }
        fontSize={ 'default' }
        style={{ fontSize: 16, opacity: 0.5 }}
      />
    )
  }
  return (
    <div style={{ textAlign: 'center', marginTop: 22, marginBottom: 11 }}>
      { stars }
    </div>
  )
}

export default SkillLevel
