import ResetStyle from "./style/ResetStyle";
import styled from "styled-components";

import LoginScreen from "./pages/LoginScreenPage";
import UserRegister from "./pages/UserRegisterPage";
import Habits from "./pages/HabitsPage";
import Today from "./pages/TodayPage";
import History from "./pages/HistoryPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <PageBody>
          <ResetStyle />
        <Routes>
          <Route path='/' element={<LoginScreen />} />
          <Route path='/cadastro' element={<UserRegister />} />
          <Route path='/habitos' element={<Habits/>} />
          <Route path='/hoje' element={<Today />} />
          <Route path='/historico' element={<History />} />
        </Routes>
      </PageBody>
    </BrowserRouter>
  );
}

const PageBody = styled.div`
  height: 100vh;
`;
