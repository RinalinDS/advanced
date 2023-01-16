import React, {ChangeEvent, FC, useState} from 'react';
import {Button, Form, Input} from "antd";
import {rules} from "../utils/rules";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

export const LoginForm: FC = () => {
    const {login} = useActions()
    const {isLoading, error} = useTypedSelector(state => state.auth)
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const passwordChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const usernameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const onFormSubmit = () => {
        login(username, password)
    }
    return (
        <Form onFinish={onFormSubmit}>
            {error && <div style={{color: 'red'}}>{error} </div>}
            <Form.Item
                label="User name"
                name="username"
                rules={[rules.required('Please input your username!')]}
            >
                <Input
                    value={username}
                    onChange={usernameChangeHandler}
                />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[rules.required('Please input your username!')]}
            >
                <Input.Password
                    value={password}
                    onChange={passwordChangeHandler}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Login
                </Button>
            </Form.Item>
        </Form>
    )
        ;
};

