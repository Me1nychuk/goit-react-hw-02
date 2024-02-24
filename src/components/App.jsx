import { useState, useEffect} from 'react'
import './App.css'
import Description from './Description/Description'
import Options from './Options/Options'
import Feedback from './Feedback/Feedback'
import Notification from './Notification/Notification'



//const localKey = "feedbackData";

function App() {
  

  const [feedback, setFeedback] = useState(() => {
  const initialData = window.localStorage.getItem("feedbackData");
  return initialData ? JSON.parse(initialData) : { good: 0, neutral: 0, bad: 0 };
});

  useEffect(() => {
    window.localStorage.setItem("feedbackData",JSON.stringify(feedback));
    
  }, [feedback]);

  const totalFeedback = feedback.bad + feedback.good + feedback.neutral;
  
  const updateFeedback  = (type) => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1
    }));
  }
  const handleReset = () => {
  setFeedback(prevFeedback => ({
    ...prevFeedback,
    good: 0,
    neutral: 0,
    bad: 0
  })); }


  return (
    <>
      <Description />
      <Options updateFeedback ={updateFeedback } handleReset={handleReset} totalFeedback={totalFeedback}/>
      
      {!totalFeedback ? <Notification/> : <Feedback feedback={feedback} totalFeedback={totalFeedback} />}
    </>
  )
}

export default App
