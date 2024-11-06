import { Container, Row } from "react-bootstrap"
import ItemComponent from "./ItemComponent"
import { useEffect, useState } from "react"

function GenreComponent({genre}){
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch(import.meta.env.VITE_DOMAIN_API + "discover/movie?api_key=" + import.meta.env.VITE_API_KEY + "&with_genres=" + genre)
            .then((res) => {
                return res.json();
            })
            .then((data) => {             
                setItem(data.results)
            })
    },[genre]);

    return (
        <>
        <Container>
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
export default GenreComponent