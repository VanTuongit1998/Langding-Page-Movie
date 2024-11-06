import Carousel from 'react-bootstrap/Carousel';
import { SilderData } from "../data.js"
function SliderComponent(){
    return(
        <>
        <Carousel data-bs-theme="dark">
            
            {
              SilderData.map((value,key) => (
                <Carousel.Item key={key}>
                    <img
                    className="d-block w-100"
                    src={value.img}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h5>{value.title}</h5>
                    <p>{value.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
              ))         
            }
            
        </Carousel>
        </>
    )
}
export default SliderComponent