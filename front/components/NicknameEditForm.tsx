import { Form, Input } from 'antd';
import styled from 'styled-components';

const NicknameEditForm = () => {
  return (
    <NicknameEditFormWrapper>
      <Input.Search addonBefore="Nickname" enterButton="Edit" />
    </NicknameEditFormWrapper>
  );
};

const NicknameEditFormWrapper = styled(Form)`
  margin-bottom: 20px;
  border: 1px solid #d9d9d9;
  padding: 20px;
`;

export default NicknameEditForm;
