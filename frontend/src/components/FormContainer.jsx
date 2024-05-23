import { Container, Row, Col } from "react-bootstrap";
import { useForm, FormProvider } from "react-hook-form";
import Form from "react-bootstrap/Form";

const FormContainer = ({ children }) => {


  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <Container>
        <Row className="justify-content-md-center mt-5">
          <Col xs={12} md={6} className="card pt-5">
            {/* <Form onSubmit={methods.handleSubmit(onSubmit)}>
                {children}
            </Form> */}
            {children}
          </Col>
        </Row>
      </Container>
    </FormProvider >
  );
};

export default FormContainer;
