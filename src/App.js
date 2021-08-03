import React, {Component} from 'react';
import biscoito from './assets/biscoito.png';
import Botao from './components/botao/botao';
import './estilo.css'

class App extends Component{
  
    constructor(props){
        super(props);
          this.state={
            textoFrase: ''
          }

          this.quebraBiscoito = this.quebraBiscoito.bind(this);

          this.frases = ['Siga os bons e aprenda com ele', 'O bom senso vale mais do que qualquer treinamento',
          'O sorriso é a menor distância entre duas pessoas', 'Deixe de lado as preocupações e seja feliz', 
          'Realize o óbvio, pense no improvável e conquiste o impossível', 'Acredite em milagres mas não dependa deles', 
          'A maior barreira para o sucesso é o medo do fracasso']
    }

    quebraBiscoito(){
      let state = this.state;
      let numeroAleatorio = Math.floor(Math.random() * this.frases.length)
      state.textoFrase = this.frases[numeroAleatorio]
      this.setState(state);
      
    }
  
    render(){
          return(
              <div className="container">
                  <img src={biscoito} alt="biscoito" className="img"/>
                  <Botao name="Quebrar Biscoito" acaoBtn={this.quebraBiscoito} />
                  <h3 className="texto-frase">"{this.state.textoFrase}"</h3>
              </div>
          )
      }
}

export default App;