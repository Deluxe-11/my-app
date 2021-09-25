import VideoLesson from '@src/features/lesson/components/VideoLesson';
import {useRouter} from 'next/router';
import useCourse from '@src/hooks/useCourse';
import Playlist from '@src/features/lesson/components/Playlist';
import styled from 'styled-components';
import ContentLesson from "@src/features/lesson/components/ContentLesson";


const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  display: flex;
`

function LessonIndex() {
    const {
        query: {id, lesson_id}
    } = useRouter();

    const {data} = useCourse('1');

    return (
        <div className={'flex'}>
            <ContentLesson url={'LEh9F67Z5n8'}/>

            <Playlist width={25} course={data}/>
        </div>
    );
}

export default LessonIndex;
