import React, {Component} from 'react';
import '../../estilo.css';

class Botao extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn} className="botao" >{this.props.name}</button>
            </div>
        )
    }
}

export default Botao;