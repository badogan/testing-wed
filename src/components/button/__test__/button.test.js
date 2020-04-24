import React from 'react'
import ReactDOM from 'react-dom'
import Button from './../button'
// import {isTSAnyKeyword} from '@babel/types'
import {render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'


afterEach(cleanup) //In fact not necessary

it("renders without crashing",()=>{
    const div = document.createElement("div")
    ReactDOM.render(<Button></Button>,div)
})

it("renders Button correctly", ()=>{
    // const {getByTestId} = render(<Button label="click me please"/>)
    const basri = render(<Button label="click me please"/>)
    // console.log('basri: ',basri)
    expect(basri.getByTestId("button")).toHaveTextContent("click me please")
})

it("renders Button correctly", ()=>{
    const {getByTestId} = render(<Button label="click me"/>)
    expect(getByTestId("button")).toHaveTextContent("click me")
})

it("matches snapshot",()=>{
    const tree = renderer.create(<Button label='save'/>).toJSON()
    expect(tree).toMatchSnapshot()
})

it("matches snapshot 2",()=>{
    const tree = renderer.create(<Button label='click me please'/>).toJSON()
    expect(tree).toMatchSnapshot()
})