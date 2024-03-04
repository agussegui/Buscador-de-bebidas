import {Modal, Image} from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

const ModalBebida = () => {

    const {modal, handleModalClick, receta, setReceta} = useBebidas()

    const mostrarIngredientes = () => {
        //filtrar los ingredientes
        let ingredientes = []

        for(let i = 1; i < 16; i++){
            //compruebo si tiene un valor
            if(receta[`strIngredient${i}`]){
                //en el state no se cambia el valor de las variables pero como no tengo state lo hago asi
                ingredientes.push(
                    <li>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredientes
    }

  return (
    <Modal
        show={modal}
        //Cambiar de valor de true a false el modal
        onHide={() => {
            handleModalClick()
            setReceta({})
        }}
    >
        <Image 
            src={receta.strDrinkThumb}
            alt={`Imagen receta ${receta.strDrinkThumb}`}
        />    
        <Modal.Header>
            <Modal.Title>{receta.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="p-3">
                <h2>Instrucciones</h2>
                {receta.strInstructions}
                <h2>Ingredientes y Cantidades</h2>
                {mostrarIngredientes()}
            </div>
        </Modal.Body>    
    </Modal>
  )
}

export default ModalBebida