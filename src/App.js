import React from "react"
import Header from "./components/Header"
import Section from "./components/Section"
import data from "./data"

export default function App() {
  const sectionElements = data.map(item => {
    return (
      <Section 
        key = {item.id}
        item = {item}
      />
    )
  })

  return (
    <div className="main-container">
      <Header />
      <div className="section-container">
          {sectionElements}
      </div>
    </div>
  )
}