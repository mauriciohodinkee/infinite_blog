
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Blog from 'Blog';

const intersectionObserverMock = () => ({
  observe: () => null
})
window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders without crashing', () => {
  act(() => {
    render(<Blog />, container);
  });
});