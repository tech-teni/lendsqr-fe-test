import React, { useEffect, useState } from "react";
import "../styles/style.css";
import { useLocation, Link, useParams } from "react-router-dom";
import Navbar from "./parts/Navbar";
import Sidebar from "./parts/Sidebar";
import { User } from "../types";
import axios from "axios";

const Details = () => {
  const { pathname } = useLocation();
  const AuthUser = localStorage.getItem("isLoggedIn");

  console.log(pathname);
  const [user, setUser] = useState<User>();
  const param = useParams();

  const fetchAllUser = async () => {
    const res = await axios.get(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${param.id}`
    );
    console.log(res);
    setUser(res.data);

    // get user

    setUser(res.data);
    localStorage.setItem("user", JSON.stringify(res.data));
    localStorage.getItem("uses");
  };

  useEffect(() => {
    fetchAllUser();
  }, []);

  return (
    <div className="dashboard main">
      <Navbar />
      <div className="row mx-0">
        <Sidebar />
        <section className="section-content col-lg-10 col-md-10 col-sm-11">
          <div className="d-flex ">
            <svg
              width="28"
              height="10"
              viewBox="0 0 28 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginTop: "5px", marginRight: "5px" }}
            >
              <path
                d="M0.94997 5.35639C0.994502 5.47123 1.0613 5.5767 1.14684 5.66575L4.89684 9.41575C5.07263 9.5927 5.31285 9.69348 5.56248 9.69348C5.81211 9.69348 6.05232 9.5927 6.22812 9.41575C6.40508 9.23997 6.50586 8.99974 6.50586 8.75011C6.50586 8.50048 6.40508 8.26027 6.22812 8.08447L4.07187 5.93761H26.6562C27.1742 5.93761 27.5937 5.51809 27.5937 5.00011C27.5937 4.48213 27.1742 4.06261 26.6562 4.06261H4.07187L6.22812 1.91575C6.5961 1.54777 6.5961 0.952482 6.22812 0.584502C5.86014 0.216522 5.26485 0.216522 4.89687 0.584502L1.14687 4.3345C1.06133 4.42356 0.994532 4.52903 0.95 4.64386C0.901952 4.75636 0.876173 4.87706 0.875 5.00011C0.876172 5.12316 0.901953 5.24386 0.95 5.35636L0.94997 5.35639Z"
                fill="#545F7D"
              />
            </svg>
            <p className="back-to-details">Back to details</p>
          </div>

          <h6>User Details</h6>
          <div className="total-users ">
            <div className="user-card2">
              <div className="user-card-info ">
                <div className="info-1">
                  <div className="user-img-container">
                    <img
                      src={user?.profile?.avatar}
                      alt=""
                      className="user-img"
                    />{" "}
                  </div>
                  <div className="user-full-name">
                    <h3>{`${user?.profile?.firstName} ${user?.profile?.lastName}`}</h3>
                    <span>{user?.accountNumber}</span>
                  </div>
                </div>
                <div className="info-2">
                  <h6>User's Tier</h6>
                  <div className="">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.98572 1.28751C7.85197 1.29314 7.73572 1.38126 7.69447 1.50876L6.18759 6.17996L1.28071 6.16996C1.14196 6.16996 1.01821 6.25934 0.975716 6.39121C0.932591 6.52371 0.980091 6.66809 1.09259 6.74996L5.06891 9.62676L3.54203 14.293C3.49891 14.4249 3.54578 14.5699 3.65828 14.6511C3.77016 14.733 3.92265 14.733 4.03454 14.6511L7.9995 11.758L11.9657 14.6511C12.0776 14.733 12.2301 14.733 12.342 14.6511C12.4545 14.5699 12.5014 14.4249 12.4582 14.293L10.9314 9.62676L14.9077 6.74996C15.0202 6.66809 15.0677 6.52371 15.0246 6.39121C14.9814 6.25933 14.8583 6.16996 14.7196 6.17059L9.81269 6.18059L8.30393 1.50939V1.50876C8.25956 1.37188 8.12957 1.28188 7.98581 1.28751L7.98572 1.28751Z"
                        fill="#E9B200"
                      />
                    </svg>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.98572 1.28751C7.85197 1.29314 7.73572 1.38126 7.69447 1.50876L6.18759 6.17996L1.28071 6.16996C1.14196 6.16996 1.01821 6.25934 0.975716 6.39121C0.932591 6.52371 0.980091 6.66809 1.09259 6.74996L5.06891 9.62676L3.54203 14.293C3.49891 14.4249 3.54578 14.5699 3.65828 14.6511C3.77016 14.733 3.92265 14.733 4.03454 14.6511L7.9995 11.758L11.9657 14.6511C12.0776 14.733 12.2301 14.733 12.342 14.6511C12.4545 14.5699 12.5014 14.4249 12.4582 14.293L10.9314 9.62676L14.9077 6.74996C15.0202 6.66809 15.0677 6.52371 15.0246 6.39121C14.9814 6.25933 14.8583 6.16996 14.7196 6.17059L9.81269 6.18059L8.30393 1.50939V1.50876C8.25956 1.37188 8.12957 1.28188 7.98581 1.28751L7.98572 1.28751Z"
                        fill="#E9B200"
                      />
                    </svg>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.98572 1.28751C7.85197 1.29314 7.73572 1.38126 7.69447 1.50876L6.18759 6.17996L1.28071 6.16996C1.14196 6.16996 1.01821 6.25934 0.975716 6.39121C0.932591 6.52371 0.980091 6.66809 1.09259 6.74996L5.06891 9.62676L3.54203 14.293C3.49891 14.4249 3.54578 14.5699 3.65828 14.6511C3.77016 14.733 3.92265 14.733 4.03454 14.6511L7.9995 11.758L11.9657 14.6511C12.0776 14.733 12.2301 14.733 12.342 14.6511C12.4545 14.5699 12.5014 14.4249 12.4582 14.293L10.9314 9.62676L14.9077 6.74996C15.0202 6.66809 15.0677 6.52371 15.0246 6.39121C14.9814 6.25933 14.8583 6.16996 14.7196 6.17059L9.81269 6.18059L8.30393 1.50939V1.50876C8.25956 1.37188 8.12957 1.28188 7.98581 1.28751L7.98572 1.28751Z"
                        fill="#E9B200"
                      />
                    </svg>
                  </div>
                </div>
                <div className="info-3">
                  <h2>₦{user?.accountBalance}</h2>
                  <span>9912345678/Providus Bank</span>
                </div>
              </div>
              <div className="user-card-link">
                <ul>
                  <li className="selected">
                    <a href="">General Details</a>{" "}
                  </li>
                  <li>
                    <a href="">Documents</a>{" "}
                  </li>
                  <li>
                    <a href="">Bank Details</a>{" "}
                  </li>
                  <li>
                    <a href="">Loans</a>{" "}
                  </li>
                  <li>
                    <a href="">Savings</a>{" "}
                  </li>
                  <li>
                    <a href="">App and System</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="user-info-container">
            <div className="personal-info-card">
              <h6>Personal Information</h6>
              <div className="row">
                <div className="col-lg-2 col-md-3 col-sm-4">
                  <h6>Name</h6>
                  <h3>
                    {`${user?.profile?.firstName} ${user?.profile?.lastName}`}
                  </h3>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                  <h6> Phone Number</h6>
                  <h3>{user?.profile?.phoneNumber}</h3>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4">
                  <h6>Email Address</h6>
                  <h3>{user?.email}</h3>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                  <h6>Bvn</h6>
                  <h3>{user?.profile?.bvn}</h3>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                  <h6>Gender</h6>
                  <h3>{user?.profile?.gender}</h3>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                  <h6>Marital status</h6>
                  <h3>Single</h3>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                  <h6>Children</h6>
                  <h3>None</h3>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                  <h6>Type of residence</h6>
                  <h3>{user?.profile?.address}</h3>
                </div>
              </div>
            </div>

            <div className="personal-info-card">
              <h6>Education and Employment</h6>
              <div className="row">
                <div className="col-lg-2 col-md-3 col-sm-4">
                  <h6>level of education</h6>
                  <h3>{user?.education?.level}</h3>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                  <h6> employment status</h6>
                  <h3>{user?.education?.employmentStatus}</h3>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                  <h6>sector of employment</h6>
                  <h3>{user?.education?.sector}</h3>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4">
                  <h6>Duration of employment</h6>
                  <h3>{user?.education?.duration}</h3>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                  <h6>office email</h6>
                  <h3>{user?.education?.officeEmail}</h3>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                  <h6>Monthly income</h6>
                  <h3>
                    <span>{user?.education?.monthlyIncome[0]}</span>
                    <span>- {user?.education?.monthlyIncome[1]}</span>
                  </h3>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                  <h6>loan repayment</h6>
                  <h3>{user?.education?.loanRepayment}</h3>
                </div>
              </div>
            </div>
            <div className="personal-info-card">
              <h6>Socials</h6>
              <div className="row">
                <div className="col-lg-2 col-md-3 col-sm-4">
                  <h6>Twitter</h6>
                  <h3>{user?.socials?.twitter}</h3>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                  <h6>Facebook</h6>
                  <h3>{user?.socials?.facebook}</h3>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                  <h6>Instagram</h6>
                  <h3>{user?.socials?.instagram}</h3>
                </div>
              </div>
            </div>
            <div className="personal-info-card">
              <h6>Guarantor</h6>
              <div className="row">
                <div className="col-lg-2 col-md-3 col-sm-4">
                  <h6>full Name</h6>
                  <h3>
                    {" "}
                    <span>{user?.guarantor?.firstName}</span>{" "}
                    <span> {user?.guarantor?.lastName}</span>
                  </h3>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                  <h6>Phone Number</h6>
                  <h3>{user?.guarantor?.phoneNumber}</h3>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                  <h6>Email Address</h6>
                  <h3>debby@gmail.com</h3>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                  <h6>Relationship</h6>
                  <h3>Sister</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Details;
