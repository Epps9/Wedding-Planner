import React from 'react';
import { shallow } from 'enzyme';
import { MessageSentComponent } from './MessageSent';

describe('Component MessageSent', () => {
  it('should render without crashing', () => {
    const component = shallow(<MessageSentComponent />);
    expect(component).toBeTruthy();
  });
});
