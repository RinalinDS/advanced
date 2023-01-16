import React, {useEffect} from 'react';
import {AppRouter} from "./components/AppRouter";
import {NavBar} from "./components/Navbar";
import {Layout} from "antd";
import {useActions} from "./hooks/useActions";
import {IUser} from "./models/IUser";

export const App = () => {
    const {setUser, setIsAuth} = useActions()
    useEffect(() => {
        const isAuth = localStorage.getItem('auth')
        if (isAuth) {
            setUser({username: localStorage.getItem('username' || '')} as IUser)
            setIsAuth(true);
        }
    }, [])
    return (
        <Layout>
            <NavBar/>
            <Layout.Content>
                <AppRouter/>
            </Layout.Content>
        </Layout>
    );
}

