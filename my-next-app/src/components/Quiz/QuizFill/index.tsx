import { useMemo, useState } from 'react';

const example = 'this is my choice'.split(' ');

interface Word {
  word: string;
  picked: boolean;
}

function QuizFill() {
  const [picked, setPicked] = useState<number[]>([]);

  const [words, setWords] = useState<Word[]>(
    example.map((item) => ({
      word: item,
      picked: false
    }))
  );

  const sentence = useMemo(() => {
    return picked.map((item) => words[item].word);
  }, [picked, words]);

  const handleClickPicked = (index: number) => {
    return () => {
      if (words[index].picked) return;
      setPicked((prevState) => [...prevState, index]);
      setWords((prevState) => {
        const clone = [...prevState];
        clone[index].picked = true;
        return clone;
      });
    };
  };

  const handleClickUnpicked = (index: number) => {
    return () => {
      const position = picked[index];

      setWords((prevState) => {
        const clone = [...prevState];
        clone[position].picked = false;
        return clone;
      });

      setPicked((prevState) => {
        const clone = [...prevState];
        clone.splice(index, 1);
        return clone;
      });
    };
  };

  return (
    <div>
      <div className={'flex justify-center'}>
        {picked.map((item, index) => (
          <div
            className={'mr-2 cursor-pointer'}
            onClick={handleClickUnpicked(index)}
            key={item}
          >
            {words[item].word}
          </div>
        ))}
      </div>

      <div className={'flex justify-center mt-10'}>
        {words.map((item, index) => (
          <button
            onClick={handleClickPicked(index)}
            className={
              item.picked
                ? 'mx-10 p-4 rounded-xl   text-center text-white font-bold bg-gray-600 disabled:opacity-50'
                : 'mx-10 rounded-xl  p-4 cursor-pointer hover:bg-red-500  text-center text-white font-bold bg-red-600 '
            }
            key={item.word}
            disabled={item.picked}
          >
            <p className={item.picked ? 'invisible' : 'visible'}>{item.word}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuizFill;
