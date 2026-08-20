import {fireEvent, render, screen} from "@testing-library/react"
import { Sidebar } from "./Sidebar"
import { renderWithRouter } from '../../../../../config/tests/renderWithRouter/RenderWithRouter'
describe("Sidebar" , () => {
  test("Сайдбар отображается", () => {
    render(renderWithRouter(<Sidebar />, { route: '/' }));
    expect(screen.getByTestId("sidebar")).toBeInTheDocument()
  })

  test("Сайдбар отображается и раскрывается", () => {
    render(renderWithRouter(<Sidebar />, { route: '/' }));
    const toggleButton = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId("sidebar")).toBeInTheDocument()
    fireEvent.click(toggleButton)
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed")
  })
})