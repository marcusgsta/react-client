// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
//
// configure({ adapter: new Adapter() });
//
// const localStorageMock = {
//     getItem: jest.fn(),
//     setItem: jest.fn(),
//     clear: jest.fn()
// };
//
// global.localStorage = localStorageMock;

// create a test user and log in to be able to access pages
// log in with mocked user




// const myInit = {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     cache: 'default',
//     body: JSON.stringify({"name": "test-user", "nick": "test-user", "gravatar": "test", "password": "test"})
// };
//
// fetch('/api/add', myInit)
//     .then(results => {
//         if (results.ok) {
//             return results.json();
//         }
//         throw new Error('Network response was not ok.');
//     }).then(data => {
//         this.setState({output: "Användare lades till i databas!"});
//         this.setState({animate: "animate"});
//         console.log(data);
//         console.log("state", data);
//         this.resetMessages();
//     }).catch(error => {
//         console.log('There has been a problem with your fetch operation: ', error.message);
//     });
