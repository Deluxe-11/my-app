import MySwal from '@src/components/Common/SweetAlert';

export default function useNotification() {
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
    }
  };
}
