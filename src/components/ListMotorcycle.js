import { useEffect, useState } from 'react'

import axios from "axios";
import CardMotorcycle from './CardMotorcycle';
import { Container } from 'react-bootstrap';

const ListMotorcycle = () => {

    const [motorcycle, setMotorcycle] = useState([])

    const url = 'http://localhost:3004/motorcycles';

    const getData = async () => {
        try {
            return await axios.get(url);
        } catch (error) {
            console.error(`Ha ocurrido un error ${error}`);
        }
    }

    useEffect(() => {
        getData()
            .then(({ data }) => setMotorcycle(data));
    }, [])

    return (
        <>
            <Container className="d-flex justify-content-around flex-wrap  gap-3">
                {
                    motorcycle.map((item, i) => <CardMotorcycle motocycle={item} key={i} />)
                }
            </Container>
        </>
    )
}

export default ListMotorcycle
