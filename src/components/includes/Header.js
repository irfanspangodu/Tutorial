import React from "react";
import styled from "styled-components";

function Header() {
    return (
        <>
            <HeaderContainer>
                <LeftBox>
                    <LogoContainer>
                        Tutorial
                    </LogoContainer>
                </LeftBox>

            </HeaderContainer>
        </>
    );
};

const HeaderContainer = styled.div``;
const LeftBox = styled.h1``;
const LogoContainer = styled.a``;

export default Header;
