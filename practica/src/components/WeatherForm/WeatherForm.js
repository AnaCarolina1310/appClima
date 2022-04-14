import { Form, Button, Col } from "react-bootstrap"


export const WeatherForm = ({paisForm, setPaisForm, seleccionPais}) =>{
    
    return(
     <Col>
        <Form style={{paddingTop: '70px'}}>
           <Form.Control className='my-4' type='text' 
             name='pais' 
             placeholder='¿Como esta el clima en...?'
             value={paisForm}
             onChange={(e)=>setPaisForm(e.target.value)}/>
           <Button onClick={seleccionPais} style={{width:'100%'}}>enviar</Button>    
        </Form>
     </Col>   
    )
}