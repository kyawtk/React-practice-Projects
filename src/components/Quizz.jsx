import { useState } from "react";
import { quizzData } from "../data/quizzData";
import "../styles/quizz.scss";
function Quizz() {
  const [currentIndex, setIndex] = useState(0);
  const [quizz, setQuizz] = useState(quizzData[currentIndex]);
  function handleNext() {
    const newIndex = (currentIndex + 1) % quizzData.length;
    setIndex(newIndex);
    setQuizz(quizzData[newIndex]);
  }
  
  function handlePrev() {
    const newIndex = (currentIndex - 1 + quizzData.length) % quizzData.length;
    setIndex(newIndex);
    setQuizz(quizzData[newIndex]);
  }
  return (
    <div className="quizz-container">
      <small>Question {currentIndex + 1}</small>
      <QuizzCard {...quizz}></QuizzCard>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

function QuizzCard({ question, answerOptions, currentIndex }) {
 
  return (
    <div className="quizzCard-container">
      <h1 className="question">{question}</h1>
      <div className="options">
        <ul>
          {answerOptions.map((option) => {
            return (
              <OptionListItem option={option} key={option.answertext}></OptionListItem>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function OptionListItem({ option }) {
    const [isCorrect ,setIsCorrect] = useState('')
    function handleChoose() {
        if(option.isCorrect){
            setIsCorrect('correct')
        }else{
            setIsCorrect('wrong')
        }
    }
  return (
    <li
      key={option.answertext}
      onClick={handleChoose}
      className={`option ${isCorrect}`}
    >
      {option.answertext}
    </li>
  );
}
export default Quizz;
