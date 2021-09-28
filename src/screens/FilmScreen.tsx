import React from 'react';
import { View } from 'react-native';
import {
  NavigationFunctionComponent,
  NavigationComponentProps,
} from 'react-native-navigation';
import { fonts } from '../../ui';
import Film from '../components/Film';
import { useFilmQuery, Film as FilmType } from '../generated/type';


const FilmScreen: NavigationFunctionComponent<NavigationComponentProps> = ({ film }: { film: FilmType }) => {
  const { data } = useFilmQuery({
    variables: {
      id: film.id,
    },
    fetchPolicy: 'cache-and-network',
  });

  const fullFilm = data?.film || {};

  return (
    <Film film={fullFilm} />
  )
};


FilmScreen.options = (props) => ({
  topBar: {
    background: {
      color: '#000000',
    },
    backButton: {
      title: "Back",
      color: '#F5ED17',
    },
    title: {
      text: `Episode ${props.film.episodeID}`,
      fontFamily: fonts.distant,
      fontSize: 22,
      fontWeight: '900',
      color: '#F5ED17',
    }
  }
});
export default FilmScreen;
