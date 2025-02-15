import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Protected({ children, authentication = true }) {
  let navigate = useNavigate();
  let authStatus = useSelector((state) => state.auth.value);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== "false") {
      navigate("/");
    } else {setLoading(false);}
    
  }, [authStatus, authentication, navigate]);

  return <div>{loading ? <h1>Loading...</h1> : <>{children}</>}</div>;
}
