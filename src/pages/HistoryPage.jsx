import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";
import GlobalStyle from "../style/GlobalStyle";

export default function History() {
    return (
        <PageBody>
            <GlobalStyle />
            <Header />
            <Footer />
        </PageBody>
    );
}

const PageBody = styled.div`
    height: 100%;
    width: 100%;
`;
