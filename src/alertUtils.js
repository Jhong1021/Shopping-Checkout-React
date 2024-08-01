import Swal from 'sweetalert2';

// Success Alert
export const showSuccessAlert = (title, text) => {
  Swal.fire({
    icon: 'success',
    title: title || 'Success',
    text: text || 'Operation completed successfully!',
  });
};

// Error Alert
export const showErrorAlert = (title, text) => {
  Swal.fire({
    icon: 'error',
    title: title || 'Error',
    text: text || 'Something went wrong!',
  });
};

// Info Alert
export const showInfoAlert = (title, text) => {
  Swal.fire({
    icon: 'info',
    title: title || 'Information',
    text: text || 'Here is some information.',
  });
};

// Warning Alert
export const showWarningAlert = (title, text) => {
  Swal.fire({
    icon: 'warning',
    title: title || 'Warning',
    text: text || 'Please be cautious!',
  });
};
