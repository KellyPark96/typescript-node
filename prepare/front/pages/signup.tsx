import AppLayout from "../components/AppLayout";
import {Button, Checkbox, Form, Input} from "antd";
import {useCallback, useState} from "react";
import useInput from "../hooks/useInput";
import styled from "styled-components";

const SignUp = () => {
    const [id, onChangeId] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [term, setTerm] = useState(false);
    const [termError, setTermError] = useState(false);
    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    }, [password]);

    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false);
    }, [password]);

    const onSubmit = useCallback(() => {
        if (password !== passwordCheck) {
            return setPasswordError(true);
        }

        if (!term) {
            return setTermError(true);
        }

        console.log(id);
    }, [password, passwordCheck, term]);

    return (
        <AppLayout>
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor="user-id">Id</label>
                    <br/>
                    <Input id="user-id" name="user-id" value={id} required onChange={onChangeId}/>
                </div>
                <div>
                    <label htmlFor="user-nickname">Nickname</label>
                    <br/>
                    <Input name="user-nickname" value={nickname} required onChange={onChangeNickname}/>
                </div>
                <div>
                    <label htmlFor="user-password">Password</label>
                    <br/>
                    <Input id="user-password" name="user-password" type="password" value={password} required
                           onChange={onChangePassword}/>
                </div>
                <div>
                    <label htmlFor="user-password-check">Password Check</label>
                    <br/>
                    <Input
                        id="user-password-check"
                        name="user-password-check"
                        type="password"
                        value={passwordCheck}
                        required
                        onChange={onChangePasswordCheck}
                    />
                    {passwordError && <ErrorMessage>Not match password.</ErrorMessage>}
                </div>
                <div>
                    <Checkbox name="user-term"
                              checked={term}
                              onChange={onChangeTerm}>
                        I agree this term.
                    </Checkbox>
                    {termError && <ErrorMessage>You need to agree this term.</ErrorMessage>}
                </div>
                <div style={{marginTop: 10}}>
                    <Button type="primary" htmlType="submit">Signup</Button>
                </div>
            </Form>
        </AppLayout>
    )
}

const ErrorMessage = styled.div`
  color: red;
`;

export default SignUp;