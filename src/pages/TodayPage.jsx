import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Today() {
    return (
        <PageBody>
            <Header />
            <Footer />
        </PageBody>
    );
}

const PageBody = styled.div`
    height: 100%;
    width: 100%;
    background-color: #f2f2f2;
`;
