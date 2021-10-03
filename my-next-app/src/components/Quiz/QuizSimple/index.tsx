const a = [1, 2, 3, 4];

function QuizSimple() {
  return (
    <div>
      <div
        className={
          'bg-blue-800 py-4 text-white font-bold rounded-3xl text-center'
        }
      >
        How are you
      </div>
      <div className="grid grid-cols-2 gap-10 mt-16">
        {a.map((item) => (
          <div
            key={item}
            className={
              'bg-indigo-600 text-center text-white font-bold rounded-xl hover:bg-indigo-900 cursor-pointer p-5 transition ease-linear duration-200'
            }
          >
            A.Hello
          </div>
        ))}
      </div>
    </div>
  );
}
export default QuizSimple;
