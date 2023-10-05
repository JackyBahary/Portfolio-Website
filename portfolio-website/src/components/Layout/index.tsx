import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';
import { FC } from 'react';

const Layout: FC = () => {
    return (
        <div className='App'>
            <Sidebar/>
            <div className='page'>
                <span className='tags tags__top'>
                    <span className='tags__top--html'>&lt;html&gt;</span>
                    <br />
                    &lt;body&gt;
                </span>

                <Outlet />

                <span className='tags tags__bottom'>
                    &lt;/body&gt;
                    <br />
                    <span className='tags__bottom--html'>&lt;/html&gt;</span>
                </span>
            </div>
        </div>
    )
}

export default Layout