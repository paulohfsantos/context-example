import { useContext } from "react";
import { Link } from "react-router-dom"
import { GeneralContextSec } from "../Contexts/SecContext";
// import { useGeneralContext } from "../Contexts/Context";

const Signup: React.FC = () => {
  // const { name, age } = useGeneralContext();
  const { state } = useContext(GeneralContextSec);

  return (
    <div>
      <h3>signup:</h3>
      <div>
        user: {state.user.name}
      </div>
      <div>
        age: {state.user.age}
      </div>
      <div>
        <Link to="/show">show data</Link>
      </div>
    </div>
  )
}

export default Signup
