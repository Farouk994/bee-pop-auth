import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.css";
// import Link from "next/link"

function MyApp({ Component, pageProps }) {
   return (
      <>
         <Head>
            <link rel="stylesheet" href="/css/style" />
         </Head>
         <Navbar />
         <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
         />
         <Component {...pageProps} />
      </>
   );
}

export default MyApp;
