import ChangeEmail from "./ChangeEmail";
import ChangePassword from "./ChangePassword";
import ChangePhoneNo from "./ChangePhoneNo";
import ChangeProfilePic from "./ChangeProfilePic";
import ChangeUsername from "./ChangeUsername";

function Profile() {
   
  
    return (
      <div className="profile">
        <ChangeProfilePic />
        <ChangeUsername />
        <ChangeEmail />
        <ChangePhoneNo />
        <ChangePassword />
      </div >
    )}

export default Profile;