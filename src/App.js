import React from 'react'
import users from './users.json'
import Card from './components/Card'

console.log(users)

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="mt-3 mb-3">The wall</h1>
        
        <section className="row gap-3 justify-content-center">
          {users.map(user => {
            return (
              <Card
                key={user.email}
                name={user.name}
                about={user.about}
                picture={user.picture}
              />
            )
          })}
        </section>
      </div>
    )
  }
}

export default App 