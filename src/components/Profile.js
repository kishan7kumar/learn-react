import React, { useEffect } from "react";

const Profile = () => {
  useEffect(() => {
    console.log("useEffect called");
    return () => {
      console.log("this is like componentWillUnMount");
    };
  }, []);

  return (
    <>
      <div>Profile</div>
    </>
  );
};

export default Profile;
