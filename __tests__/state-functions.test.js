import { toggleDone, deleteTodo } from "../app/state-functions";

describe('toggleDone', () => {
  describe('when given an incomplete todo', () => {
    it('marks the todo as completed', () => {
      const startState = {
        todos: [{ id: 1, done: false, name: 'Buy Milk' }]
      }
      const finState = toggleDone(startState,1);
      expect(finState.todos).toEqual([
        { id: 1, done: true, name: 'Buy Milk' }
      ])
    })
  })
})

describe('deleteTodo', () => {
  describe('when given a todo id', () => {
    it('returns todos without that todo', () => {
      const startState = {
        todos: [{ id: 1, done: false, name: 'Buy Milk' }]
      }
      const finState = deleteTodo(startState,1);
      expect(finState.todos).toEqual([])
    })
  })
})