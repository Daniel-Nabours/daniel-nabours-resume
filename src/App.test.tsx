import { render, screen } from '@testing-library/react';
import App from './App';
import moxios from 'moxios'

describe('the main page', () => {
  it('renders', ()=>{
    const { getByTestId } = render(<App/>)
    expect(getByTestId("app")).toBeTruthy()
  }); 
  it('has 5 pages', ()=>{
    const { getByTestId } = render(<App/>)
    expect(getByTestId("page1")).toBeTruthy()
    expect(getByTestId("page2")).toBeTruthy()
    expect(getByTestId("page3")).toBeTruthy()
    expect(getByTestId("page4")).toBeTruthy()
    expect(getByTestId("page5")).toBeTruthy()
  });
  it('displays images after being fetched', ()=>{
    const { getByTestId } = render(<App/>)
  });


});
