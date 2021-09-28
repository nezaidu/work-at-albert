/* eslint-disable react-native/no-inline-styles */
import React, {FC, FunctionComponent} from 'react';

import styled from 'styled-components/native';
import { TitleText } from '../../ui';

export enum fonts {
  gothic = 'SerifGothic LT',
  distant = 'SF Distant Galaxy',
  jedi = 'Star Jedi Rounded',
  special = 'StarJedi Special Edition',
}
export const FilmsList = styled.FlatList`
  padding: 10px;
  background: white;
`;

export const FilmCard = styled.TouchableOpacity`
  background: #C2CCDB;
  flex-direction: row;
  border: 1px solid #0339C9;
  box-shadow: 0px 0px 3px #0339C9;
  border-radius: 1px;
  margin-bottom: 15px;
`;

export const FilmCountText = styled.Text`
  font-family: ${fonts.jedi};
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 18px;
  /* or 127% */

  padding: 10px;
  /* Body Headline */

  color: #817156;
`;

export const ToggleSortingView = styled.View`
  box-shadow: 0px 0px 12px #0339C9;
  border-radius: 1px;
  padding: 10px;
`;
