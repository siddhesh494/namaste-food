import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from '../mocks/ResListMock.json'
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import '@testing-library/jest-dom'

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA)
    }
  })
})

it("Should search Res list for pizza input", async () => {
  
  await act(async () => render(
  <BrowserRouter>
    <Body />
  </BrowserRouter>
  ))

  const cardsBeforeSearch = screen.getAllByTestId('resCard')
  expect(cardsBeforeSearch.length).toBe(9)


  const searchBtn = screen.getByRole("button", { name: "Search"})

  const searchInput = screen.getByTestId('searchInput')

  fireEvent.change(searchInput, { target: {value: 'pizza'}})

  fireEvent.click(searchBtn)

  // screen should load 3 cart
  const cardBeforeSearch = screen.getAllByTestId('resCard')

  expect(cardBeforeSearch.length).toBe(3)

})

it("Should filter top rated res", async () => {

  await act(async () => render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
    ))

    const btn = screen.getByText('Top Rated Restaurantes')
    expect(btn).toBeInTheDocument()

    fireEvent.click(btn)
    const cardBeforeSearch = screen.getAllByTestId('resCard')

    expect(cardBeforeSearch.length).toBe(7)

})