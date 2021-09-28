/**
 * @format
 */
import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import {fireEvent, render} from '@testing-library/react-native';
import initClient from '../src/core';
import filmsJSON from '../__mocks__/films.json';
import {Film, SortingDirection} from '../src/generated/type';
import Films from '../src/components/Films';
import {act} from 'react-test-renderer';

initClient();

const films: [Film] = filmsJSON as unknown as [Film];

const mockedType = require('../src/generated/type');

mockedType.useFilmsQuery = () => {
  return films;
};

it('render films', () => {
  const {toJSON} = render(
    <Films
      data={films}
      sortingDirection={SortingDirection.Asc}
      toggleSorting={jest.fn()}
    />,
  );

  const tree = toJSON();

  expect(tree).toMatchSnapshot();
});

it('should toggle sorting on button press', () => {
  const toggleSorting = jest.fn();
  const {getByTestId} = render(
    <Films
      data={films}
      sortingDirection={SortingDirection.Asc}
      toggleSorting={toggleSorting}
    />,
  );

  act(() => {
    fireEvent.press(getByTestId('toggle-sorting-button'));
  });

  expect(toggleSorting).toBeCalled();
});
