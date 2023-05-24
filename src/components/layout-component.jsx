import { Fragment } from 'react';

import { Outlet } from 'react-router-dom';

import Header from './header.component';
import Footer from './footer.component';


export default function Layout() {
    return (
        <Fragment>
            <Header/>
                <main>
                    <Outlet/>
                </main>
            <Footer/>
        </Fragment>
    )
}
