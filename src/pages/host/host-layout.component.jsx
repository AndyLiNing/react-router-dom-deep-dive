import { Link, Outlet } from 'react-router-dom';
import { Fragment } from 'react';

export default function HostLayout() {
    return (
        <Fragment>
            <nav>
                <Link to='/host'> Dashboard </Link>
                <Link to='/host/income'> Icome </Link>
                <Link to='/host/review'> Review </Link>
            </nav>
            <Outlet/>
        </Fragment>


    )
}