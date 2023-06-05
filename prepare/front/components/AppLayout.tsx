import {ReactNode, useState} from "react";
import {Col, Input, Menu, Row} from "antd";
import Link from "next/link";
import styled from "styled-components";

import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";

type LayoutProps = {
    children: ReactNode;
}

const AppLayout = ({children}: LayoutProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/">Home</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile">Profile</Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton/>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup">SignUp</Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn}/> :
                        <LoginForm setIsLoggedIn={setIsLoggedIn}/>}
                </Col>
                <Col xs={24} md={12}>{children}</Col>
                <Col xs={24} md={6}>
                    <a href="https://github.com/KellyPark96"
                       target="_blank"
                       rel="noreferrer noopener">
                        Github
                    </a>
                </Col>
            </Row>
        </div>
    )
}

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

export default AppLayout;