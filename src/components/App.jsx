import { useState, useEffect} from 'react'
import './App.css'
import Description from './Description/Description'
import Options from './Options/Options'
import Notification from './Notification/Notification'
import Feedback from './Feedback/Feedback'



const LOCAL_KEY = "feedbackData";

function App() {
  

  const [feedback, setFeedback] = useState(() => {
  const initialData = window.localStorage.getItem(LOCAL_KEY);
  return initialData ? JSON.parse(initialData) : { good: 0, neutral: 0, bad: 0 };
});

  useEffect(() => {
    window.localStorage.setItem(LOCAL_KEY,JSON.stringify(feedback));
    
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
      <Description header={"Sip Happens Café"} paragraph={"Please leave your feedback about our service by selecting one of the options below."} />
      <Options updateFeedback ={updateFeedback } handleReset={handleReset} totalFeedback={totalFeedback}/>
      
      {!totalFeedback ? <Notification message={"No feedback yet"} /> : <Feedback feedback={feedback} totalFeedback={totalFeedback} />}
    </>
  )
}

export default App
