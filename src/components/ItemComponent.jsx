import { Button, Card, Col} from "react-bootstrap"
import { useContext } from "react";
import { Context } from "../utils/AppContext";
function ItemComponent({value}){
    const ImgItem = () => {
        const link = value.poster_path == null ? "https://cdn.browshot.com/static/images/not-found.png" : "https://image.tmdb.org/t/p/original" + value.poster_path;
    return <Card.Img variant="top" src={link} />
    }
    const {setModal, setDataId, history, setHistory} = useContext(Context)
    const handleOnClick = () => {
        setModal(true)
        setDataId(value.id)
        if(!history.includes(value)){
            setHistory((current) => [... current, value])
        }
    }
    return(
        <Col sm={3} className="mb-3">
                <Card style={{ width: '18rem' }}>
                <ImgItem />
                <Card.Body>
                    <Card.Title>{value.original_title}</Card.Title>
                    <Card.Text>{value.release_date}</Card.Text>                   
                    <Button variant="primary" onClick={handleOnClick}>Xem chi tiết</Button>
                </Card.Body>
                </Card>
        </Col>
    )
}
export default ItemComponent