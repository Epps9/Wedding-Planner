import React from 'react';
import { shallow } from 'enzyme';
import { InspirationsComponent } from './Inspirations';

describe('Component Inspirations', () => {
  it('should render without crashing', () => {
    const component = shallow(<InspirationsComponent />);
    expect(component).toBeTruthy();
  });
});
