import React from 'react';

import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
it('renders shallow', ()=>{

  const wrapper = shallow(<App/>);
  expect(wrapper.contains(<Header/>)).toEqual(true);
});

it('renders correctly', ()=>{
  const tree  = renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot()
});