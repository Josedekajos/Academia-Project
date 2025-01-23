import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import Header from "../app/components/Header"

describe("Header", () => {
  it("renders the logo", () => {
    render(<Header />)
    const logoElement = screen.getByText("Academia")
    expect(logoElement).toBeInTheDocument()
  })

  it("renders navigation links", () => {
    render(<Header />)
    const homeLink = screen.getByText("Home")
    const dashboardLink = screen.getByText("Dashboard")
    const aboutLink = screen.getByText("About")
    const groupsLink = screen.getByText("Groups")
    const loginLink = screen.getByText("Login")
    const chatLink = screen.getByText("Chat")

    expect(homeLink).toBeInTheDocument()
    expect(dashboardLink).toBeInTheDocument()
    expect(aboutLink).toBeInTheDocument()
    expect(groupsLink).toBeInTheDocument()
    expect(loginLink).toBeInTheDocument()
    expect(chatLink).toBeInTheDocument()
  })
})

