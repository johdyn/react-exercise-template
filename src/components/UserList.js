import { useEffect, useState } from "react";
import User from "./User";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("first render");
    const url =
      "https://randomuser.me/api/?inc=email,gender,name,picture&results=10";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
        console.log(data);
      });
  }, []);

  function renderUsers() {
    console.log(users);
    const userComponents = users.map((user) => (
      <User
        title={user.name.title}
        firstName={user.name.first}
        lastName={user.name.last}
        gender={user.gender}
        picture={user.picture.medium}
      />
    ));
    return userComponents;
  }

  return (
    <article className="UserList">
      <p></p>
      {renderUsers()}
    </article>
  );
}

export default UserList;

// Husk clean up function
