import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <section>
					<div className="header">
					<input className="input" type="text" placeholder="Enter the task" id="item"/>
					<button className="button" id="add">Add</button>
					</div>

		<div className="container" >
			<ul className="todo" id="todo"></ul>
			<ul className="todo" id="completed"></ul>
		</div>
		<script src="js/main.js"></script>
      </section>
    );
  }
}

export default App;
