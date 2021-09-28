import moment from 'moment';
import React, {FC} from 'react';
import {View} from 'react-native';
import {BgTitleText, SmTitleText, TitleText} from '../../ui';
import {Film as FilmType, Person} from '../generated/type';
import {
  CastText,
  CharacterCard,
  CharacterContainer,
  CharacterCountText,
  CharacterDetailText,
  FilmContainer,
  FilmTitle,
} from './Film.styled';

interface FilmProps {
  film: FilmType;
}

const Film: FC<FilmProps> = ({film}) => {
  return (
    <FilmContainer>
      <FilmTitle>
        <View>
          <BgTitleText>{film.title}</BgTitleText>
          <SmTitleText>
            {moment(film.releaseDate).local().calendar()}
          </SmTitleText>
        </View>
      </FilmTitle>
      <CastText>Cast</CastText>
      {film.characterConnection?.characters?.map((character: Person, index) => (
        <CharacterCard key={index}>
          <CharacterContainer>
            <CharacterCountText>{index + 1}</CharacterCountText>
            <View>
              <TitleText>{character.name}</TitleText>
              <CharacterDetailText>
                {!character.species ? 'Human' : character.species?.name}
              </CharacterDetailText>
              <CharacterDetailText>
                {character.gender === 'n/a' ? 'No gender' : character.gender}
              </CharacterDetailText>
            </View>
          </CharacterContainer>
        </CharacterCard>
      ))}
    </FilmContainer>
  );
};

export default Film;
