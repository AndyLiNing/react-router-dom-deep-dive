import { Fragment } from 'react';

import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <Fragment>
            <Link to='/'> Home</Link> <br/>
            <Link to='/host'> Host</Link> <br/>
            <Link to='/van-list'> Vans</Link> <br/>
        </Fragment>
    )
}