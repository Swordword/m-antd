import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonType, ButtonSize } from './button'

const defaultProps = {
  onClick: jest.fn(),
}

const testProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: 'class',
}
const disabledProps = {
  disabled: true,
  onClick: jest.fn(),
}

describe('test Button components', () => {
  it('should render the corrent default button', () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>)
    const element = wrapper.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
  it('should render the corrent component on different props', () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>)
    const element = wrapper.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-primary btn-lg class')
  })
  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(
      <Button btnType={ButtonType.Link} href='https://ww'>
        Link
      </Button>
    )
    const element = wrapper.getByText('Link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
  })
  it('should render disabled button when disabled is true', () => {
    const wrapper = render(<Button {...disabledProps}>Disabled</Button>)
    const element = wrapper.getByText('Disabled') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })
})
