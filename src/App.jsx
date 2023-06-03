import ResetStyle from "./style/ResetStyle";
import styled from "styled-components";

import LoginScreen from "./components/LoginScreen";
import UserRegister from "./components/UserRegister";

export default function App() {
  return (
    <PageBody>
      <ResetStyle />
      <LoginScreen />
      <UserRegister />
    </PageBody>
  );
}

const PageBody = styled.div`
  height: 100vh;
`;