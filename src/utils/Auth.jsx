import { useState } from "react";

import LoginForm from "../components/Auth/login";

export default function Auth({ children }) {
  let [Authed, setAuth] = useState(true);

  return Authed ? children : <LoginForm setAuth={setAuth} />;
}
