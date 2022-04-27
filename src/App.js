import React, {Component} from 'react'
import './App.css';
import {firestore} from './firebase';

class App extends Component {
  state ={
    data: ''
  }

  componentDidMount() {
    firestore.collection('test')
    .doc('friend')
    .get()
    .then(doc => {
      this.setState({
        data : doc.data().friend_count
      })
    })
  };
  onClickButton = ()=>{
    firestore.collection('test')
    .doc('friend')
    .update({
      friend_count:Number(this.state.data) + 1
    })
    .then(
      this.setState({
        data:Number(this.state.data) + 1
      })
    )
  }
  onClickDownButton = ()=>{
    firestore.collection('test')
    .doc('friend')
    .update({
      friend_count:this.state.data - 1
    })
    .then(
      this.setState({
        data:this.state.data - 1
      })
    )
  }
  render(){
    return (
      <div className="App">
        <h1>firebase test</h1>
        <h2>값: {this.state.data}</h2>
        <button onClick={this.onClickButton}>더하기</button>
        <button onClick={this.onClickDownButton}>빼기</button>
      </div>
    );
  }
}

export default App;
