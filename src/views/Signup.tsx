import { Link } from "react-router-dom"
import { useSecContext } from "../Contexts/SecContext";

const Signup: React.FC = () => {
  const { state } = useSecContext();

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
