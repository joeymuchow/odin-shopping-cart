import { Link } from "react-router-dom";

const Purchased = () => {
  return (
    <div>
      <h3>Thank you for your purchase!</h3>
      <Link to="/">
        You can go back to the home page by clicking here!
      </Link>
    </div>
  );
};

export default Purchased;
