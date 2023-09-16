import "./viewuser.css";
import { useEffect, useState } from "react";
import axios from "axios";
import sweetalert from "sweetalert";

function ViewUser() {
  const [groundList, setGroundList] = useState([]);
  useEffect(() => {
    if (
      localStorage.getItem("role") === "null" ||
      localStorage.getItem("role") != "1"
    ) {
      window.location.href = "/login";
    }
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    //const response = await axios.get("http://localhost:8081/getUser");
    const user = { roleId: 2 };
    const response = await axios.post(
      "http://localhost:8081/getUserByRoleId",
      user
    );
    setGroundList(response.data);
    console.log(response.data);
  };

  const myfun = async (userEmail) => {
    console.log(">>>>>" + userEmail);
    const user = { email: userEmail };
    const res = await axios.post("http://localhost:8081/getUserByEmail", user);
    console.log(res.data);
    if (res.data.status === "Active") {
      const user1 = {
        user_id: res.data.user_id,
        name: res.data.name,
        email: res.data.email,
        mobile: res.data.mobile,
        city: res.data.city,
        password: res.data.password,
        roleId: res.data.roleId,
        status: "InActive",
      };

      const user2 = await axios.post("http://localhost:8081/updateUser", user1);
    } else {
      const user1 = {
        user_id: res.data.user_id,
        name: res.data.name,
        email: res.data.email,
        mobile: res.data.mobile,
        city: res.data.city,
        password: res.data.password,
        roleId: res.data.roleId,
        status: "Active",
      };
      const user2 = await axios.post("http://localhost:8081/updateUser", user1);
    }
    sweetalert("success", "Status updated successfully...", "success");

    getAllUsers();
  };

  return (
    <body class="view">
      <div className="container col-12 viewuser">
        <h1 className="text-center text-light">Owner List</h1>
        <table className="table table-striped">
          <thead>
            <tr className="bg-success text-light">
              <td>User Id</td>
              <td>User Name</td>
              <td>User Email Id</td>
              <td>User Mobile</td>
              <td>User City</td>
              <td>User Status</td>
            </tr>
          </thead>
          <tbody>
            {groundList.map((user) => {
              return (
                <tr>
                  <td>{user.user_id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.mobile}</td>
                  <td>{user.city}</td>
                  <td>
                    <input
                      type="button"
                      onClick={() => {
                        myfun(user.email);
                      }}
                      className="btn btn-success mb-4"
                      value={user.status}
                    />
                  </td>
                </tr>
              );
            })}
            ;
          </tbody>
        </table>
      </div>
    </body>
  );
}

export default ViewUser;
