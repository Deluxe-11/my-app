import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player/youtube';
// @ts-ignore
import { Player } from 'video-react';

const VideoContent = styled.div`
  width: 100%;
  height: 500px;
  background-color: black;
  display: flex;
  justify-content: center;
  @media (max-width: 575.98px) {
    height: 400px;
  }
  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) and (max-width: 767.98px) {
    height: 450px;
  }
  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) and (max-width: 991.98px) {
    height: 500px;
  }
  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) and (max-width: 1199.98px) {
    height: 550px;
  }
  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    height: 700px;
  }
`;

const Video = styled.div`
  height: 100%;
  width: 90%;
  @media (max-width: 575.98px) {
    width: 100%;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    width: 100%;
  }
  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 100%;
  }
  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) and (max-width: 1199.98px) {
    width: 90%;
  }
`;

const PreviewLesson = styled.div`
  margin-left: 10px;
  display: none;
  padding: 10px;
  color: #fff;
  font-size: 16px;
`;

const PrevLesson = styled.div`
  opacity: 0;
  justify-content: center;
  align-items: center;
  height: 50px;
  display: flex;
  background-color: rgba(41, 48, 59, 0.7);
  position: absolute;
  z-index: 10;
  left: 0;
  top: 50%;
  transform: translateY(-50%);

  &:hover {
    cursor: pointer;
  }

  &:hover ${PreviewLesson} {
    display: block;
  }
`;

const NextLesson = styled.div`
  opacity: 0;
  justify-content: center;
  align-items: center;
  height: 50px;
  display: flex;
  background-color: rgba(41, 48, 59, 0.7);
  position: absolute;
  right: 0;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);

  &:hover {
    cursor: pointer;
  }

  &:hover ${PreviewLesson} {
    display: block;
  }
`;

const Icon = styled.i`
  color: #fff;
`;
const VideoWrapper = styled.div`
  position: relative;

  &:hover ${PrevLesson} {
    opacity: 1;
  }

  &:hover ${NextLesson} {
    opacity: 1;
  }
`;

interface VideoLessonProp {
  url: string;
}

function VideoLesson({ url }: VideoLessonProp) {
  return (
    <VideoWrapper>
      <PrevLesson>
        {/*<ChevronLeftIcon w={10} h={10} color={'#fff'} />*/}
        <PreviewLesson>Bài học tiếp theo</PreviewLesson>
      </PrevLesson>
      <VideoContent>
        <Video>
          {/*<Plyr*/}
          {/*  source={{*/}
          {/*    type: 'video',*/}
          {/*    sources: [*/}
          {/*      {*/}
          {/*        src: url || 'PO4Eegb8ZOU',*/}
          {/*        provider: 'youtube'*/}
          {/*      }*/}
          {/*    ]*/}
          {/*  }}*/}
          {/*/>*/}
          <ReactPlayer
            controls={true}
            playing={true}
            url={`https://www.youtube.com/watch?v=${url}`}
            width="100%"
            height="100%"
          />

          {/*<Player>*/}
          {/*  <source src="https://www.youtube.com/watch?v=bjB3Hme8q_k&list=RDbjB3Hme8q_k&start_radio=1" />*/}
          {/*</Player>*/}
        </Video>
      </VideoContent>
      <NextLesson>
        <PreviewLesson>Bài học tiếp theo</PreviewLesson>
        {/*<ChevronRightIcon w={10} h={10} color={'#fff'} />*/}
      </NextLesson>
    </VideoWrapper>
  );
}

export default VideoLesson;
