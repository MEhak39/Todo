import {useState} from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';


function Todo(props){
  const[modalIsOpen, setModalIsOpen] = useState(false);
    function handleDelete(){
        setModalIsOpen(true);
    }
    function closeModalHandler(){
      setModalIsOpen(false);
    }
    return (
        <div className="card">
          <h2>{props.text}</h2>

          <div className="actions">
            <button className="btn" onClick={handleDelete}>Delete</button>
          </div>
          {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={close}/>}
          {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}
           
        </div>  
        
     
    );
}
export default Todo;

