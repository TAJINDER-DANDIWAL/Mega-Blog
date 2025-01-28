import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { LogIn, LogOut } from "../../../store/authSlice";
import Logoutbtn from "./Logoutbtn";
import Logo from "../logo";
import { useNavigate } from "react-router-dom";
import Container from "../Container";
import { Link } from "react-router";

function Header() {
  let dispatch = useDispatch();
  let authStatus = useSelector((state) => state.auth.value);
  let navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header>
      <Container>
        <div>
          <Link to="">
            <Logo />
          </Link>
        </div>
        <ul>
          {navItems.map((item) => {
            if (item.active) {
              return <li key={item.name}>
                <Button onClick={() => navigate(item.slug)} label={item.name}/>
              </li>;
            } else {
              return null;
            }
          })}
          {authStatus && (
            <li>
              <Logoutbtn
              />
            </li>
          )}
        </ul>
      </Container>
    </header>
  );
}
export default Header;
