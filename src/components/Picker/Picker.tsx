import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import { first } from 'lodash'

export interface PickerItem {
  [field: string]: any
}

export interface PickerProps {
  items: PickerItem[]
  renderItem: (
    item: PickerItem | null | undefined,
    itemIndex: number | null
  ) => React.ReactNode

  onFocus?: () => void
  placeholder?: string
  selected?: PickerItem | null | undefined
}

export interface PickerState {
  items: PickerItem[]
  open: boolean
  search: string
  selected: PickerItem | null | undefined
  suggested: PickerItem | null | undefined
  top: number
  width: number
}

class Picker extends React.PureComponent<PickerProps, PickerState> {

  public static id: number = 0

  public state = {
    items: this.props.items,
    open: false,
    search: '',
    selected: this.props.selected,
    suggested: first(this.props.items),
    top: 0,
    width: 0,
  }

  private id: string = `picker-${ Picker.id++ }`

  public render() {
    return (
      <div id={ this.id }>
        <TextField
          fullWidth
          margin="dense"
          label={ this.props.placeholder || '' }
          InputProps={{
            onBlur: () => setTimeout(() => this.setState({ open: false }), 250),
            onFocus: this.onFocus,
          }}
          type="search"
        />
      </div>
    )
  }

  private onFocus = async () => {
    console.log('focus')
    // const node = document.getElementById(this.id)
    // if (!node) {
    //   throw new Error('Can not find node by id')
    // }
    // const dimensions = node.getBoundingClientRect()
    // await this.setState({
    //   open: true,
    //   top: dimensions.top + dimensions.height,
    //   width: dimensions.width,
    // })
    // if (typeof this.props.onFocus === 'function') {
    //   this.props.onFocus()
    // }
  }

}

export default Picker
