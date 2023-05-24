import { Container, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Hero = () => {
    return (
        <div className=' py-5'>
            <Container className='d-flex justify-content-center'>
                <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
                    <h1 className='text-center mb-4'>INVESTOPEDIA</h1>
                    <p className='text-center mb-4'> 'Welcome to our Investment Tutoring LMS, where you can master the art of investing and grow your wealth with confidence. Our platform offers comprehensive courses, personalized guidance, the instructors are topnotch and the support is outstanding'</p>
                    <div className='d-flex'>
                        <LinkContainer to='/login'>
                            <Button variant='primary' className='me-3'>
                                Sign In
                            </Button>
                        </LinkContainer>
                        <LinkContainer to='/register'>
                            <Button variant='secondary' className='me-3'>
                                Sign Up
                            </Button>
                        </LinkContainer>

                    </div>
                </Card>
            </Container>
        </div>
    );
};


export default Hero;