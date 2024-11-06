import { Container, Form, Row } from "react-bootstrap"
import NavbarComponent from "../components/NavbarComponent"
import SliderComponent from "../components/SilderComponent"
import PartComponent from "../components/PartComponent"
import {ListDataHomePage} from "../data.js"
import { useCallback, useContext, useEffect, useState } from "react"
import GenreComponent from "../components/GenreComponent.jsx"
import SearchComponent from "../components/SearchComponent.jsx"
import { Context } from "../utils/AppContext.jsx"
import ModalComponent from "../components/ModalComponent.jsx"
function MovieComponent(){
    const [genre, setGenre] = useState("")
    const [search, setSearch] = useState("")
    const [searchDebounce, setSearchDebounce] = useState("")
    const {modal, setModal, dataId} = useContext(Context)
    const handleGenreId = (id) => {   
        if (id == "home"){
            setGenre("")
        }else{
            setGenre(id)
        }
        setSearch("")
        setSearchDebounce("")
    }

    const RenderMovie = useCallback(() => {
        if(genre == "" && searchDebounce == ""){
            return ListDataHomePage.map((value,key) => (
                <PartComponent api={value.api} title={value.title} key={key} />
            ))
        } else {
            if(searchDebounce !== ""){
                return <SearchComponent keywords={searchDebounce} />
            }
            return <GenreComponent genre={genre} />
        }
    },[genre, searchDebounce]);
    useEffect(()=>{
        const debounceId = setTimeout(() => {
           setSearchDebounce(search) 
        }, 1000);
        return () => {
            clearTimeout(debounceId)
        }
    },[search])
    
    const handleOnchangeSearch =(e)=>{
        setSearch(e.target.value)
    }
    return(
        <>
            <SliderComponent />
            <NavbarComponent handleGenreId={handleGenreId}/>

            <Container className="mb-3 mt-3">
                <Row>
                    <Form.Control
                        type="text"
                        id="search"
                        value={search}
                        onChange={handleOnchangeSearch}
                        placeholder="Vui lòng nhập từ khóa..."
                    />
                </Row>
            </Container>
            <RenderMovie />
            { modal && <ModalComponent show={modal} handleOnClickHide={() => setModal(false)} dataId={dataId} />}
            
        </>
    )
}
export default MovieComponent