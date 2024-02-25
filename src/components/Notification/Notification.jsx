import css from './Notification.module.css'

const Notification = ({ message }) => {
  return (
         <div className={css.notificationWrapper}>
      <p>{message}</p>
        </div>
  )
}

export default Notification