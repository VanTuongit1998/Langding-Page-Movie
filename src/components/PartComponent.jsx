import { Badge,Container, Row } from "react-bootstrap"
import ItemComponent from "./ItemComponent"
import { useEffect, useState } from "react"

function PartComponent({api, title}){
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch(api)
            .then((res) => {
                return res.json();
            })
            .then((data) => {             
                setItem(data.results.slice(0,8))
            })
    },[]);
    return(
        <>
            <Container>
                <h1>
                    <Badge bg="secondary">{title}</Badge>
                </h1>
                <Row>
                    {
                        item.map((value, key) => (
                            <ItemComponent value={value} key={key} />
                        ))
                    }
                    
                </Row>            
            </Container>
            
            
        </>
    )
}
export default PartComponent