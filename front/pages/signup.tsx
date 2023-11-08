import AppLayout from '../components/AppLayout';
import { Button, Checkbox, Form, Input, Layout } from 'antd';
import { useCallback, useState } from 'react';
import useInput from '../hooks/useInput';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { IReducerState } from '../reducers';
import { SIGN_UP_REQUEST } from '../reducers/user';
import { useRouter } from 'next/router';

const SignUp = () => {
  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);

  const dispatch = useDispatch();
  const { signUpLoading, me } = useSelector((state: IReducerState) => state.user);
  const router = useRouter();
  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  const onChangeTerm = useCallback(
    (e) => {
      setTerm(e.target.checked);
      setTermError(false);
    },
    [password]
  );

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    if (!term) {
      return setTermError(true);
    }

    // eslint-disable-next-line no-unreachable
    console.log(email, password, passwordCheck, term);

    router.push("/");
    return dispatch({
      type: SIGN_UP_REQUEST,
      data: {
        email,
        password,
        nickname,
      },
    });

  }, [email, password, passwordCheck, term]);

  return (
    <Layout style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
      width: "40em",
      height: '100vh',
      margin: "0 auto",
    }}>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-email">Email</label>
          <br />
          <Input
            id="user-email"
            name="user-email"
            type="email"
            value={email}
            required
            onChange={onChangeEmail}
          />
        </div>
        <div>
          <label htmlFor="user-nickname">Nickname</label>
          <br />
          <Input name="user-nickname" value={nickname} required onChange={onChangeNickname} />
        </div>
        <div>
          <label htmlFor="user-password">Password</label>
          <br />
          <Input
            id="user-password"
            name="user-password"
            type="password"
            value={password}
            autoComplete="off"
            required
            onChange={onChangePassword}
          />
        </div>
        <div>
          <label htmlFor="user-password-check">Password Check</label>
          <br />
          <Input
            id="user-password-check"
            name="user-password-check"
            type="password"
            value={passwordCheck}
            autoComplete="off"
            required
            onChange={onChangePasswordCheck}
          />
          {passwordError && <ErrorMessage>Not match password.</ErrorMessage>}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
            I agree this term.
          </Checkbox>
          {termError && <ErrorMessage>You need to agree this term.</ErrorMessage>}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit" loading={signUpLoading}>
            Signup
          </Button>
        </div>
      </Form>
    </Layout>
  );
};

const ErrorMessage = styled.div`
  color: red;
`;

export default SignUp;
