import React from 'react';
import {render,screen, cleanup,fireEvent} from '@testing-library/react'
import { LandingPage } from "../LandingPage";

// Note: I have set up the unit testing and provided only sample test cases 
// This can be extended to write detailed testcases

//cleanup the code after each
afterEach(()=>{
    cleanup();
})

test('Should Render Landing Page Component', ()=> {
    render(<LandingPage/>)
    const element = screen.getByTestId('test');
    expect(element).toBeInTheDocument();
})

test('Should validate the style of Landing page', ()=> {
    render(<LandingPage/>)
    const element = screen.getByTestId('test');
    expect(element).toHaveStyle(`margin: 25px 25px 25px 25px`)
    
})


