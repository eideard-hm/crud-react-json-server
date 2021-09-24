import { Form } from "react-bootstrap"

const FormNewMotorcycle = ({ data, handleSubmit, handleChange }) => {
    return (
        <>
            <h1 className="text-center">Nueva Moto</h1>
            <Form
                onSubmit={handleSubmit}
            >
                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        name="reference"
                        placeholder="Referencia"
                        value={data.reference}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        name="model"
                        placeholder="Modelo"
                        value={data.model}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="number"
                        name="price"
                        placeholder="Precio"
                        value={data.price}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        name="image"
                        placeholder="URL de la imagen"
                        value={data.image}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <select
                        className="form-control"
                        name="trademark"
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled selected>Seleccione una opción</option>
                        <option value="YAMAHA">YAMAHA</option>
                        <option value="SUZUKI">SUZUKI</option>
                        <option value="HONDA">HONDA</option>
                    </select>
                </Form.Group>
                <button className="btn btn-success">Guardar</button>
            </Form>
        </>
    )
}

export default FormNewMotorcycle
