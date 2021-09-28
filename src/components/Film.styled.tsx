/* eslint-disable react-native/no-inline-styles */
import React, {FC, FunctionComponent} from 'react';

import styled from 'styled-components/native';
import { fonts, SmTitleText, SubtitleText, TitleText } from '../../ui';

export const FilmsList = styled.FlatList`
  padding: 10px;
  background: white;
`;

export const FilmContainer = styled.View`
  background: white;
  flex: 1;
  padding: 10px;
`;

export const CastText = styled.Text`
  font-family: ${fonts.special};
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 18px;
  /* or 127% */

  padding: 10px;
  margin-top: 10px;
  padding-bottom: 0px;
  /* Body Headline */

  color: #010103;
`;

export const CharacterCountText = styled(SubtitleText)`
  font-size: 22px;
  line-height: 16px;

  padding: 13px;
  /* Body Headline */
`;

export const CharacterDetailText = styled(SmTitleText)`
  font-size: 18px;
  line-height: 16px;
`;

export const CharacterCard = styled.TouchableOpacity`
  background: #F5ED17;
  flex-direction: row;
  border: 1px solid #0339C9;
  box-shadow: 0px 0px 3px #000000;
  border-radius: 1px;
  margin: 10px;
`;

export const FilmTitle = styled.View`
  flex-direction: row;
`;

export const CharacterContainer = styled.View`
  flex-direction: row;
`;
