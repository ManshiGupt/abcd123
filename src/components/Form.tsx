// 'use client'
// import React, { useEffect, useState } from 'react';
// import { LockOutlined, UserOutlined } from '@ant-design/icons';
// import { Button, Form, Input, AutoComplete } from 'antd';

// const App: React.FC = () => {
//   const [form] = Form.useForm();
//   const [clientReady, setClientReady] = useState<boolean>(false);
//   const [suggestions, setSuggestions] = useState<string[]>([]);
  
//   // To disable submit button at the beginning.
//   useEffect(() => {
//     setClientReady(true);
//   }, []);

//   const onFinish = (values: any) => {
//     console.log('Finish:', values);
//   };

//   const handleSearch = (value: string) => {
//     if (value) {
//       setSuggestions([value, value + "123", value + "456"]);
//     } else {
//       setSuggestions([]);
//     }
//   };

//   return (
//     <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
//       <Form.Item
//         name="username"
//         rules={[{ required: true, message: 'Please input your username!' }]}
//       >
//         <AutoComplete
//           options={suggestions.map(suggestion => ({ value: suggestion }))}
//           onSearch={handleSearch}
//         >
//           <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
//         </AutoComplete>
//       </Form.Item>
//       <Form.Item
//         name="password"
//         rules={[{ required: true, message: 'Please input your password!' }]}
//       >
//         <Input
//           prefix={<LockOutlined className="site-form-item-icon" />}
//           type="password"
//           placeholder="Password"
//         />
//       </Form.Item>
//       <Form.Item shouldUpdate>
//         {() => (
//           <Button
//             type="primary"
//             htmlType="submit"
//             disabled={
//               !clientReady ||
//               !form.isFieldsTouched(true) ||
//               !!form.getFieldsError().filter(({ errors }) => errors.length).length
//             }
//           >
//             Log in
//           </Button>
//         )}
//       </Form.Item>
//     </Form>
//   );
// };

// export default App;
