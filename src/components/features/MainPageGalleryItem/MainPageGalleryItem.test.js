import React from 'react';
import { shallow } from 'enzyme';
import { MainPageGalleryItemComponent } from './MainPageGalleryItem';

describe('Component MainPageGalleryItem', () => {
  it('should render without crashing', () => {
    const component = shallow(<MainPageGalleryItemComponent />);
    expect(component).toBeTruthy();
  });
});
