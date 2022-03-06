import { Form, Button } from 'react-bootstrap'

function UserInput(props) {

    return (
        <Form onSubmit={props.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>weather search</Form.Label>
                <Form.Control type="text" placeholder="" onChange={props.handleChange} />
                <Form.Text className="text-muted">
                    Please enter an address or city
                </Form.Text>
            </Form.Group>
            <Button variant="secondary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default UserInput
