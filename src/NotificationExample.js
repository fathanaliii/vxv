
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NotificationExample = () => {
  const notify = () => toast("Test Notifikasi berhasil!");

  return (
    <div>
      <button className="mybutton" onClick={notify}>Tampilkan Notifikasi</button>
      <ToastContainer />
    </div>
  );
}

export default NotificationExample;
