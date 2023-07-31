import { useReducer } from "react";
import "./App.css";
import LoginStatus from "./state-management/LoginStatus";
import authReducer from "./state-management/reducers/authReducer";
import AuthContext from "./state-management/contexts/authContext";
import TaskList from "./state-management/TaskList";

function App() {
  const [user, authDispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
      <TaskList />
      <LoginStatus />
    </AuthContext.Provider>
  );
}

export default App;
