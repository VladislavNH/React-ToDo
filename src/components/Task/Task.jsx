import React from 'react'
import PropTypes from 'prop-types'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import './Task.css'

export default class Task extends React.Component {
  clickHandler = (e) => {
    const { onEditTask, id, description } = this.props
    onEditTask(id, description)
    setTimeout(() => {
      const listItem = e.target.closest('li')
      if (listItem) {
        const editElem = listItem.querySelector('.edit')
        if (editElem) {
          editElem.focus()
        }
      }
    }, 50)
  }

  render() {
    const {
      description,
      created,
      id,
      completed,
      onDeleteTask,
      onCompleteTask,
    } = this.props

    const checkboxId = `checkbox-${id}`

    return (
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={!!completed}
          onChange={() => onCompleteTask(id)}
          id={checkboxId}
          aria-label="Mark task as completed"
        />

        <label htmlFor={checkboxId} className="description-label">
          <span className="description">{description}</span>
          <span className="created">{formatDistanceToNow(created)}</span>
        </label>

        <button
          className="icon icon-edit"
          onClick={this.clickHandler}
          type="button"
          aria-label="Edit task"
        />

        <button
          className="icon icon-destroy"
          onClick={() => onDeleteTask(id)}
          type="button"
          aria-label="Delete task"
        />
      </div>
    )
  }
}

Task.propTypes = {
  description: PropTypes.string.isRequired,
  created: PropTypes.instanceOf(Date).isRequired,
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onCompleteTask: PropTypes.func.isRequired,
}
