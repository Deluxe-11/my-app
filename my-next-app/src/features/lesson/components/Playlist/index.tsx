import React, { useState } from 'react';
import styled from 'styled-components';
import { ICourse } from '@src/models/ICourse';
import PlaylistItem from '@src/features/lesson/components/PlaylistItem';

type PlaylistWrapperProp = {
  width: number;
};

const PlaylistWrapper = styled.div<PlaylistWrapperProp>`
  width: ${(props) => props.width + '%'};
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  box-sizing: border-box;

  @media (max-width: 992px) {
    width: ${(props) => (props.width !== 100 ? 0 : '100%')};
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  padding: 12px 16px;
`;

const Title = styled.div`
  font-size: 15px;
  font-weight: 500;
`;

const Icon = styled.i`
  font-size: 15px;

  &:hover {
    cursor: pointer;
  }
`;

const ListLesson = styled.div``;

// Playlist.propTypes = {
//     // course: PropTypes.shape({
//     //     name: PropTypes.string,
//     //     chapters: PropTypes.arrayOf(PropTypes.shape({
//     //
//     //     }))
//     // }),
//     width: PropTypes.number,
// }

interface PlaylistProp {
  width: number;
  course: ICourse | undefined;
}

function Playlist({ width, course }: PlaylistProp) {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  // const { course }: { course: ICourse | null } = useContext(LessonContext);
  //
  const renderPlaylistItem = course?.chapters?.map((chapter, index) => {
    return (
      <PlaylistItem number={index + 1} chapter={chapter} key={chapter.id} />
    );
  });

  return (
    <PlaylistWrapper width={Number(width)}>
      <div>
        <Header>
          <div>
            {/*<Title>{course?.name}</Title>*/}
            <div>Hoàn thành 1/110 bài học</div>
          </div>
          <div>
            <Icon className="fas fa-step-backward" />
          </div>
        </Header>

        <ListLesson>{renderPlaylistItem}</ListLesson>
      </div>
    </PlaylistWrapper>
  );
}

export default Playlist;
