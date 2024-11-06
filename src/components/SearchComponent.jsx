import { Container, Row } from "react-bootstrap"
import ItemComponent from "./ItemComponent"
import { useEffect, useState } from "react"

function SearchComponent({keywords}){
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch(import.meta.env.VITE_DOMAIN_API + "search/movie?api_key=" + import.meta.env.VITE_API_KEY + "&include_adult=false&language=" + import.meta.env.VITE_API_LANG + "&page=1&query=" + keywords)
            .then((res) => {
                return res.json();
            })
            .then((data) => {             
                setItem(data.results)
            })
    },[keywords]);

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
export default SearchComponent