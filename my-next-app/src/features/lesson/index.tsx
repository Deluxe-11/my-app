import VideoLesson from '@src/features/lesson/components/VideoLesson';
import PlaylistItem from '@src/features/lesson/components/PlaylistItem';
import { useRouter } from 'next/router';
import useCourse from '@src/hooks/useCourse';
import Playlist from '@src/features/lesson/components/Playlist';

function LessonIndex() {
  const {
    query: { id, lesson_id }
  } = useRouter();

  const { data } = useCourse('1');

  return (
    <div>
      <VideoLesson url={'JsKIAO11q1Y'} />

      <Playlist width={50} course={data} />
    </div>
  );
}

export default LessonIndex;
