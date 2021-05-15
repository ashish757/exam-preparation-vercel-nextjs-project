import { useState } from 'react';
import styles from './question.module.scss';

export default function index({ current, TouchSlider }) {
   const [correct, setCorrect] = useState([])
   const data = [
      { id: 0, title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas maiores ducimus ullam omnis esse ex culpa voluptatibus est numquam.", correct: "A", A: "voluptas", B: "Aliquid", C: "adipisic", D: "sit amet" },
      { id: 1, title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas maiores ducimus ullam omnis esse ex culpa voluptatibus est numquam.", correct: "B", A: "voluptas", B: "Aliquid", C: "adipisic", D: "sit amet" },
      { id: 3, title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas maiores ducimus ullam omnis esse ex culpa voluptatibus est numquam.", correct: "C", A: "voluptas", B: "Aliquid", C: "adipisic", D: "sit amet" },
      { id: 4, title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas maiores ducimus ullam omnis esse ex culpa voluptatibus est numquam.", correct: "D", A: "voluptas", B: "Aliquid", C: "adipisic", D: "sit amet" },
      { id: 5, title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas maiores ducimus ullam omnis esse ex culpa voluptatibus est numquam.", correct: "A", A: "voluptas", B: "Aliquid", C: "adipisic", D: "sit amet" },
      { id: 6, title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas maiores ducimus ullam omnis esse ex culpa voluptatibus est numquam.", correct: "B", A: "voluptas", B: "Aliquid", C: "adipisic", D: "sit amet" },
   ]

   const handler = (queIndex, option) => {
      const que = data[queIndex];
      if (que.correct === option) {
         console.log(option, "is correct");
         setCorrect(prev => (
            [...prev, { id: que.id, correct: que.correct, incorrect: undefined, perCentage: true }]
         ))
      } else {
         console.log(option, "is not correct");
         console.log("correct option is", que.correct);
         setCorrect(prev => (
            [...prev, { id: que.id, correct: que.correct, incorrect: option, perCentage: true  }]
         ))
      }
   }
   const correctOpt = id => {
      if (correct.find(option => option.id === id)) return { correct: correct.find(option => option.id === id).correct, incorrect: correct.find(option => option.id === id).incorrect, perCentage: true };
      return { correct: undefined, incorrect: undefined, perCentage: false };
   }
   return (
      <>
         {data.map((que, idx) => {
            return (
               <div className={current === idx ? `${styles.question} ${styles.questionActive}` : styles.question} key={que.id} onTouchMove={TouchSlider} onTouchStart={TouchSlider} onTouchEnd={TouchSlider} >
                  <div className={styles.top}>
                     <h1 className={styles.title}>{que.title}</h1>
                  </div>
                  <div className={styles.center}>
                     <div className={styles.options}>
                        <div
                           onClick={() => handler(idx, "A")}
                           className={correctOpt(que.id).correct === "A" ? styles.optionCorrect : correctOpt(que.id).incorrect === "A" ? styles.optionIncorrect : ""}
                        >
                           <span className={styles.text}>A. {que.A}</span>
                           <span className={correctOpt(que.id).perCentage ? `${styles.perCentage} ${styles.active}` : styles.perCentage}>0%</span>
                        </div>
                        <div
                           onClick={() => handler(idx, "B")}
                           className={correctOpt(que.id).correct === "B" ? styles.optionCorrect : correctOpt(que.id).incorrect === "B" ? styles.optionIncorrect : ""}
                        >
                           <span className={styles.text}>B. {que.B}</span>
                           <span className={correctOpt(que.id).perCentage ? `${styles.perCentage} ${styles.active}` : styles.perCentage}>0%</span>
                        </div>
                        <div
                           onClick={() => handler(idx, "C")}
                           className={correctOpt(que.id).correct === "C" ? styles.optionCorrect : correctOpt(que.id).incorrect === "C" ? styles.optionIncorrect : ""}
                        >
                           <span className={styles.text}>C. {que.C}</span>
                           <span className={correctOpt(que.id).perCentage ? `${styles.perCentage} ${styles.active}` : styles.perCentage}>0%</span>
                        </div>
                        <div
                           onClick={() => handler(idx, "D")}
                           className={correctOpt(que.id).correct === "D" ? styles.optionCorrect : correctOpt(que.id).incorrect === "D" ? styles.optionIncorrect : ""}
                        >
                           <span className={styles.text}>D. {que.D}</span>
                           <span className={correctOpt(que.id).perCentage ? `${styles.perCentage} ${styles.active}` : styles.perCentage}>0%</span>
                        </div>
                     </div>
                  </div>
               </div>
            )
         })}
      </>

   )
}
