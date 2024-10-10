import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const Toast = () => {
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
    </>
  );
}

export default Toast;
