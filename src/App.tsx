import React from 'react'
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'

const App = () => {
  return (
    <div>
      <p>learn react</p>
      <header>
        <Menu defaultIndex={0} mode='vertical'>
          <MenuItem>cool link</MenuItem>
          <MenuItem>cool link</MenuItem>
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
