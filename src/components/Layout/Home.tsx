import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import MenuIcon from '@material-ui/icons/Menu'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import CodeIcon from '@material-ui/icons/Code'
import BuildIcon from '@material-ui/icons/Build'
import BugIcon from '@material-ui/icons/BugReport'
import Avatar from '@material-ui/core/Avatar'

import SkillScreen from '../Skill/SkillScreen'
import info from '../../../package.json'

export interface HomeState {
  isDrawerOpen: boolean
}

const links = [
  {
    name: 'View source on Github',
    link: 'https://github.com/co2-git/resume-web',
    icon: <CodeIcon />
  },
  {
    name: 'Report a bug',
    link: 'https://github.com/co2-git/resume-web/issues',
    icon: <BugIcon />
  },
  {
    name: 'View Project Management',
    link: 'https://github.com/co2-git/resume-web/projects/1',
    icon: <BuildIcon />
  },
]

class Home extends React.PureComponent<{}, HomeState> {

  public state = {
    isDrawerOpen: false
  }

  public render() {
    return (
      <div>
        <AppBar position="sticky" color="default">
          <Toolbar disableGutters={ this.state.isDrawerOpen }>
            <IconButton
              color="inherit"
              aria-label="Menu"
              onClick={ this.onToggleDrawer }
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              francois-dev
            </Typography>
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          onClose={ this.onCloseDrawer }
          onOpen={ this.onOpenDrawer }
          open={ this.state.isDrawerOpen }
        >
          <div style={{ width: 250 }} />
          <List>
            <ListSubheader>
              <ListItem>
                <ListItemIcon>
                  <Avatar
                    alt="francois-dev"
                    src="https://avatars3.githubusercontent.com/u/1662766?s=24&v=4"
                    style={{ height: 24, width: 24 }}
                  />
                </ListItemIcon>
                <ListItemText primary={ `francois-dev v${ info.version }` } />
              </ListItem>
            </ListSubheader>
            { links.map(link => (
              <div>
                <Divider />
                <ListItem onClick={ this.goTo(link.link) } button={ true }>
                  <ListItemIcon>
                    { link.icon }
                  </ListItemIcon>
                  <ListItemText primary={ link.name } />
                </ListItem>
              </div>
            )) }
          </List>
        </SwipeableDrawer>
        <SkillScreen />
      </div>
    )
  }

  private onCloseDrawer = () => this.setState({ isDrawerOpen: false })
  private onOpenDrawer = () => this.setState({ isDrawerOpen: true })
  private onToggleDrawer = () => this.setState({ isDrawerOpen: !this.state.isDrawerOpen })

  private goTo = (source: string) => () => {
    window.open(source)
    this.onCloseDrawer()
  }

}

export default Home
