import React, { Component } from "react"
import "./App.css"
import Customer from "./components/Customer"

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/any/1",
    name: "홍길동",
    birthday: "200201",
    gender: "남자",
    job: "학생"
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/any/2",
    name: "백일동",
    birthday: "299211",
    gender: "여자",
    job: "중학생"
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/any/3",
    name: "최등일",
    birthday: "399211",
    gender: "여자",
    job: "초학생"
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {customers.map(c => {
          return (
            <Customer
              key={c.id}
              name={c.name}
              id={c.id}
              image={c.image}
              gender={c.gender}
              job={c.job}
              birthday={c.birthday}
            />
          )
        })}
      </div>
    )
  }
}

export default App
