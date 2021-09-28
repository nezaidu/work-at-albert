/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import styled from 'styled-components/native';

export enum fonts {
  gothic = 'SerifGothic LT',
  distant = 'SF Distant Galaxy',
  jedi = 'Star Jedi Rounded',
  special = 'StarJedi Special Edition',
  hollow = 'Star Jedi Hollow',
}

export const SubtitleText = styled.Text`
  font-family: ${fonts.jedi};
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 16px;
  /* or 127% */

  padding: 10px;
  /* Body Headline */

  color: #817156;
`;

export const TitleText = styled.Text`
  font-family: ${fonts.jedi};
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 18px;
  /* or 127% */

  padding: 10px;
  padding-bottom: 0px;
  /* Body Headline */

  color: #010103;
`;

export const SmTitleText = styled.Text`
  font-family: ${fonts.gothic};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 14px;
  /* or 127% */

  /* Body Headline */
  padding-top: 3px;
  color: #010103;
  padding-left: 10px;
`;

export const BgTitleText = styled(TitleText)`
  font-family: ${fonts.jedi};
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 20px;
  /* or 127% */

  /* Body Headline */
  padding-top: 3px;
  color: #010103;
  padding-left: 10px;
`;
