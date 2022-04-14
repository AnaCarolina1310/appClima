import {useState} from 'react'
import { WeatherCard } from '../WeatherCard/WeatherCard'
import { WeatherForm } from '../WeatherForm/WeatherForm'

export const WeatherInfo=()=>{
 const[lugar, setLugar]=useState('')
 const[clima, setClima]= useState(null)
    
 const key = '9d86c07be2e4308a2522dd23d9d7b2f8'
 const url =`https://api.openweathermap.org/data/2.5/weather?q=${lugar}&appid=${key}&lang=es`
    
    const definirLugar = ()=>{
        fetch(url)
        .then((resp)=>resp.json())
        .then((data)=>{setClima({
            nombre: data.name,
            coordenadas: data.coord.lon,
            temperatura : data.main.temp,
            descripcion: data.weather[0].description,
            humedad: data.main.humidity,
            tempMin: data.main.temp_min,
            tempMax: data.main.temp_max
        })
        } )
        
    }
  const volver = ()=>{
      setClima(null)
      setLugar('')
  }
    return(
    <>
        <div className='container fondo' style={{display: 'flex', justifyContent:'center'}}>
            <div className='row' style={{paddingTop:'150px'}} >
              {clima === null?
                <WeatherForm paisForm={lugar} setPaisForm={setLugar} seleccionPais={definirLugar}/>
               :<WeatherCard nombre={clima.nombre} min={clima.tempMin} max={clima.tempMax} humedad={clima.humedad} temperatura={clima.temperatura} descripcion={clima.descripcion} volver={volver}/>}       
            </div>
        </div>
    </>
    
    )
}