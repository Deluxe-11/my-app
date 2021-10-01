import React, { useCallback } from 'react';
import styled from 'styled-components';
import VideoLesson from '@src/features/lesson/components/VideoLesson';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TabLesson from '@src/features/lesson/components/TabLesson';

const ContentWrapper = styled.div`
  width: 75%;
  height: 100vh;
  overflow-y: scroll;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

interface ContentLessonProp {
  url: string;
}

function ContentLesson({ url }: ContentLessonProp) {
  const renderVideoLesson = () => <VideoLesson url={url} />;

  return (
    <ContentWrapper>
      {/*{renderVideoLesson()}*/}

      <div
      // className={'sticky top-0 z-40'}
      >
        <VideoLesson url={url} />
      </div>

      <div>
        <TabLesson />
      </div>

      {/*<ContentLessonTab/>*/}
    </ContentWrapper>
  );
}

export default ContentLesson;
