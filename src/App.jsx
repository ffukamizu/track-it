import ResetStyle from "./style/ResetStyle";
import styled from "styled-components";

import LoginScreen from "./components/LoginScreen";
import UserRegister from "./components/UserRegister";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <PageBody>
          <ResetStyle />
        <Routes>
          <Route path='/' element={<LoginScreen />} />
          <Route path='/cadastro' element={<UserRegister />} />
        </Routes>
      </PageBody>
    </BrowserRouter>
  );
}

const PageBody = styled.div`
  height: 100vh;
`;
