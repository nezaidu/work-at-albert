import moment from 'moment';
import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { Film as FilmType, Person } from '../generated/type';


interface FilmProps {
  film: FilmType;
}

const Film: FC<FilmProps> = ({ film }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'wheat'}}>
      <Text>
        {film.title}
      </Text>
      <Text>
        {film.episodeID}
      </Text>
      <Text>
        {moment(film.releaseDate).local().calendar()}
      </Text>
      {film.characterConnection?.characters?.map((character: Person) => (
        <View>
          <Text>{character.name}</Text>
          <Text>{character.species?.name}</Text>
          <Text>{character.gender === 'n/a' ? 'unknown' : character.gender}</Text>
        </View>
      ))}
    </View>
  )
}


export default Film;
