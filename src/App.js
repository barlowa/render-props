import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import ToggleRenderProps from './toggleRenderProps'
// import Toggle from './toggle'
// import ToggleRPC from './toggleRPC'//toggle render prop children
// import Fetch from './Fetch'
// import UserProfile from './UserProfile'

const required = value => value ? undefined : 'Required'
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
  value && value < min ? console.log(`Must be at least ${min}`) : undefined
const minValue18 = minValue(18)
const email = value => 
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined
const tooOld = value =>
  value && value > 65 ? 'You might be too old for this' : undefined
const aol = value =>
  value && /.+@aol\.com/.test(value) ?
  'Really? You still use AOL for your email?' : undefined


let  matchedRules =  []

export default class App extends React.Component {
  state={
    rules:[ 'password', 'phone', 'another one' ],
  }

  handleChange = (event) =>{
    const text = event.target.value
    const { rules } = this.state
    // console.log('text', text)
    matchedRules =[]

    matchedRules = rules.map( match =>{
      if(match === 'email'){
        return (email(text))
      }
      else if(match === 'password'){
        return (maxLength15(text))
      }
      else if(match === 'phone'){
        return (number(text))
      }else{
        return undefined
      }

      // switch(match) {
      //   case 'email':
      //     // matchedRules.push(email(text))
      //     // console.log(email(text))
      //     return email()   
      //     // break
      //   case 'password':
      //       // console.log(maxLength15(text))
      //     // matchedRules = maxLength15(text)
      //     return maxLength15(text)
      //     break
      //   default:
      //    return undefined
      // }

    })
    console.log(matchedRules)
  }

  render() {
  console.log(matchedRules)
    return (
      <div>
        <input 
          onChange={this.handleChange}
        />
      </div>
    )
  }
}


// function App() {
  // const todos = [
  //   "todos/2",
  //   "todos/3",
  //   "todos/4",
  //   "todos/5",
  //   "todos/6",
  //   "todos/7",
  //   "todos/8",
  //   "todos/9",
  // ]

 
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       {/* <img src={logo} className="App-logo" alt="logo" /> */}
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
        {/* <ToggleRenderProps
          //stuff to output
          render={({ on, toggle }) => (
            <div>
              {
                on &&
                <h1>Show me!</h1>
              }
              <button onClick={toggle}>Show/Hide</button>
            </div>
          )}
        />

        <Toggle />

        <ToggleRPC>
          {({ on, toggle }) => (
            <div>
              {
                on &&
                <h1>You a Hoe!!</h1>
              }
              <button onClick={toggle}>Hoe Me</button>
            </div>
          )}
        </ToggleRPC>
        {
          todos.map(todo => {
            <Fetch endpoint='https://jsonplaceholder.typicode.com/${todo}'>{
              ({ data }) => (
                <>
                <UserProfile
                  key={data.id}
                  userId={data.userId}
                  title={data.title}
                  completed={data.completed}
                />
                </>
              )}
            </Fetch>
          })
        }

        <Fetch endpoint='https://jsonplaceholder.typicode.com/todos/1'>{
          ({ data }) => (
            <>
              <div>{JSON.stringify(data)}</div>
            </>
          )}
        </Fetch> */}


//       </header>
//     </div>
//   );
// }

// export default App;
