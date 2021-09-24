import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";
import { Container } from "react-bootstrap";
import FormNewMotorcycle from "../components/FormNewMotorcycle";

const NewMotorcyclePage = () => {

    const history = useHistory();

    const [data, setData] = useState({ trademark: "", model: "", reference: "", price: "", image: "" })

    const handleChange = ({ target }) => {
        setData({
            ...data,
            [target.name]: target.value
        })
    }

    const URL = "http://localhost:3004/motorcycles"

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(URL, data);
        if (response.status === 201) {
            Swal.fire(
                'Guardado!',
                `El registro ${response.data.reference} ha sido guardado exitosamente!`,
                'success'
            )
            history.push('/')
        } else {
            Swal.fire(
                'Error!',
                'Hubo un problema al crear el registro!',
                'error'
            )
        }
    }

    return (
        <Container>
            <FormNewMotorcycle data={data} handleSubmit={handleSubmit} handleChange={handleChange} />
        </Container>
    )
}


export default NewMotorcyclePage
