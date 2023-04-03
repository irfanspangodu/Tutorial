import React from 'react';
import styled from "styled-components";
import Nav from './includes/Nav';

function BirthDay() {
    return (
        <FirstContainer>
            <Nav />
            <InContainer ClassName="wrapper">
                <Content>
                    <Heading>Welcome Back To<br /> My Website</Heading>
                    <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consequatur illum odit! Molestias libero fuga facilis numquam ducimus quibusdam eius! Ratione, non officiis ducimus ab praesentium perferendis eveniet! Fuga, mollitia.</Paragraph>
                    <ActionButton>Explore</ActionButton>
                </Content>
            </InContainer>
            <SecondContainer>
                <BoxHeading>About Us</BoxHeading>
                <BoxContainer>
                    <BoxContent>
                        <SubHeading>Home</SubHeading>
                        <BoxParagraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consequatur illum odit! Molestias libero fuga facilis numquam ducimus quibusdam eius! Ratione, non officiis ducimus ab praesentium perferendis eveniet! Fuga, mollitia. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consequatur illum odit! Molestias libero fuga facilis numquam ducimus quibusdam eius! Ratione, non officiis ducimus ab praesentium perferendis eveniet! Fuga, mollitia.</BoxParagraph>
                        <BoxActionButton>Explore</BoxActionButton>
                    </BoxContent>
                    <BoxContent>
                        <SubHeading>About</SubHeading>
                        <BoxParagraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consequatur illum odit! Molestias libero fuga facilis numquam ducimus quibusdam eius! Ratione, non officiis ducimus ab praesentium perferendis eveniet! Fuga, mollitia. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consequatur illum odit! Molestias libero fuga facilis numquam ducimus quibusdam eius! Ratione, non officiis ducimus ab praesentium perferendis eveniet! Fuga, mollitia.</BoxParagraph>
                        <BoxActionButton>Explore</BoxActionButton>
                    </BoxContent>
                    <BoxContent>
                        <SubHeading>Contacts</SubHeading>
                        <BoxParagraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consequatur illum odit! Molestias libero fuga facilis numquam ducimus quibusdam eius! Ratione, non officiis ducimus ab praesentium perferendis eveniet! Fuga, mollitia. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consequatur illum odit! Molestias libero fuga facilis numquam ducimus quibusdam eius! Ratione, non officiis ducimus ab praesentium perferendis eveniet! Fuga, mollitia.</BoxParagraph>
                        <BoxActionButton>Explore</BoxActionButton>
                    </BoxContent>
                </BoxContainer>
            </SecondContainer>
        </FirstContainer>
    );
}

export default BirthDay;

const FirstContainer = styled.div`
`;
const InContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    max-width: 1360px;
    background: linear-gradient(95deg, rgb(0 255 102 / 69%), rgb(0 255 102 / 59%), rgb(0 255 102 / 79%), rgb(0 255 102 / 99%)); 
`;
const Content = styled.div`
    text-align: center;
    padding: 20% 2% 10%;
`;
const Heading = styled.h1`
    font-size: 38px;
    font-weight: 900;
    margin-bottom: 20px;
    color: #000k;
`;
const Paragraph = styled.p`
    font-size: 19px;
    margin: 0 auto;
    font-weight: 500;
    margin-bottom: 30px;
    color: #f9f9f9;
    width: 1200px;
`;
const ActionButton = styled.button`
    display: inline-block;
    color: #111;
    cursor: pointer;
    background: #f2f3f4;
    padding: 1.5% 5%;
    border-radius: 8px;
    font-size: 22px;
`;
const SecondContainer = styled.div`
    backgroung: #fff;
    padding: 6% 2%;
`;
const BoxHeading = styled.h2`
    text-align: center;
    font-size: 36px;
    margin-bottom: 90px;
    font-weight: bold;
`;
const BoxContainer = styled.div`
    display: flex;
    align-items: center;
`;
const BoxContent = styled.div`
    margin: 0px 10px;
    &:hover {
        background: rgb(153 153 153 / 8%);
        transition: all .2s ease-in;
    }
    border-radius: 6px;
    padding: 3%;
    cursor: default;
`;
const SubHeading = styled.h3`
    font-size: 24px;
    margin-bottom: 18px;
    font-weight: 700;
`;
const BoxParagraph = styled.p`
    font-size: 16px;
    margin-bottom: 20px;
`;
const BoxActionButton = styled.a`
    cursor: pointer;
    display: inline-block;
    color: #fff;
    background: rgb(0 255 102 / 69%);
    font-size: 19px;
    padding: 2% 0%;
    text-align: center;
    border-radius: 6px;
    width: 320px;
`;