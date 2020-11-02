import React from 'react'
import Button, { ButtonType, ButtonSize } from './components/Button/button'
const App = () => {
  return (
    <div>
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
      <Button btnType={ButtonType.Link} href='https://github.com' target='_blank'>
        Link
      </Button>
    </div>
  )
}

export default App
