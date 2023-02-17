import React, {Component} from 'react';

class Gif extends Component {
    constructor(props){
      super(props);
      this.state ={
        gif : ""
      }
    }
  
    apiCall (url, handler){
      fetch(url)
      .then(res=>res.json())
      .then(data=>handler(data))
      .catch (error=> console.log(error))
    }
  
    traerGifNuevo(){
      this.apiCall(
        "https://api.giphy.com/v1/gifs/random?api_key=YDXY8OLcEUp1OjjUSr1vHCinArNyLiv7&tag=&rating=g",
        this.mostrarGif)
    }
    
    componentDidMount(){
      console.log("Montado!");
      this.traerGifNuevo()
    }
  
    mostrarGif= (data)=> {
      this.setState(
        {
          gif: data.data.url
        }
      )
    }
  
    componentDidUpdate(){
      console.log("Actualizado!");
    }
  
    render(){
      let contenido;
      if (this.state.gif === ""){
        contenido = <p>Cargando...</p>
      }
      else{
        contenido= <img src={this.state.gif} alt="Gif Random" />
      }
  
      return(
        <div>
          {contenido}
          <button onClick={()=>this.traerGifNuevo()}>Random Gif!</button>
        </div>
      )
    }
  }
  export default Gif;