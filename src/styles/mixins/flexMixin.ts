import * as React from 'react'

export interface FlexMixinOptions {
  dir: 'vert' | 'hori'

  stretch?: boolean
}

const flexMixin = (options: FlexMixinOptions): React.CSSProperties => {
  const dir = options.dir || 'hori'
  const style: React.CSSProperties = {
    display: 'flex',
    flexDirection: dir === 'vert' ? 'column' : 'row'
  }
  if (options.stretch) {
    style.alignSelf = 'stretch'
  }
  return style
}

export default flexMixin
