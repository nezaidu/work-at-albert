import React from 'react';
import {
  NavigationComponentProps,
  NavigationFunctionComponent,
} from 'react-native-navigation';
import {
  Film,
  SortingDirection,
  useFilmsQuery,
  useMetaQuery,
  MetaDocument,
} from '../generated/type';
import Films from '../components/Films';
import {cache} from '../core';
import moment from 'moment';
import { fonts } from '../../ui';

type UseFilms = (d: SortingDirection) => Film[];

export const useFilms: UseFilms = (direction: SortingDirection) => {
  const {data} = useFilmsQuery({
    fetchPolicy: 'cache-and-network'
  });

  let films = (data?.allFilms?.films || []) as Film[];
  const newFilms = [...films];

  switch (direction) {
    case SortingDirection.Asc:
      return newFilms.sort(
        (f1, f2) =>
          moment(f1.releaseDate).unix() - moment(f2.releaseDate).unix(),
      );
    case SortingDirection.Desc:
      return newFilms.sort(
        (f1, f2) =>
          moment(f2.releaseDate).unix() - moment(f1.releaseDate).unix(),
      );
    default:
      return newFilms;
  }
};

type UseSorting = () => {
  sortingDirection: SortingDirection;
  toggleSorting: () => SortingDirection;
};

export const useSorting: UseSorting = () => {
  const { data } = useMetaQuery({
    fetchPolicy: 'cache-only',
  });
  console.log(data);
  const sortingDirection = data?.meta?.filmsSortingDirection || SortingDirection.Asc;

  const toggleSorting = () => {
    const newDirection =
      sortingDirection === SortingDirection.Asc
        ? SortingDirection.Desc
        : SortingDirection.Asc;

    cache.writeQuery({
      query: MetaDocument,
      data: {
        meta: {
          filmsSortingDirection: newDirection,
        }
      }
    });
    return newDirection;
  };

  return {
    sortingDirection,
    toggleSorting,
  };
};

const FilmsScreen: NavigationFunctionComponent<NavigationComponentProps> = () => {
  const {sortingDirection, toggleSorting} = useSorting();

  const films = useFilms(sortingDirection);

  return (
    <Films
        data={films}
        toggleSorting={toggleSorting}
        sortingDirection={sortingDirection}
    />
  )
};


FilmsScreen.options = {
  topBar: {
    background: {
      color: '#F5ED17',
    },
    title: {
      text: "Star Wars",
      fontFamily: fonts.distant,
      fontWeight: '900'
    }
  }
}

export default FilmsScreen;
