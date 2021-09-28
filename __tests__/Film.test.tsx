/**
 * @format
 */
import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import {render} from '@testing-library/react-native';
import filmJSON from '../__mocks__/film.json';
import {Film as FilmType} from '../src/generated/type';
import Film from '../src/components/Film';

const film: FilmType = filmJSON as unknown as FilmType;

it('render film', () => {
  const {toJSON} = render(
    <Film
      film={film}
    />,
  );

  const tree = toJSON();

  expect(tree).toMatchSnapshot();
});
