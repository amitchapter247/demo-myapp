import Swal from 'sweetalert2';

export const ConfirmBox = async (obj: object | any) => {
  if (!obj) {
    obj = {};
  }
  let {
    title,
    text,
    type,
    confirmButtonColor,
    cancelButtonColor,
    confirmButtonText,
    cancelButtonText,
    allowOutsideClick,
    showCloseButton,
  } = obj;
  return await Swal.fire({
    title: title || 'Are you sure?',
    text: text || 'You want to be able to revert this!',
    type: type || 'warning',
    showCancelButton: true,
    allowOutsideClick:
      allowOutsideClick !== 'undefined' ? allowOutsideClick : true,
    confirmButtonColor: confirmButtonColor || '#3085d6',
    cancelButtonColor: cancelButtonColor || '#d33',
    confirmButtonText: confirmButtonText || 'Yes!',
    cancelButtonText: cancelButtonText || 'Cancel',
    showCloseButton: showCloseButton || false,
  });
};
