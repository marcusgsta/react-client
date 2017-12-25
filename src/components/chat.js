import React, {Component} from 'react';
import io from "socket.io-client";
import PropTypes from 'prop-types';

function updateScroll() {
    var element = document.querySelector(".messages");

    element.scrollTop = element.scrollHeight;
}

const Message = ({message}) => (
    <div className="chatMessage">
        <div>{message.author}: {message.message}</div>
    </div>
);

Message.propTypes = {
    message: PropTypes.object.isRequired
};

export class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            message: '',
            messages: [],
            feedback: '',
            shouldHandleKeyPress: true
        };
        this.sendMessage = this.sendMessage.bind(this);
        this.sendFeedback = this.sendFeedback.bind(this);
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

    sendMessage(ev) {
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
                <h1>Chat</h1>
                <p>Välkommen till chatten.</p>
                <div className="container">
                    <div className="messages">
                        {this.state.messages.map((m, i) => console.log(m) || <Message key={i} message={m} />)}
                        <div className="feedback">
                            {this.state.feedback}
                        </div>
                    </div>
                    <div className="chat-input">
                        <input type="text" placeholder="Nick" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="form-control"/>
                        <br/>
                        <input type="text" placeholder="Meddelande" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})} onKeyPress={this.sendFeedback} className="form-control"/>
                        <br/>
                        <button onClick={this.sendMessage} className="button button--text button--primary">Skicka</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;
