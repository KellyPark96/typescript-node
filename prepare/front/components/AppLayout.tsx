import {ReactNode} from "react";
import {Col, Input, Menu, Row} from "antd";
import Link from "next/link";

type LayoutProps = {
    children: ReactNode;
}

const AppLayout = ({children}: LayoutProps) => {
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
                    <Input.Search enterButton style={{
                        verticalAlign: 'middle'
                    }}/>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup">SignUp</Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>왼쪽메뉴</Col>
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

export default AppLayout;