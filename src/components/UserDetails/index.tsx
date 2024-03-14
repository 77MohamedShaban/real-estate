import { ISignUpData } from "../../interfaces";
import "./index.scss";

interface Iprops {
  user: ISignUpData;
}
const UserDetails = (props: Iprops) => {
  const { user } = props;
  return (
    <>
      <h2 style={{ color: "aqua" }}>WELCOME "{user.fullname.toUpperCase()}"</h2>
      <div style={{ margin: 30 }}>
        <h3>Username: {user.fullname}</h3>
        <h3>Email: {user.email}</h3>
      </div>
    </>
  );
};
export default UserDetails;
