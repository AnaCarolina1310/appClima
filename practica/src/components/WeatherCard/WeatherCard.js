import {Card , Col}from 'react-bootstrap'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import algunasNubes from '../../assets/img/algunasNubes.png'
import despejado from '../../assets/img/despejado.png'
import lluviasModeradas from '../../assets/img/lluviasModeradas.png'
import nuboso from '../../assets/img/nuboso.png'
import './weatherCard.css'

export const WeatherCard = ({nombre,humedad, temperatura, descripcion, volver, min , max}) =>{
    
 const definirImagen= ()=>{  
     if(descripcion ==='cielo claro' ){
        return despejado
    } else if (descripcion ==='nubes'|| 'muy nuboso'){
        return nuboso
    } else if (descripcion ==='lluvia moderada'){
        return lluviasModeradas
    } else if (descripcion === 'algo de nubes'){
        return algunasNubes
    } 
}
   
    return(
       <>
    <Col>
       <Card style={{ width: '18rem' }} className='cardWeather'>  
            <Card.Img variant="top"  src={definirImagen()}style={{ width: '40%' }} />
            <Card.Body >
                <Card.Title>{nombre}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush"style={{ textAlign:'center'}} >
                <ListGroupItem>{descripcion}</ListGroupItem>
                <ListGroupItem>Temperatura actual: {parseInt(temperatura -273.15)}° </ListGroupItem>
                <ListGroupItem>Max: {parseInt(max -273.15 )}°        Min: {parseInt(min -273.15)}°</ListGroupItem>
                <ListGroupItem>Humedad ambiente: {humedad}%</ListGroupItem>
        
            </ListGroup>
            <Card.Body>
            <button className='btn btn-primary' onClick={volver}>Volver</button>
            </Card.Body>
        </Card>
    </Col>  
       </>
    )
}

