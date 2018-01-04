import React, {Component} from 'react';
import io from "socket.io-client";
import PropTypes from 'prop-types';
import Read from './read';
import Auth from '../auth';
const FontAwesome = require('react-fontawesome');


function updateScroll() {
    var element = document.querySelector(".messages");

    element.scrollTop = element.scrollHeight;
}


const Message = ({message}) => (
    <div className="chatMessage">
        <div><span className="author">{message.author}</span> {message.message}</div>
    </div>
);

Message.propTypes = {
    message: PropTypes.object.isRequired
};


export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            message: '',
            messages: [],
            feedback: '',
            shouldHandleKeyPress: true
        };
        // this.sendMessage = this.sendMessage.bind(this);
        this.onCommentSubmit = this.onCommentSubmit.bind(this);
        this.sendFeedback = this.sendFeedback.bind(this);
    }

    componentWillMount() {
        let nick = '';

        if (Auth.getNick()) {
            nick = Auth.getNick();
            this.setState({username: nick});
        }
    }

    componentDidMount() {
        this.socket = io();

        this.socket.on("RECEIVE_MESSAGE", (data) => {
            this.setState({shouldHandleKeyPress: true});
            this.setState({feedback: ''});
            this.setState({messages: [...this.state.messages, data]});
            updateScroll();
        });

        this.socket.on('TYPING', (data) => {
            console.log('data: ' + data);
            if (this.state.shouldHandleKeyPress === true) {
                this.setState({feedback: [this.state.feedback, data.author + ' skriver ett meddelande...']});
                this.setState({shouldHandleKeyPress: false});
            }
            updateScroll();
        });
    }

    // sendMessage(ev) {
    onCommentSubmit(ev) {
        ev.preventDefault();
        this.socket.emit('SEND_MESSAGE', {
            author: this.state.username,
            message: this.state.message
        });
        this.setState({message: ''});
    }

    sendFeedback() {
        this.socket.emit('TYPING', {
            author: this.state.username
        });
    }

    render() {
        return (
            <div className="chat">
                {/* <h1>Chat</h1> */}
                <div className="chatwindow">
                    <div className="messages">
                        {this.state.messages.map((m, i) => console.log(m) || <Message key={i} message={m} />)}
                        <div className="feedback">
                            {this.state.feedback}
                        </div>
                    </div>
                    <form onSubmit={this.onCommentSubmit}>
                        <div className="chat-input">
                            <input type="text" autoFocus placeholder="..." value={this.state.message} onChange={ev => this.setState({message: ev.target.value})} onKeyPress={this.sendFeedback} className="form-control"/>
                            <button type="submit" className="sendButton button--primary">
                                <FontAwesome
                                    name='arrow-circle-right'
                                    size='2x'/>
                            </button>
                            {/* <button type="submit" className="button button--text button--primary">Skicka</button> */}
                        </div>
                    </form>
                </div>
                <Read/>
            </div>
        );
    }
}

Home.propTypes = {
    history: PropTypes.object.isRequired
};

export default Home;
