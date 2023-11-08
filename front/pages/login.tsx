import { Layout } from 'antd';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <Layout style={{ 
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#fff", 
        width: "40em",
        height: '100vh',
        margin: "0 auto",
         }}>
      <LoginForm/>
    </Layout>
  );
};

export default Login;
