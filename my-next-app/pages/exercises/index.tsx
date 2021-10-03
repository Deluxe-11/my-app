import useNotification from '@src/hooks/useNotification';
import QuizSimple from '@src/components/Quiz/QuizSimple';
import QuizFill from '@src/components/Quiz/QuizFill';

function ExercisesPage() {
  const fire = useNotification();

  const handleClick = () => {
    fire.success('Thanh cong');
  };

  return (
    <div
      className={
        'container mx-auto px-64 bg-green-400 h-screen flex justify-center flex-col'
      }
    >
      <QuizSimple />
      {/*<QuizFill />*/}
    </div>
  );
}

export default ExercisesPage;
