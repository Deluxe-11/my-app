import React, { useState } from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import { Checkbox } from '@chakra-ui/react';
import PropTypes from 'prop-types';
// import { useParams } from 'react-router-dom';
import { IChapter } from '@src/models/IChapter';
// import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const PlaylistItemWrapper = styled.div``;

const Chapter = styled.div`
  padding: 8px 16px;
  background-color: #f7f8fa;
  border: 1px solid #dedfe0;
  transition: all ease-in-out 0.3s;
  display: flex;
  justify-content: space-between;

  &:hover {
    background-color: #edeff1;
    cursor: pointer;
  }
`;

const ChapterName = styled.div`
  font-size: 15px;
  font-weight: 600;
`;

const ChapterProgress = styled.div`
  font-size: 12px;
`;

const LessonList = styled.div`
  padding-left: 5px;
  margin-bottom: 0;
  height: 100%;
  display: flex;
  background-color: #fff;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const Lesson = styled(Link)`
  display: block;
  text-decoration: none;
  color: black;
  height: 100%;
  width: 100%;
  margin-left: 10px;

  &:hover {
    color: black;
  }
`;

const LessonTime = styled.div`
  font-size: 12px;
`;

// PlaylistItem.propTypes = {
//     chapter: PropTypes.shape({
//         lessons: PropTypes.arrayOf(PropTypes.shape({
//             name: PropTypes.string,
//             order: PropTypes.number,
//         }))
//     }),
//     number: PropTypes.number,
// }

interface PlaylistItemProps {
  chapter: IChapter;
  number: number;
}

function PlaylistItem({ number, chapter }: PlaylistItemProps) {
  // const { course }: { course: string } = useParams();

  const course = '1';

  const [isOpened, setIsOpened] = useState(false);

  const openLesson = () => {
    setIsOpened(!isOpened);
  };

  const renderLesson = () => {
    if (!isOpened) return;

    return chapter?.lessons?.map((lesson) => {
      return (
        <LessonList key={lesson.id}>
          {/*<Checkbox />*/}
          <div>
            <div>
              {lesson.order}. {lesson.name}
            </div>
            <LessonTime>
              <i className="fas fa-play-circle" /> 12:30{' '}
            </LessonTime>
          </div>
        </LessonList>
      );
    });
  };

  const renderIcon = () => {
    if (isOpened) {
      return (
        <div>
          {/*<ChevronUpIcon />*/}
          <ArrowUpwardIcon />
        </div>
      );
    }

    return (
      <div>
        {/*<ChevronDownIcon />*/}
        <ArrowDownwardIcon />
      </div>
    );
  };

  return (
    <PlaylistItemWrapper>
      <Chapter onClick={openLesson}>
        <div>
          <ChapterName>
            Phần {number}: {chapter.name}
          </ChapterName>
          <ChapterProgress>2/2 | 1:03:45</ChapterProgress>
        </div>
        {renderIcon()}
      </Chapter>
      {renderLesson()}
    </PlaylistItemWrapper>
  );
}

export default PlaylistItem;
