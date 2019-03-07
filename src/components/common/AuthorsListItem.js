// @flow

import React from 'react';
import { Platform, View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components';

import DefaultButton from '~/components/common/DefaultButton';

const Wrapper = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-vertical: ${({ theme }) => theme.metrics.mediumSize}px;
  margin-top: ${({ theme, isFirst }) => (isFirst ? theme.metrics.largeSize : 0)}px;
  padding: ${({ theme }) => theme.metrics.mediumSize}px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const AuthorImage = styled(FastImage).attrs(({ uri }) => ({
  source: { uri },
}))`
  width: ${({ theme }) => theme.metrics.getWidthFromDP('25%')}px;
  height: 100%;
  border-radius: 4px;
`;

const TextContent = styled(View)`
  height: 100%;
  width: 70%;
  padding-left: ${({ theme }) => theme.metrics.extraSmallSize}px;
`;

const AuthorName = styled(Text)`
  color: ${({ theme }) => theme.colors.darkText};
  font-size: ${({ theme }) => theme.metrics.extraLargeSize * 1.2}px;
  font-family: CircularStd-Bold;
  margin-bottom: ${({ theme }) => theme.metrics.smallSize}px;
`;

const AuthorAbout = styled(Text)`
  color: ${({ theme }) => theme.colors.subText};
  font-size: ${({ theme }) => theme.metrics.largeSize}px;
  font-family: CircularStd-Medium;
  margin-bottom: ${({ theme }) => theme.metrics.mediumSize}px;
`;

const NumberPodcasts = styled(Text)`
  color: ${({ theme }) => theme.colors.darkText};
  font-size: ${({ theme }) => theme.metrics.largeSize * 1.2}px;
  font-family: CircularStd-Bold;
`;

const BottomContent = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

type AuthorProps = {
  numberPodcasts: number,
  imageURL: string,
  about: string,
  name: string,
};

type Props = {
  podcastImage: string,
  author: AuthorProps,
  isFirst: boolean,
};

const AuthorsListItem = ({ podcastImage, author, isFirst }: Props): Object => (
  <Wrapper
    isFirst={isFirst}
    style={{
      ...Platform.select({
        ios: {
          elevation: 1,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 3,
          shadowOpacity: 0.35,
        },
        android: {
          elevation: 4,
          shadowOffset: {
            width: 1,
            height: -3,
          },
          shadowRadius: 2,
          shadowOpacity: 5.0,
        },
      }),
    }}
  >
    <AuthorImage
      uri={podcastImage}
    />
    <TextContent>
      <AuthorName>{author.name}</AuthorName>
      <AuthorAbout>{author.about}</AuthorAbout>
      <BottomContent>
        <NumberPodcasts>
          {`${author.numberPodcasts} ${
            author.numberPodcasts === 1 ? 'Podcast' : 'Podcasts'
          }`}
        </NumberPodcasts>
        <DefaultButton
          size="small"
          text="LEARN MORE"
        />
      </BottomContent>
    </TextContent>
  </Wrapper>
);

export default AuthorsListItem;