import Spinner from "react-bootstrap/Spinner";
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-full-screen">
      <Spinner animation="border" variant="warning" />
    </div>
  );
};

export default Loader;
