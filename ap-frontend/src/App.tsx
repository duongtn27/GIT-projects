// // // import {Header, Footer} from '../components/header.tsx'
// // // import Footer from '../components/footer.tsx'
// // import S from '../components/header.tsx'
// import Header from '../components/header.tsx'
// import Footer from '../components/footer.tsx'

// function App() {
//   const name = "LMAO";
//   const catName = ["1","2","3"];
//   return (
//     <>
//       {/* <S.Header /> 
//       <S.Footer /> */}
//       <Header catname = {catName} />
//       <h1>Header HELLO {name} </h1>
//       <Footer />
//       <h1>Footer HELLO {name} </h1>
//     </>
//   )
// }

// export default App

import { Form, Input, Button } from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';

function App() {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  return (
    <>
      <Form
        name="login"
        initialValues={{ remember: true }}
        style={{ maxWidth: 360 }}
        onFinish={onFinish}>

        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Log in
          </Button>
          or <a href="">Register now!</a>
        </Form.Item>

      </Form>
    </>
  )
}
export default App;