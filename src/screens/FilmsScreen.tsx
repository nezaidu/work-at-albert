import React from 'react';
import {
  NavigationComponent,
  NavigationComponentProps,
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

type UseFilms = (d: SortingDirection) => Film[];

export const useFilms: UseFilms = (direction: SortingDirection) => {
  const {data, error} = useFilmsQuery({
    fetchPolicy: 'network-only'
  });

  let films = (data?.allFilms?.films || []) as Film[];
  const newFilms = [...films];
  console.log(error);
  console.log(error);
  console.log(data);
  console.log(data);
  console.log(data);
  switch (direction) {
    case SortingDirection.Asc:
      return newFilms.sort(
        (f1, f2) =>
          moment(f1.releaseDate).unix() - moment(f2.releaseDate).unix(),
      );
      // console.log(newFilms[0].episodeID + direction);
      return newFilms;
    case SortingDirection.Desc:
      return newFilms.sort(
        (f1, f2) =>
          moment(f2.releaseDate).unix() - moment(f1.releaseDate).unix(),
      );
      // console.log(newFilms[0].episodeID + direction);
      return newFilms;
    default:
      return newFilms;
  }
};

type UseSorting = () => {
  sortingDirection: SortingDirection;
  toggleSorting: () => SortingDirection;
};

export const useSorting: UseSorting = () => {
  const { data, refetch } = useMetaQuery({
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
  }
};

const FilmsScreen: NavigationComponent<NavigationComponentProps> = () => {
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


export default FilmsScreen;
