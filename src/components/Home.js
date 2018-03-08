import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodoAction, remove } from '../actions/todoAction';
import './index.css';
import Create from './Create';

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Create />
        </div>
        <hr style={{ marginBottom: '30px' }} />
        {this.props.todo.map((node, index) => (
          <div key={index} className="card">
            <div>
              <div>
                <p className="date">{node.date.format('LL')}</p>
                <h2>{node.title}</h2>
                <div className="box-content">
                  <p className="content">{node.content}</p>
                  <img
                    className="data-img"
                    src={node.image}
                    alt="Smiley face"
                  />
                </div>
              </div>
              <div className="remove">
                <button onClick={() => this.props.dispatch(remove(node.id))}>
                  remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(mapStateToProps)(Home);
