import React from 'react';
import { shallow } from 'enzyme';
import { ImageSliderComponent } from './ImageSlider';

describe('Component ImageSlider', () => {
  it('should render without crashing', () => {
    const component = shallow(<ImageSliderComponent />);
    expect(component).toBeTruthy();
  });
});
