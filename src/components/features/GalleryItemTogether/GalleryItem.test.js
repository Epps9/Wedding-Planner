import React from 'react';
import { shallow } from 'enzyme';
import { GalleryItemComponent } from './GalleryItem';

describe('Component GalleryItem', () => {
  it('should render without crashing', () => {
    const component = shallow(<GalleryItemComponent />);
    expect(component).toBeTruthy();
  });
});
