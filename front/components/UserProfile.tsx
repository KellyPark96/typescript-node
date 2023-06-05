import {Avatar, Button, Card} from "antd";
import {useCallback} from "react";
import styled from "styled-components";

const UserProfile = ({setIsLoggedIn}) => {
    const onLogOut = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

    return (
        <Card actions={[
            <div key="twit">Twit</div>,
            <div key="following">Following</div>,
            <div key="follower">Follower</div>
        ]}>
            <Card.Meta avatar={<Avatar>ZC</Avatar>}
                       title="kelly"/>
            <LogOutButton onClick={onLogOut}>Logout</LogOutButton>
        </Card>
    )
}

const LogOutButton = styled(Button)`
  margin-top: 10px;
`;

export default UserProfile;