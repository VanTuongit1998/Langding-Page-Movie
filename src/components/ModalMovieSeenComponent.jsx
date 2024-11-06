import { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../utils/AppContext';
import { ListGroup } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { TbTrash } from 'react-icons/tb';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ModalMovieSeenComponent({lgShow,setLgShow}){
    const {history,setHistory} = useContext(Context)
    const DeleteMovieSeen =(idMovie)=>{
        if(idMovie > -1){
            setHistory((current) => current.filter((v,k) => k !== idMovie))
            toast("Delete movie seen successfully")
        }
    }
    return(
        <>
        
        <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg">
            <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
                Large Modal
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <ListGroup as="ol" numbered>
                {
                    history.length > 0 ?  
                    history.map((value, key) => (
                        <ListGroup.Item key={key} as="li"className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">{value.title}</div>
                        <p>{value.overview}</p>
                        <p>Release date: {value.release_date}</p>
                        </div>
                        <Badge bg="danger" style={{cursor:"pointer"}} onClick={() => DeleteMovieSeen(key)}>
                            <TbTrash />
                        </Badge>
                    </ListGroup.Item>
                    ))                   
                    : "Bạn chưa xem gì cả trong website :)"
                }

                </ListGroup>
            </Modal.Body>
            
        </Modal>
        <ToastContainer />
        </>
    )
}
export default ModalMovieSeenComponent