import React from 'react';
import {AppRouter} from "./components/AppRouter";
import {NavBar} from "./components/Navbar";
import {Layout} from "antd";

export const App = () => {
    return (
        <Layout>
            <NavBar/>
            <Layout.Content>
                <AppRouter/>
            </Layout.Content>
        </Layout>
    );
}

