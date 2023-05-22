import { Fragment } from 'react';

import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <Fragment>
            <Link to='/'> Home</Link>
            <Link to='/host'> Host </Link>
            <Link to='/van-list'> Vans-List</Link>
        </Fragment>
    )
}