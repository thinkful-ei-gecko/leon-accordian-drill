import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Accordian from './Accordian'

describe('<Accordian />', () => {


  const sections = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ];

  //smoke test
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordian />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  //snapshots
  it('renders an empty ul with no section prop', () => {
    const wrapper = shallow(<Accordian />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders no sections as active by default', () => {
    const wrapper = shallow(<Accordian sections={sections}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('clicking a button opens that paragraph', () => {
    const wrapper = shallow(<Accordian sections={sections} />)
    wrapper.find('button').at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('only the last clicked section displays', () => {
    const wrapper = shallow(<Accordian sections={sections} />)
    wrapper.find('button').at(1).simulate('click')
    wrapper.find('button').at(0).simulate('click')
    wrapper.find('button').at(2).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })







    
  // it('renders without errors', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<Accordian />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // })

  // it('renders an empty li when the sections prop is not supplied', () => {
  //   const wrapper = shallow(<Accordian />) 
  //   toJson(wrapper).toMatchSnapshot()
  // })

})