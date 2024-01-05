import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <Logo href="/">
        <img src="/images/logo.svg" alt="Tesla logo" width={120} height={15} />
      </Logo>
      <Menu>
        <Item>Vehicles</Item>
        <Item>Energy</Item>
        <Item>Charging</Item>
        <Item>Discover</Item>
        <Item>Shop</Item>
      </Menu>
      <RightMenu>
        <img
          src="/images/support.svg"
          alt="Tesla logo"
          width={34}
          height={34}
        />
        <img src="/images/region.svg" alt="Tesla logo" width={34} height={34} />
        <img src="/images/user.svg" alt="Tesla logo" width={34} height={34} />
      </RightMenu>
    </Container>
  );
}

const Container = styled.header`
  background-color: transparent;
  position: fixed;
  padding: 0 20px;
  min-height: 55px;
  width: 100%;
  display: flex;
  align-items: center;
`;

const Logo = styled.a`
  flex: 1;
`;

const Menu = styled.ol`
  display: flex;
  list-style-type: none;
`;

const RightMenu = styled.ol`
  display: flex;
  list-style-type: none;
  flex: 1;
  justify-content: flex-end;
  img {
    padding: 5px;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`;

const Item = styled.li`
  padding: 10px;
  font-size: 14px;
  color: rgba(23, 26, 32, 0.8);
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export default Header;
