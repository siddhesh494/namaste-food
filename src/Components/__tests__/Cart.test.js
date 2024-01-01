import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import { fireEvent, render, screen } from "@testing-library/react"
import MOCK_DATA from '../mocks/resMenuMock.json'
import { BrowserRouter } from "react-router-dom"
import appStore from '../../utils/appStore'
import { Provider } from 'react-redux'
import Header from "../Header";
import '@testing-library/jest-dom'
import Cart from '../Cart'

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA)
    }
  })
})

it("should load restaurant Menu component", async () => {

  await act(async () => render(
    <BrowserRouter >
    <Provider store={appStore}>
      <Header /> {/* We want to check the cart */}
      <RestaurantMenu />
      <Cart />
    </Provider>
    
    </BrowserRouter>
  ))

  const accordionHeader = screen.getByText("New Launches (9)")
  fireEvent.click(accordionHeader)
  
  const footList = screen.getAllByTestId("foodItems")
  expect(footList.length).toBe(9)

  const addBtns = screen.getAllByRole("button", {name: "Add+"})

  fireEvent.click(addBtns[0])

  expect( screen.getByText("Cart (1)")).toBeInTheDocument()
  fireEvent.click(addBtns[1])
  expect( screen.getByText("Cart (2)")).toBeInTheDocument()

  expect(screen.getAllByTestId("foodItems").length).toBe(11);// {/* 9 from restroMenu a+ 2 from cart */}

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart"}))

  expect(screen.getAllByTestId("foodItems").length).toBe(9)
  expect(screen.getByText("Cart is empty Add Items to the cart!")).toBeInTheDocument()
})