import { useReducer } from "react";
import "./App.css";
import LoginStatus from "./state-management/LoginStatus";
import authReducer from "./state-management/reducers/authReducer";
import AuthContext from "./state-management/contexts/authContext";
import TaskList from "./state-management/TaskList";
import AuthProvider from "./state-management/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <TaskList />
      <LoginStatus />
    </AuthProvider>
  );
}

export default App;
