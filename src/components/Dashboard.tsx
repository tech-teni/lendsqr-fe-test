import React, { useEffect, useState } from "react";
import "../styles/style.css";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Navbar from "./parts/Navbar";
import Sidebar from "./parts/Sidebar";
import UserCard from "./parts/UserCard";
import axios from "axios";
import { User } from "../types";
import { parse } from "path";

const Dashboard = () => {
  const { pathname } = useLocation();
  const [filter, setFilter] = useState<boolean>(false);
  const showFilter = () => {
    setFilter(!filter);
  };

  console.log(pathname);
  const [users, setUsers] = useState<User[]>([]);

  const navigate = useNavigate();

  const fetchAllUser = async () => {
    const res = await axios.get(
      "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
    );
    setUsers(res.data);
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
          <h6>Users</h6>
          <div className="total-users row">
            <UserCard
              title="USERS"
              numOfUser={users.length}
              icon={"./img/icon.svg"}
            />
            <UserCard
              title="Active Users"
              numOfUser={users.length}
              icon={"./img/icon2.svg"}
            />
            <UserCard
              title="Users with Loans"
              numOfUser={users.length}
              icon={"./img/icon3.svg"}
            />
            <UserCard
              title="Users with Savings"
              numOfUser={users.length}
              icon={"./img/icon4.svg"}
            />
          </div>

          <div className="main-info">
            <button id="filter" onClick={showFilter}>
              Show Filter
            </button>
            <div className="row">
              {filter && (
                <div className="filter-card col-lg-3">
                  <form action="">
                    <div>
                      <label htmlFor="">Organization</label>
                      <select name="organisation" id="organisation">
                        <option value="select" selected>
                          Select
                        </option>
                        <option value="org1">Org1</option>
                        <option value="org2">Org2</option>
                        <option value="org3">Org3</option>
                        <option value="org4">Org4</option>
                      </select>
                    </div>
                    <div className="">
                      <label htmlFor="username">Username</label>
                      <input type="text" placeholder="User" />
                    </div>

                    <div className="">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        id=""
                        placeholder="Email"
                      />
                    </div>

                    <div className="">
                      <label htmlFor="username">Date</label>
                      <input type="date" placeholder="Date" />
                    </div>
                    <div className="">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="number"
                        name=""
                        id=""
                        placeholder="Phone Number"
                      />
                    </div>

                    <div>
                      <label htmlFor="">Status</label>
                      <select name="status" id="status">
                        <option value="select" selected>
                          Select
                        </option>
                        <option value="active">active</option>
                        <option value="pending">pending</option>
                        <option value="inactive">inactive</option>
                        <option value="blacklisted">Blacklisted</option>
                      </select>
                    </div>

                    <div className="btn-container">
                      <input
                        type="submit"
                        value="Reset"
                        name="reset"
                        className="reset-btn"
                      />

                      <input
                        type="submit"
                        value="Filter"
                        name="filter"
                        className="filter-btn"
                      />
                    </div>
                  </form>
                </div>
              )}
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>
                    <h3>
                      organization <img src="./img/tablehead-icon.svg" alt="" />{" "}
                    </h3>
                  </th>
                  <th>
                    <h3>
                      Username <img src="./img/tablehead-icon.svg" alt="" />{" "}
                    </h3>
                  </th>
                  <th>
                    <h3>
                      Email <img src="./img/tablehead-icon.svg" alt="" />{" "}
                    </h3>
                  </th>
                  <th>
                    <h3>
                      Phone number <img src="./img/tablehead-icon.svg" alt="" />{" "}
                    </h3>
                  </th>
                  <th>
                    <h3>
                      Date joined <img src="./img/tablehead-icon.svg" alt="" />{" "}
                    </h3>
                  </th>
                  <th>
                    <h3>
                      Status <img src="./img/tablehead-icon.svg" alt="" />{" "}
                    </h3>
                  </th>
                  {/* <th></th> */}
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr>
                    <td>{user.orgName}</td>
                    <td>{user.userName}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{user.createdAt}</td>

                    <td>
                      <button
                        className={
                          parseInt(user.id) % 3 == 0
                            ? "status-btn-pending"
                            : "status-btn-active"
                        }
                      >
                        {parseInt(user.id) % 3 == 0 ? "Pending" : "Active"}
                      </button>
                    </td>

                    <td
                      onClick={() => navigate(`/details/${user.id}`)}
                      className="td-modal"
                    >
                      <img src="./img/three-dots.svg" alt="" />
                      <div className="view-details-modal">
                        <div className="">
                          <img src="./img/eye.svg" alt="" />
                          <h6>View Details</h6>
                        </div>
                        <div className="">
                          <img src="./img/blacklist-user-icon.svg" alt="" />
                          <h6>Blacklist User</h6>
                        </div>
                        <div className="">
                          <img src="./img/activate-user.svg" alt="" />
                          <h6>Activate User</h6>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <footer className="footer">
            <div className="number-of-item">
              <form action="" method="POST">
                <label htmlFor="tableLength">showing</label>
                <select name="tableLength" id="" form="carform">
                  <option value="100">100</option>
                  <option value="50">50</option>
                  <option value="20">20</option>
                </select>
                <span>out of 100</span>
              </form>
            </div>
            <div aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item ">
                  <a className="page-link" aria-label="Previous">
                    <span aria-hidden="true" className="page-link-icon">
                      &laquo;
                    </span>
                    {/* <span className="sr-only">Previous</span> */}
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link">...</a>
                </li>
                <li className="page-item">
                  <a className="page-link">15</a>
                </li>
                <li className="page-item">
                  <a className="page-link">16</a>
                </li>

                <li className="page-item ">
                  <a className="page-link" aria-label="Next">
                    <span aria-hidden="true" className="page-link-icon">
                      &raquo;
                    </span>
                    {/* <span className="sr-only">Next</span> */}
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
