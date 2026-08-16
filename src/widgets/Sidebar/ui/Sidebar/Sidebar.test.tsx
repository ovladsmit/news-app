import {fireEvent, render, screen} from "@testing-library/react"
import { Sidebar } from "./Sidebar"
describe("Sidebar" , () => {
  test("Сайдбар отображается", () => {
    render(<Sidebar/>)
    expect(screen.getByTestId("sidebar")).toBeInTheDocument()
  }),

  test("Сайдбар отображается", () => {
    render(<Sidebar/>)
    const toggleButton = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId("sidebar")).toBeInTheDocument()
    fireEvent.click(toggleButton)
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed")
  })
})