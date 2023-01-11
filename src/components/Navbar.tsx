import React from 'react';
import {Layout, Menu, Row} from 'antd';
import {useNavigate} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {RouteNames} from "../routes";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";

const {Header} = Layout;

export const NavBar: React.FC = () => {
    const navigate = useNavigate()

    const {isAuth, user} = useTypedSelector(state => state.auth)

    const dispatch = useAppDispatch()
    const logoutHandler = () => dispatch(AuthActionCreators.logout())

    return (
        <Layout>
            <Header className="header">
                <Row justify={'end'}>
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        {isAuth ?
                            <>
                                <div>{user.username}</div>
                                <Menu.Item key={1} onClick={logoutHandler}>Logout</Menu.Item>
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
