import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ModalMovieSeenComponent from './ModalMovieSeenComponent';

function NavbarComponent({handleGenreId}){
    const [genre, setGenre] = useState([])
    const [lgShow, setLgShow] = useState(false)
    useEffect(()=>{
        fetch(import.meta.env.VITE_DOMAIN_API + "genre/movie/list?api_key=" + import.meta.env.VITE_API_KEY + "&language=" + import.meta.env.VITE_API_LANG)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setGenre(data.genres.slice(0,14)) 
            })
        },[])

    const handleOnclick = (id) => {
        handleGenreId(id)
    }
    return(
        <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
            <Navbar.Brand href="#" onClick={() => handleOnclick("home")}>Home</Navbar.Brand>
            <Nav className="me-auto">
                {
                    genre.map((value, key)=>(
                        <Nav.Link href="#" key={key} onClick={() => handleOnclick(value.id)}>{value.name}</Nav.Link>
                    ))
                }
                <button variant="primary" onClick={() => setLgShow(true)}>Movie seen</button>
            </Nav>
            </Container>
        </Navbar>
        <ModalMovieSeenComponent lgShow={lgShow} setLgShow={setLgShow} />
        </>
    )
}
export default NavbarComponent