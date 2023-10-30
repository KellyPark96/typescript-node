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
  const { isLoggingIn } = useSelector((state: IReducerState) => state.user);
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmitForm = useCallback(() => {
    dispatch(loginRequestAction({ id, password }));
  }, [id, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">Id</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">Password</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={isLoggingIn}>
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
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

export default LoginForm;
