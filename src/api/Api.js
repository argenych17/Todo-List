import { useState } from "react"

const Api = {
  deleteTodo: (id) => arr.filter((item) => {
    return (
      item.id !== id
    )
  }),

  Todo: () =>  useState(JSON.parse(localStorage.getItem("todo")) || [] )
}

export default Api