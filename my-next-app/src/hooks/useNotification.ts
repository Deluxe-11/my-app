import MySwal from '@src/components/Common/SweetAlert';
import { useAppDispatch } from '@src/apps/store';
import { showNotification } from '@src/apps/slice';

export default function useNotification(
  type: 'sweetalert' | 'snackbar' = 'sweetalert'
) {
  const dispatch = useAppDispatch();

  if (type === 'snackbar') {
    return {
      success(title: string, description: string = '') {
        dispatch(
          showNotification({
            title,
            description,
            type: 'success'
          })
        );
      },
      primary(title: string, description: string) {
        dispatch(
          showNotification({
            title,
            description,
            type: 'info'
          })
        );
      }
    };
  }

  return {
    success(message: string, title = 'Thành công', confirm = 'Xác nhận') {
      MySwal.fire({
        icon: 'success',
        text: message,
        title: title,
        confirmButtonText: confirm
      });
    },
    error(message: string, title = 'Thất bại', confirm = 'Xác nhận') {
      MySwal.fire({
        icon: 'success',
        text: message,
        title: title,
        confirmButtonText: confirm
      });
    },
    primary(message: string, title = 'Thất bại', confirm = 'Xác nhận') {}
  };
}
