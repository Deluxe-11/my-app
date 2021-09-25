import React, {useCallback} from 'react';
import styled from 'styled-components';
import VideoLesson from "@src/features/lesson/components/VideoLesson";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const ContentWrapper = styled.div`
  width: 75%;
  height: 100%;
  overflow-y: auto;
  @media (max-width: 992px) {
    width: 100%;
  }
`

interface ContentLessonProp {
    url: string
}

function ContentLesson({url}: ContentLessonProp) {

    const renderVideoLesson = () => <VideoLesson url={url}/>;

    return (
        <ContentWrapper>
            {renderVideoLesson()}
            {/*<ContentLessonTab/>*/}

            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs aria-label="basic tabs example">
                    <Tab label="Item One"/>
                    <Tab label="Item Two"/>
                    <Tab label="Item Three"/>
                </Tabs>
            </Box>

        </ContentWrapper>
    )
}

export default ContentLesson;