import { Link } from "react-router-dom"
// import { useContext } from "react";
import { useGeneralContext } from "../Contexts/Context";

const Signup: React.FC = () => {
  const { name, age } = useGeneralContext();

  return (
    <div>
      <h3>signup</h3>
      <div>
        <Link to="/show">show data</Link>
      </div>
    </div>
  )
}

export default Signup
