import UserInfo from "./UserInfo.js";
import avengers from "../../db/users.json";

const Avengers = () => {
  // const user =
  //{
  //   name: "John Doe",
  //   avatarUrl: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
  //};
  return (
    <>
      {avengers.map((hero, index) => {
        return <UserInfo key={index} user={hero} />;
      })}
    </>
  );
};
export default Avengers;
