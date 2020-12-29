import React from 'react'
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'

const App = () => {
  return (
    <div>
      <p>learn react</p>
      <header>
        <Menu defaultIndex={'0'}>
          <MenuItem>cool link</MenuItem>
          <MenuItem>cool link</MenuItem>
          <SubMenu title='dropwdown'>
            <MenuItem>dropwdown 1</MenuItem>
            <MenuItem>dropwdown 2</MenuItem>
            <MenuItem>dropwdown 3</MenuItem>
          </SubMenu>
          <MenuItem>
            <a href='https://github.com'>to github</a>
          </MenuItem>
        </Menu>
      </header>
      <Button
        onClick={(e) => {
          e.preventDefault()
          alert(123)
        }}
      >
        Hello
      </Button>
      <Button autoFocus btnType={ButtonType.Primary} size={ButtonSize.Large}>
        Hello
      </Button>
      <Button
        btnType={ButtonType.Link}
        href='https://github.com'
        target='_blank'
      >
        Link
      </Button>
    </div>
  )
}

export default App
