import { Alert, AlertTitle, Slide, Snackbar } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@src/apps/store';
import { hideNotification } from '@src/apps/slice';
import { TransitionProps } from '@mui/material/transitions';

function Notification() {
  const notification = useAppSelector((state) => state.app.notification);

  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(hideNotification());
  };

  return (
    <Snackbar
      TransitionComponent={TransitionRight}
      open={notification.isOpen}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert
        variant={'filled'}
        onClose={handleClose}
        severity={notification.type}
        sx={{ width: '100%' }}
      >
        <AlertTitle>{notification.title}</AlertTitle>
        {notification.description}
      </Alert>
    </Snackbar>
  );
}

export default Notification;

function TransitionRight(props: TransitionProps) {
  return <Slide {...props} direction="left" />;
}
