import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Habits() {
    return (
        <PageBody>
            <Header />
            <ContentContainer></ContentContainer>
            <Footer />
        </PageBody>
    );
}

const PageBody = styled.div`
    height: 100%;
    width: 100%;
    background-color: #f2f2f2;
`;

const ContentContainer = styled.div`
    height: 100%;
    width: 375px;
`;