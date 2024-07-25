import Landing from "./CRUD_Module/Landing";
// import RegistrationForm from "./components/Forms/RegistrationForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GiftProvider } from "./CONTEXT_MODULE/Context/ExampleContext";
import Mumbai from "./CONTEXT_MODULE/Context/Mumbai";
const App = () => {
  return (
    <div>
      {/* <div>
        <RegistrationForm />
      </div> */}
      <div>
        <ToastContainer />
        <Landing />
        <GiftProvider>
          <Mumbai />
        </GiftProvider>
      </div>
    </div>
  );
};

export default App;
