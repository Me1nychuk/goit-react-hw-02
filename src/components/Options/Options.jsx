import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Options.module.css';



const Options = ({ updateFeedback, handleReset, totalFeedback }) => {
  
  const [clickedButton, setСlickedButton] = useState(null);
 
  const handleClick = (type) => {
    setСlickedButton(type)

    updateFeedback(type);
    setTimeout(()=>{setСlickedButton(null)},300)
}


  return (
    <div className={css.optionsWrapper}> 
      <button className={clickedButton == "good"? css.clickedButton:''} type="button" onClick={() => handleClick ('good')}>Good</button>
      <button className={clickedButton == "neutral"? css.clickedButton:''}  type="button" onClick={() => handleClick ('neutral')}>Neutral</button>
      <button className={clickedButton == "bad"? css.clickedButton:''}  type="button" onClick={() => handleClick ('bad')}>Bad</button>
      {totalFeedback ? (<button type="button" onClick={handleReset}>Reset</button>) : ""}
    </div>
  );
}


export default Options;

PropTypes.propTypes = {
  updateFeedback: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};