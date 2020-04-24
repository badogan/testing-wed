import React from 'react'
import ReactDOM from 'react-dom'
import ButtonMUI from '../button-MUI'
import {render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'


afterEach(cleanup) //In fact not necessary

it("renders without crashing",()=>{
    const div = document.createElement("div")
    ReactDOM.render(<ButtonMUI></ButtonMUI>,div)
})

it("renders MUI-Button correctly", ()=>{
    // const {getByTestId} = render(<Button label="click me please"/>)
    const basri = render(<ButtonMUI/>)
    expect(basri.getByTestId("button-MUI")).toHaveTextContent("Hello World")
})

it("MUI-Button matches snapshot",()=>{
    const tree = renderer.create(<ButtonMUI/>).toJSON()
    expect(tree).toMatchSnapshot()
})