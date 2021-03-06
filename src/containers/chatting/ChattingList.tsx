import React from 'react';
import { NetworkStatus } from 'apollo-client';
import { useQuery } from '@apollo/react-hooks';
import uniqBy from 'lodash/uniqBy';
import {
  ErrorView,
  LoadingView,
  ChattingList,
  ChattingEmptyList,
} from 'components';
import { FETCH_CHATTING_FEED } from 'graphqls';
import {
  isFetching,
  canFetchMore,
} from 'utils';

const EMPTY_LIST: Chatting[] = [];

type ChattingFeedResult = {
  chattingFeed: {
    chattings: Chatting[];
    cursor: string;
  };
};

const Container: React.FunctionComponent<{}> = () => {
  const {
    data: {
      chattingFeed,
    } = {
      chattingFeed: undefined,
    },
    networkStatus,
    error,
    fetchMore,
    refetch,
  } = useQuery<ChattingFeedResult>(FETCH_CHATTING_FEED, {
    fetchPolicy: 'cache-and-network',
    notifyOnNetworkStatusChange: true,
  });

  if (error || networkStatus === NetworkStatus.error) {
    const reload = () => refetch().catch(console.error);
    return <ErrorView reload={reload} message={error ? error.message : ''} />;
  }

  if (!chattingFeed) {
    return <LoadingView />;
  }

  const {
    chattings,
    cursor,
  } = chattingFeed;

  if (chattings.length === 0) {
    return <ChattingEmptyList />;
  }

  return (
    <ChattingList
      items={chattings || EMPTY_LIST}
      isLoading={isFetching(networkStatus)}
      isRefreshing={networkStatus === NetworkStatus.refetch}
      onRefresh={refetch}
      onFetchMore={() => canFetchMore(networkStatus, error) && fetchMore({
        variables: { cursor },
        updateQuery: (original, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return original;
          }

          const {
            chattingFeed: {
              chattings: nextChattings,
              cursor: nextCursor,
            },
          } = fetchMoreResult;

          if (nextChattings.length === 0) {
            return original;
          }

          return {
            ...original,
            chattingFeed: {
              ...original.chattingFeed,
              chattings: uniqBy([...original.chattingFeed.chattings, ...nextChattings], 'id'),
              cursor: nextCursor,
            },
          };
        },
      }).catch(console.error)}
    />
  );
};

export default React.memo(Container);
