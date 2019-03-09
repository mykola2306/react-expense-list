import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
)

const withAdminWarming = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props}/>
    </div>
  )
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {
        props.isAuthenticated ? 
          <WrappedComponent {...props}/> :
          <p>Please login to view Info</p>
      }
    </div>
  )
}

const AdminInfo = withAdminWarming(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="Hello World!"/>, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info="Hello World!"/>, document.getElementById('app'))