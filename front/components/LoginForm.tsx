import {Button, Form, Input} from "antd";
import Link from "next/link";
import {useCallback} from "react";
import useInput from "../hooks/useInput";
import styled from "styled-components";

const LoginForm = ({setIsLoggedIn}) => {
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');
    
    const onSubmitForm = useCallback((e) => {
        setIsLoggedIn(true);
    }, [id, password]);

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">Id</label>
                <br/>
                <Input name="user-id"
                       value={id}
                       onChange={onChangeId}
                       required
                />
            </div>
            <div>
                <label htmlFor="user-password">Password</label>
                <br/>
                <Input name="user-password"
                       type="password"
                       value={password}
                       onChange={onChangePassword}
                       required
                />
            </div>
            <ButtonWrapper>
                <Button type="primary"
                        htmlType="submit"
                        loading={false}>
                    Login
                </Button>
                <Link href="/signup"><Button>Signup</Button></Link>
            </ButtonWrapper>
        </FormWrapper>
    )
}

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

export default LoginForm;