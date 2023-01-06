
import styles from './App.module.css'
import Button from 'components/Button/Button';
import { useToast } from 'Hook/useToast';
export const ToastExamplePage = () => {
 const {Toast, addToast} = useToast();
  return (
    <div className={styles.root}>
      <h1>React Toast Component</h1>
      <div className={styles.buttons}>
        <Button handleClick={() => addToast('success')}>Success</Button>
        <Button handleClick={() => addToast('danger')}>Danger</Button>
        <Button handleClick={() => addToast('info')}>Info</Button>
        <Button handleClick={() => addToast('warning')}>Warning</Button>
      </div>
      <Toast />
    </div>
  );
}
