import { Outlet } from 'react-router-dom'
import {NavBar } from '../components'

export const Main = () => (
    <div>
        <NavBar />
        <Outlet />
    </div>
);