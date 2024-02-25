import css from './Description.module.css';

const Description = ({header, paragraph}) => {
  return (
      <div className={css.descriptionBlock}>
          <h1>{header}</h1>
      <p>{ paragraph}</p>
    </div>
  )
}

export default Description