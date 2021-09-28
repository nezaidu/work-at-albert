import moment from 'moment';
import React, {FC} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {NavigationContext, useNavigation} from 'react-native-navigation-hooks/dist';
import {SmTitleText, SubtitleText, TitleText} from '../../ui';
import {Film as FilmType, SortingDirection} from '../generated/type';
import {
  FilmCard,
  FilmCountText,
  FilmsList,
  ToggleSortingIcon,
  ToggleSortingView,
} from './Films.styled';
import AscendingIcon from '../../assets/icons/Asc.svg';
import DescendingIcon from '../../assets/icons/Desc.svg';

interface FilmProps {
  film: FilmType;
  componentId: string;
}

const FilmItem: FC<FilmProps> = ({film, componentId}) => {
  const nav = useNavigation(componentId);

  return (
    <FilmCard
      onPress={() =>
        nav.push({
          component: {
            name: 'Film',
            passProps: {
              film,
            },
          },
        })
      }>
      <FilmCountText>{film.episodeID}</FilmCountText>
      <View>
        <TitleText>{film.title}</TitleText>
        <SmTitleText>{moment(film.releaseDate).local().year()}</SmTitleText>
      </View>
    </FilmCard>
  );
};

interface FilmsProps {
  data: FilmType[];
  componentId: string;
  sortingDirection: SortingDirection;
  toggleSorting: () => SortingDirection;
}

const Films: FC<FilmsProps> = ({data, sortingDirection, toggleSorting, componentId}) => {
  return (
    <FilmsList<FilmType>
      data={data}
      renderItem={({item}) => <FilmItem componentId={componentId} key={item.episodeID} film={item} />}
      ListHeaderComponent={() => (
        <View>
          <TouchableOpacity
            testID="toggle-sorting-button"
            onPress={toggleSorting}>
            {!!data.length && (
              <ToggleSortingView>
                <ToggleSortingIcon>
                  {sortingDirection === SortingDirection.Asc && (
                    <AscendingIcon />
                  )}
                  {sortingDirection === SortingDirection.Desc && (
                    <DescendingIcon />
                  )}
                </ToggleSortingIcon>
                <SubtitleText>
                  {moment(data[0].releaseDate).local().year()}...
                  {moment(data[data.length - 1].releaseDate)
                    .local()
                    .year()}
                </SubtitleText>
              </ToggleSortingView>
            )}
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default Films;
