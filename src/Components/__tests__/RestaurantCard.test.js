import { render, screen } from "@testing-library/react"
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard"
import MOCK_DATA from '../mocks/resCardMock.json'
import "@testing-library/jest-dom"

it("Should render RestaurantCard component with props Data", () => {

  render(
    <RestaurantCard 
      resData={MOCK_DATA}
    />
  )

  const nameOfRes = screen.getByText("Dabba Garam (Homestyle,Combo, Thali & More)")

  expect(nameOfRes).toBeInTheDocument()

})

it("Should render RestaurantCard with promoted label component with props Data", () => {

  const WithPromotedLabel = withPromotedLabel(RestaurantCard)
  render(
    <WithPromotedLabel 
      resData={MOCK_DATA}
    />
  )
  const promotedLabel = screen.getByText("Promoted")


  expect(promotedLabel).toBeInTheDocument()

})