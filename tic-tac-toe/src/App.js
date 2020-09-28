import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    field: [null, null, null, null, null, null, null, null, null],
    counter: 0,
  }


  onClick = (event) => {
    const sqrNumber = event.target.getAttribute('data');
    const fieldCopy = this.state.field.slice(0);
    
    if (fieldCopy[sqrNumber] === null){
      this.state.counter % 2 === 0 ? fieldCopy[sqrNumber] = 'X' : fieldCopy[sqrNumber] = 'O';

      this.setState({
        field: fieldCopy,
        counter: this.state.counter + 1,
      })
    } else {
      alert ('выбери своободное поле');
    }   
  }

  isWinner = () => {
    let isWinner = false;
    const winCombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winCombination.length; i++) {
      if (this.state.field[winCombination[i][0]] === 'X'
          && this.state.field[winCombination[i][1]] === 'X'
          && this.state.field[winCombination[i][2]] === 'X') {
            isWinner = true;
            setTimeout((() => alert('Победил игрок X')), 10);
            setTimeout((() => this.setState({
              field: [null, null, null, null, null, null, null, null, null],
              counter: 0,
            })), 10)
            break
          } else if (this.state.field[winCombination[i][0]] === 'O'
            && this.state.field[winCombination[i][1]] === 'O'
            && this.state.field[winCombination[i][2]] === 'O') {
              isWinner = true;
              setTimeout((() => alert('Победил игрок О')), 10);
              setTimeout((() => this.setState({
                field: [null, null, null, null, null, null, null, null, null],
                counter: 0,
              })), 10)
              break
            }
    }
    if (!this.state.field.includes(null) && isWinner === false){
      setTimeout((() => alert('Ничья!')), 10);
      setTimeout((() => this.setState({
        field: [null, null, null, null, null, null, null, null, null],
        counter: 0,
      })), 10)
    }
  }  

  componentDidUpdate(){
    this.isWinner(); 
  }







render () {
  let counterForData = 0;

  return (   
    <> 
    <h1 className='title'>Tic-tac-toe</h1>
    <div className='field'>

      {this.state.field.map((sqr) => <div className='sqr' data={counterForData++} onClick={this.onClick} key={Math.random()}>{sqr}</div>)}

    </div>
    </>
  );
}

}


export default App;