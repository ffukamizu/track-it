import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import GlobalStyle from '../style/GlobalStyle';

export default function History() {
    return (
        <PageBody>
            <GlobalStyle />
            <Header />
            <HorizontalSeparator></HorizontalSeparator>
            <ContentContainer>
                <HistoryTitle>History</HistoryTitle>
                <HistoryDescription>Em breve você poderá ver o histórico dos seus hábitos aqui!</HistoryDescription>
            </ContentContainer>
            <Footer />
        </PageBody>
    );
}

const PageBody = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContentContainer = styled.div`
    height: 100%;
    width: 340px;
    display: flex;
    flex-direction: column;
`;

const HistoryTitle = styled.p`
    width: 100px;
    height: 29px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: #126ba5;
`;

const HistoryDescription = styled.p`
    height: 74px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    margin-top: 22px;
`;

const HorizontalSeparator = styled.div`
    height: 100px;
    width: 100%;
`;
