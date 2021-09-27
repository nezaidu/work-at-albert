import React, { FC } from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import { Film as FilmType, SortingDirection } from '../generated/type';
import Film from './Film';


interface FilmsProps {
  data: FilmType[];
  sortingDirection: SortingDirection;
  toggleSorting: () => SortingDirection;
}

const Films: FC<FilmsProps> = ({ data, sortingDirection, toggleSorting }) => {
  return (
    <FlatList<FilmType>
      data={data}
      renderItem={({ item, index }) => <Film key={item.episodeID} film={item} />}
      ListHeaderComponent={() => (
        <View>
          <TouchableOpacity onPress={toggleSorting}>
            <Text>
              {sortingDirection}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    />
  )
}


export default Films;
