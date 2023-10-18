// import "./Count.css";

// const Count = () => {
//   return (
//     <div>
//       <article className="details1-count">
//         <div className=" details-count">
//           <div className="name">
//             <h2>1232</h2>
//             <p>Students</p>
//           </div>
//           <div className="name">
//             <h2>64</h2>
//             <p>Courses</p>
//           </div>
//           <div className="name">
//             <h2>42</h2>
//             <p>Events</p>
//           </div>
//           <div className="name">
//             <h2>15</h2>
//             <p>Trainers</p>
//           </div>
//         </div>
//       </article>
//     </div>
//   );
// };

// export default Count;

import { useEffect, useState } from "react";
import "./Count.css";

const Count = () => {
  const [counts, setCounts] = useState({
    students: 0,
    courses: 0,
    events: 0,
    trainers: 0,
  });

  useEffect(() => {
    const targetCounts = {
      students: 1232,
      courses: 64,
      events: 44,
      trainers: 16,
    };
    const duration = 3000;

    const animateCount = (key, target) => {
      const step = Math.ceil(target / (duration / 4));
      let currentCount = 0;
      const interval = setInterval(() => {
        if (currentCount + step >= target) {
          setCounts((prevCounts) => ({
            ...prevCounts,
            [key]: target,
          }));
          clearInterval(interval);
        } else {
          setCounts((prevCounts) => ({
            ...prevCounts,
            [key]: currentCount + step,
          }));
          currentCount += step;
        }
      }, 6);
    };

    for (const [key, value] of Object.entries(targetCounts)) {
      animateCount(key, value);
    }
  }, []);

  return (
    <div>
      <article className="details1-count">
        <div className="details-count">
          <div className="name">
            <h2>{counts.students}</h2>
            <p>Students</p>
          </div>
          <div className="name">
            <h2>{counts.courses}</h2>
            <p>Courses</p>
          </div>
          <div className="name">
            <h2>{counts.events}</h2>
            <p>Events</p>
          </div>
          <div className="name">
            <h2>{counts.trainers}</h2>
            <p>Trainers</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Count;
