const { render, screen, fireEvent } = require("@testing-library/react")
import { Provider } from 'react-redux'
import Headers from '../Header'
import appStore from '../../utils/appStore'
import { BrowserRouter } from 'react-router-dom'
import "@testing-library/jest-dom"


it("Should render header component with login button", () => {

  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Headers />
      </Provider>
    </BrowserRouter>
  )

  // const loginButton = screen.getByRole("button")
  // const loginButton = screen.getByText("Login")
  const loginButton = screen.getByRole("button", { name: "Login"})


  expect(loginButton).toBeInTheDocument()
})

it("Should render header component with Cart items 0", () => {

  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Headers />
      </Provider>
    </BrowserRouter>
  )

  const cartItem = screen.getByText("Cart (0)")

  expect(cartItem).toBeInTheDocument()
})

it("Should render header component with Cart items", () => {

  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Headers />
      </Provider>
    </BrowserRouter>
  )

  // we can also use regex
  const cartItem = screen.getByText(/Cart/)
  
  expect(cartItem).toBeInTheDocument()
})

it("Should change login button to logout on click", () => {

  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Headers />
      </Provider>
    </BrowserRouter>
  )

  const loginButton = screen.getByRole("button", { name: "Login"})

  fireEvent.click(loginButton)

  const logoutButton = screen.getByRole("button", { name: "Logout"})

  expect(logoutButton).toBeInTheDocument()
})