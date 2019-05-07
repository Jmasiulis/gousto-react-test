import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Search from '../Search'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    onSearch: jest.fn()
  }

  const enzymeWrapper = shallow(<Search {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Search', () => {
    it('should render self', () => {
      const { enzymeWrapper } = setup();

      expect(enzymeWrapper.find('input').hasClass('search')).toBe(true);
    })

    it('should call onSearch if something is entered in the search field', () => {
      const { enzymeWrapper, props } = setup();
      const input = enzymeWrapper.find('input');
      input.props().onChange('a');
      expect(props.onSearch.mock.calls.length).toBe(1);
    })
  })
})