import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function VanList () {
    const [vans, setVans] = useState([])
    useEffect(() => {
        fetch('/api/vans')
            .then(res => res.json())
            .then((data) => {
                setVans([...data.vans])
        })
    }, [])
    return (
        <div>
            { vans ?
                <div>
                    {
                    vans.map((van) => {
                        const { id, name } = van;
                        return (
                            <Link to={`/van/${id}`} key={id}>
                                <h3 style={{color: "grey"}}>
                                    {name}
                                </h3>
                            </Link>

                        )
                    })
                }
                </div>
                :
                <p> Loading... </p>

            }
        </div>
    )
}