import { AuthContext } from "@Contexts/Auth";
import { useContext } from "react";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  const getInitials = (text: string) => {
    if (!text) return "";

    const atIndex = text.indexOf("@");
    if (atIndex !== -1) {
      text = text.slice(0, atIndex);
    }

    const names = text.trim().split(/\s+/);
    const initials = names.map((n) => n[0]).join("");

    return initials.length > 3
      ? initials[0] + initials[initials.length - 1]
      : initials.toUpperCase();
  };
  if (!user) return null;

  const getUserImage = () => {
    return user.photoURL;
  };

  return (
    <div className="flex flex-row items-center w-full cursor-pointer">
      <div className="flex items-center justify-center w-[30px] h-[30px] bg-primary text-white rounded-full text-lg font-bold">
        {getUserImage() ? (
          <img
            src={user.photoURL}
            alt="User profile"
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          getInitials(user?.displayName || "")
        )}
      </div>
      <h6 className="text-nowrap ml-2">{user?.displayName || "User"}</h6>
    </div>
  );
};

export default UserProfile;
