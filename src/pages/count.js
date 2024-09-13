import { useEffect, useState } from "react";

// const MyButton = () => {
//   const [count, setcount] = useState(0);
//   useEffect(() => {
//     console.log(count);
//   }, []);

//   return (
//     <div>
//       <button onClick={() => setcount(count + 1)}>
//         You clicked {count} times
//       </button>
//     </div>
//   );
// };
// export default MyButton;

// setTimeout(function () {
//   startTime();
// }, 1000);

const myTimer = () => {
  const date = new Date();
  const [time, setTime] = useState(0);
  const [stop, setStop] = useState(false);

  useEffect(() => {
    if (stop === true) {
      return;
    }

    const interval = setInterval(() => {
      setTime(time + 1);

      return clearInterval(interval);
    }, 1000);
  }, [time, stop]);

  console.log(time);

  const startTime = () => {
    setStop(false);
  };
  const onStop = () => {
    setStop(true);
  };

  return (
    <div className="flex flex-col gap-2 p-4">
      <p className="text-center text-2xl font-semibold">
        {date.toLocaleTimeString()}
      </p>
      <div className="flex gap-4 justify-center">
        <button
          onClick={startTime}
          className="bg-gray-500 w-fit px-6 py-2 rounded-md"
        >
          Start
        </button>
        <button
          onClick={onStop}
          className="bg-gray-500 w-fit px-6 py-2 rounded-md"
        >
          Stop
        </button>
        <button className="bg-gray-500 w-fit px-6 py-2 rounded-md">aaaa</button>
      </div>
    </div>
  );
};
export default myTimer;
