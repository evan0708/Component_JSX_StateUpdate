import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Hello from './Hello';

// const todos = ['1', '2', '3'];

// class Todos extends React.Component {
//   render () {
//     // const list = [];
//     // for(let i = 0; i <this.props.message.length; i++) {
//     //   list.push(<li>{this.props.message[i]}</li>);
//     // }
//     //console.log(list);
//     return (
//       <ul>
//         {this.props.message.map((msg) => {
//           return (
//             <li>{msg}</li>
//           );
//         })}
//         <li>{this.props.children}</li>
//       </ul>
//     );
//   }
// }

//ReactDOM.render(<Todos message={todos}>{['one', 'two']}</Todos>, document.getElementById('root'));

// function App2() {
//   const props = { firstName: 'Ben', lastName: 'Hector' };
//   // return <Greeting firstName={props}
//   return <Greeting {...props} />;
// }

// class Greeting extends React.Component {
//   render () {
//     console.log(this.props);
//     return <div></div>
//   }
// }

// ReactDOM.render(<App2/>, document.getElementById('root'));

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {num: 0};
    this.onClick = this.onClick.bind(this);
  }
  onClick () {
    console.log('before setState:' + this.state.num);
    this.setState((prevState) => {
      console.log('callback 1: + state.num = ' + prevState.num);
      return {
        num: prevState.num + 1
      };
    });
    console.log('after setState:' + this.state.num);
    this.setState((prevState) => {
      console.log('callback 2: + state.num = ' + prevState.num);
      return {
        num: prevState.num + 1
      };
    });
    console.log('after setState:' + this.state.num);
    this.setState((prevState) => {
      console.log('callback 3: + state.num = ' + prevState.num);
      return {
        num: prevState.num + 1
      };
    });
    console.log('after setState:' + this.state.num);
  }
  render () {
    return (
      <div>
        <div>{this.state.num}</div>
        <button onClick={this.onClick}>Add</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));