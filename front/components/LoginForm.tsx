import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import { useCallback } from 'react';
import useInput from '../hooks/useInput';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequestAction } from '../reducers/user';
import { IReducerState } from '../reducers';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { logInLoading } = useSelector((state: IReducerState) => state.user);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmitForm = useCallback(() => {
    dispatch(loginRequestAction({ email, password }));
  }, [email, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div style={{ padding: '18px 20px' }}>
        <label htmlFor="user-email">Email</label>
        <br />
        <Input name="user-email" value={email} onChange={onChangeEmail} required />
      </div>
      <div style={{ padding: '18px 20px' }}>
        <label htmlFor="user-password">Password</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          autoComplete="off"
          required
        />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={logInLoading}>
          Login
        </Button>
        <Link href="/signup">
          <Button>Signup</Button>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 18px 20px;
`;

const FormWrapper = styled(Form)`
  margin: 0 4%;
`;

export default LoginForm;
