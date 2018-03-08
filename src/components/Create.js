import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { addTodoAction, remove } from '../actions/todoAction';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import '../../node_modules/react-datepicker/dist/react-datepicker.css';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      title: '',
      content: '',
      startDate: moment(),
      data_img: [img1, img2, img3],
      image: '',
      validateTitle: false,
      validateContent: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleImage(e) {
    this.setState({
      image: e.target.value
    });
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = 'black';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handletitle(e) {
    if (this.state.title.length > 15) {
      this.setState({
        title: e.target.value,
        validateTitle: true
      });
    } else {
      this.setState({
        title: e.target.value,
        validateTitle: false
      });
    }
  }
  handlecontent(e) {
    if (this.state.content.length > 60) {
      this.setState({
        content: e.target.value,
        validateContent: true
      });
    } else {
      this.setState({
        content: e.target.value,
        validateContent: false
      });
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(
      addTodoAction(
        this.state.title,
        this.state.content,
        this.state.startDate,
        this.state.image
      )
    );
    this.setState({
      title: '',
      content: '',
      startDate: this.state.startDate,
      image: ''
    });
  }
  render() {
    return (
      <div>
        <div className="open-modal">
          <button onClick={this.openModal}>Create</button>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={this.closeModal}>X</button>
          <h2 ref={subtitle => (this.subtitle = subtitle)} className="j-form">
            Create New Post
          </h2>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="box-input">
              <label className="label">Title</label>
              <input
                type="text"
                placeholder="title"
                onChange={this.handletitle.bind(this)}
                value={this.state.title}
              />
              <p style={{ color: 'red' }} className="valid">
                {this.state.validateTitle ? 'max length 15!!!' : ''}
              </p>
            </div>
            <div className="box-input">
              <label className="label">Content</label>
              <textarea
                placeholder="content"
                onChange={this.handlecontent.bind(this)}
                value={this.state.content}
              />
              <p style={{ color: 'red' }} className="valid">
                {this.state.validateContent ? 'max length 60!!!' : ''}
              </p>
            </div>
            <div className="box-input">
              <label className="label">Date</label>
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
                dateFormat="LL"
              />
            </div>
            <div className="box-input">
              <label className="label">Image</label>
              <select className="input" onChange={this.handleImage.bind(this)}>
                {this.state.data_img.map((node, index) => (
                  <option key={index} value={node}>
                    {node}
                  </option>
                ))}
              </select>
            </div>
            <div className="box-button">
              {this.state.validateTitle || this.state.validateContent ? (
                <div>
                  <button className="button-form" disabled>
                    Clear
                  </button>
                  <button
                    className="button-form"
                    onClick={this.closeModal}
                    disabled
                  >
                    Cancel
                  </button>
                  <button className="button-form" disabled>
                    Create
                  </button>
                </div>
              ) : (
                <div>
                  <button className="button-form">Clear</button>
                  <button className="button-form" onClick={this.closeModal}>
                    Cancel
                  </button>
                  <button className="button-form"> Create </button>
                </div>
              )}
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(mapStateToProps)(Create);
