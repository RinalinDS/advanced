import React from 'react';
import {Layout, Menu, Row} from 'antd';
import {useNavigate} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {RouteNames} from "../routes";

const {Header} = Layout;

export const NavBar: React.FC = () => {
    const navigate = useNavigate()

    const {isAuth} = useTypedSelector(state => state.auth)


    return (
        <Layout>
            <Header className="header">
                <Row justify={'end'}>
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        {isAuth ?
                            <>
                                <div>Rinalin</div>
                                <Menu.Item key={1} onClick={() => console.log('LOGOUT')}>Logout</Menu.Item>
                            </>
                            :
                            <Menu.Item key={1} onClick={() => navigate(RouteNames.LOGIN)}>Login</Menu.Item>


                        }
                    </Menu>
                </Row>
            </Header>
        </Layout>
    );
};
