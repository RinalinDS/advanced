import React from 'react';
import {Layout, Menu, Row} from 'antd';
import {useNavigate} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {RouteNames} from "../routes";
import {useActions} from "../hooks/useActions";


export const NavBar: React.FC = () => {
    const {Header} = Layout;
    const navigate = useNavigate()
    const {logout} = useActions()

    const {isAuth, user} = useTypedSelector(state => state.auth)
    const navigateToLogin = () => navigate(RouteNames.LOGIN)

    return (
        <Layout>
            <Header className="header">
                <Row justify={'end'}>
                    <div style={{color: 'white'}}>{user.username}</div>
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        {isAuth ?
                            <Menu.Item key={1} onClick={logout}>Logout</Menu.Item>
                            :
                            <Menu.Item key={1} onClick={navigateToLogin}>Login</Menu.Item>
                        }
                    </Menu>
                </Row>
            </Header>
        </Layout>
    );
};
