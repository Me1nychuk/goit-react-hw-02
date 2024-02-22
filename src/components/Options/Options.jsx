import css from './Options.module.css';

const Options = ({ updateFeedback , handleReset, totalFeedback }) => {
  return (
    <div className={css.optionsWrapper}> 
      <button type="button" onClick={() => updateFeedback ('good')}>Good</button>
      <button type="button" onClick={() => updateFeedback ('neutral')}>Neutral</button>
      <button type="button" onClick={() => updateFeedback ('bad')}>Bad</button>
      {totalFeedback ? (<button type="button" onClick={handleReset}>Reset</button>) : ""}
    </div>
  );
}


export default Options;
