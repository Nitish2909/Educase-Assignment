import React, { useEffect, useState } from "react";
import profile from "../assets/profile.png";
import camera from "../assets/camera.png";

const Account = () => {
  const [user, setUser] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");

    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);
      setImage(parsedUser.profileImage); // load saved image
    }
  }, []);

  //handle Image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);

        // Save image in localStorage
        const updatedUser = {
          ...user,
          profileImage: reader.result,
        };

        localStorage.setItem("currentUser", JSON.stringify(updatedUser));
        setUser(updatedUser);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-blue-400 min-h-screen flex items-center justify-center ">
      <div className="min-h-screen flex items-center justify-center bg-[#f7f8f8] px-4">
        <div className=" w-full max-w-sm flex flex-col mb-70">
          <div className="text-xl font-semibold shadow-xs p-4 bg-white ">
            Account Settings
          </div>
          <div className="account border-b text-sm border-b-gray-600 bg-gray-100 border-dashed p-4">
            {/*profile*/}
            <div className="flex gap-2 py-4">
              <div className="relative">
                <img
                  src={image || profile}
                  alt="Profile"
                  className="w-16 h-16 rounded-full"
                />

                {/* Hidden File Input */}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="uploadImage"
                />

                {/* Camera Button */}
                <label
                  htmlFor="uploadImage"
                  className="absolute bottom-0 right-0 bg-purple-700 p-1 rounded-full cursor-pointer"
                >
                  <img src={camera} alt="Camera" className="w-3 h-3 invert" />
                </label>
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
