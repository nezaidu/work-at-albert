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
    }
  });

  const fullFilm = data?.film || {};
  console.log(fullFilm);
  return (
    <Film film={fullFilm} />
  )
};


FilmScreen.options = (props) => ({
  topBar: {
    backButton: {
      title: "Back",
    },
    title: {
      text: props.film.title,
      fontFamily: fonts.distant,
      fontWeight: '900'
    }
  }
});
export default FilmScreen;
