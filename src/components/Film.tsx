import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { Film as FilmType } from '../generated/type';


interface FilmProps {
  film: FilmType;
}

const Film: FC<FilmProps> = ({ film }) => {
  return (
    <View>
      <Text>{film.title}</Text>
    </View>
  )
}


export default Film;
