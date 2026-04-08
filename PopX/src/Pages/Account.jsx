import React, { useEffect, useState } from "react";
import profile from "../assets/profile.png";
import camera from "../assets/camera.png";

const Account = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <div className="bg-blue-400 min-h-screen flex items-center justify-center ">
      <div className="min-h-screen flex items-center justify-center bg-[#f7f8f8] px-4">
        <div className=" w-full max-w-sm flex flex-col">
          <div className="text-xl font-semibold shadow-xs p-4 bg-white ">
            Account Settings
          </div>
          <div className="account border-b text-sm border-b-gray-600 bg-gray-100 border-dashed p-4">
            {/*profile*/}
            <div className="flex gap-2 py-4">
              <div className="relative">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-16 h-16 rounded-full"
                />
                <div className="absolute bottom-0 rounded-full p-1 bg-[#6c25ff] right-2">
                  <img src={camera} alt="Camera" className="w-3 invert h-3" />
                </div>
              </div>
              <div>
                <p className="font-bold">{user?.fullName || "No Name"}</p>
                <p className="text-gray-600 text-xl">
                  {user?.email || "No Email"}
                </p>
              </div>
            </div>
            <p className="font-semibold text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
              possimus sit animi quaerat deleniti necessitatibus, neque nostrum
              iste quia tempora.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
