import React, {PureComponent} from 'react'

import Pessoa from '../Pessoa/Pessoa'


class Pessoas extends PureComponent {
   
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Pessoas.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Pessoas.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[Pessoas.js] componentWillUnmount');
  }

    render() {
      console.log('[Pessoas.js] rendering...');
      return  (this.props.pessoas.map((pessoa, index) => {
        return (
        <Pessoa 
          click={() => this.props.clicked(index)}
          nome={pessoa.nome} 
          idade={pessoa.idade}
          key={pessoa.id}
          changed={(event) => this.props.changed(event, pessoa.id)}/>
        )
      })
      
    )
  }   
}

export default Pessoas;