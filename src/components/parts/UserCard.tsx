import React from "react";

interface UserCardProps {
  title: string;
  numOfUser: number;
  icon: string;
}

const UserCard: React.FC<UserCardProps> = ({ numOfUser, title, icon }) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 ">
      <div className="user-card">
        <div className="">
          <img src={icon} />
        </div>
        <h5>{title}</h5>
        <h3>{numOfUser}</h3>
      </div>
    </div>
  );
};

export default UserCard;
