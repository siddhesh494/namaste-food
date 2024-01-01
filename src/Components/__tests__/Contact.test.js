import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"


describe("contact Us page test cases", () => {
  
  beforeAll(() => {
    // console.log("Before all")
  })

  beforeEach(() => {
    // console.log("Before each")
  })


  test("Should load contact us component", () => {

    render(
      <Contact />
    )
  
    const heading = screen.getByRole("heading")
  
    //this is use to check if the coponent is loadng or not
    expect(heading).toBeInTheDocument() 
  })
  
  it("Should load button inside contact component", () => {
  
    render(
      <Contact />
    )
  
    const button = screen.getByText("Submit")
  
    //this is use to check if the coponent is loadng or not
    expect(button).toBeInTheDocument() 
  })
  
  it("Should load input name inside contact component", () => {
  
    render(
      <Contact />
    )
  
    const inputName = screen.getByPlaceholderText("name")
  
    //this is use to check if the coponent is loadng or not
    expect(inputName).toBeInTheDocument() 
  })
  
  test("Should load 2 input boxes on the contact component", () => {
  
    render(
      <Contact />
    )
  
    // if there are multiple items
    const inputBoxes = screen.getAllByRole("textbox")
  
    // It will contain virtual DOM object
    //console.log(inputBoxes) 
  
    expect(inputBoxes.length).toBe(2) 
  })


})
