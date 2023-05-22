import { useParams } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';

export default function Van () {
    const params = useParams();
    const id = params.id;
    const [van, setVan] = useState({});
    const { name, price, imageUrl } = van;
    useEffect(() => {
        fetch(`/api/vans/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setVan(data.vans);
        })
    },[id]);

    return (
        <div>
        { van &&
            <Fragment>
                <h5>
                    Name: { name }
                    <p>Price { price }</p>
                </h5>
                <img src={imageUrl} alt={name} />

            </Fragment>
        }
    </div>)
}