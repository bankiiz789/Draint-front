import Router from "./routes";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router />
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="colored"
        transition={Slide}
      />
    </>
  );
}

export default App;
