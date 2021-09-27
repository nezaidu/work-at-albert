/**
 * @format
 */
/* global __DEV__ */
import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import {render} from '@testing-library/react-native';
import { renderHook, cleanup, act } from '@testing-library/react-hooks';
import FilmsScreen, { useFilms, useSorting } from '../src/screens/FilmsScreen';
import initClient from '../src/core';
import filmsJSON from '../__mocks__/films.json';
import { Film, MetaDocument, SortingDirection } from '../src/generated/type';

initClient();

const films: [Film] = filmsJSON as unknown as [Film];

const mockedType = require('../src/generated/type');

mockedType.useFilmsQuery = () => {
  return films;
};

mockedType.useMetaQuery = () => {
  return {
    data: {
      meta: {
        filmsSortingDirection: SortingDirection.Asc,
      },
    },
  };
};

it('fetches films', () => {
  const {toJSON } = render(<FilmsScreen />);

  const tree = toJSON();

  expect(tree).toMatchSnapshot();
});

it('sorts films by release date ASC', () => {
  const sortedFilms = useFilms(SortingDirection.Asc);
  expect(sortedFilms[0].releaseDate).toMatch("1977-05-25");
});

it('sorts films by release date DESC', () => {
  const sortedFilms = useFilms(SortingDirection.Desc);
  expect(sortedFilms[0].releaseDate).toMatch("2005-05-19");
});

it('toggles sorting direction', () => {
  const { sortingDirection, toggleSorting } = useSorting();

  let newSorting;
  act(() => {
    newSorting = toggleSorting();
  });

  expect(sortingDirection).not.toMatch(newSorting);
});
