import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text, active, deleted }) => (
  <li
    style={{
      textDecoration: completed ? 'line-through' : 'none',
      color: completed ? 'red' : 'none'
    }}
  >
    {text}
    {"  "}
    <button class='button button-blue' onClick={onClick}>
      <b>
        delete
      </b>
    </button>
  </li>
)

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
