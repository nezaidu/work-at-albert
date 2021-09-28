/* eslint-disable react-native/no-inline-styles */
import React, {FC, FunctionComponent} from 'react';

import styled from 'styled-components/native';
import { SubtitleText, TitleText } from '../../ui';

export const FilmsList = styled.FlatList`
  padding: 10px;
  background: white;
`;

export const FilmCard = styled.TouchableOpacity`
  background: #F5ED17;
  flex-direction: row;
  border: 1px solid #0339C9;
  box-shadow: 0px 0px 3px #000000;
  border-radius: 1px;
  margin-bottom: 15px;
`;

export const FilmCountText = styled(SubtitleText)`
  font-size: 22px;
  line-height: 18px;

  padding: 10px;
  /* Body Headline */

`;

export const ToggleSortingView = styled.View`
  border-radius: 1px;
  flex-direction: row;
  padding: 10px;
  padding-left: 0px;
`;

export const ToggleSortingIcon = styled.View`
  box-shadow: 0px 0px 12px #0339C9;
  margin-top: -8px;
  margin-right: -8px;
  margin-left: -8px;
  border-radius: 1px;
`;
