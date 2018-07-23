import * as React from 'react'

import flexMixin from '../../styles/mixins/flexMixin'

export interface ColumnProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode

  stretch?: boolean
  style?: React.CSSProperties
}

const Column: React.SFC<ColumnProps> = ({
  children,
  stretch,
  style,
  ...divProps
}: ColumnProps) => {
  const styles: React.CSSProperties = {
    ...flexMixin({ dir: 'vert', stretch }),
    ...style,
  }
  return (
    <div style={ styles } { ...divProps }>
      { children }
    </div>
  )
}

export default Column
