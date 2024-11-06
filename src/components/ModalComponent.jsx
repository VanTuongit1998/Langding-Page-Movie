import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function ModalComponent({show, handleOnClickHide, dataId}){
    const [data, setData] = useState({})
    const [actor, setActor] = useState([])

    useEffect(()=>{
        fetch(import.meta.env.VITE_DOMAIN_API + "movie/" + dataId + "?api_key=" + import.meta.env.VITE_API_KEY + "&append_to_response=videos")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setData(data)
        })


        fetch(import.meta.env.VITE_DOMAIN_API + "movie/" + dataId + "/casts?api_key=" + import.meta.env.VITE_API_KEY)
        .then((actor) => {
            return actor.json()
        })
        .then((actor) => {
            setActor(actor.cast.slice(0,10))
        })
    },[dataId])

    return (
        <>
        <Modal show={show}>
            <Modal.Header closeButton onClick={handleOnClickHide}>
                <Modal.Title id="contained-modal-title-vcenter">
                    Detail Movie
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{data.title}</h4>
                <p>{data.overview}</p>
                <ul>
                    {
                        actor.map((value, key) => (
                            <li key={key}>{value.original_name} - {value.character}</li>
                        ))
                    }
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleOnClickHide}>Close</Button>
            </Modal.Footer>
        </Modal>
        </>
        
    )
}
export default ModalComponent