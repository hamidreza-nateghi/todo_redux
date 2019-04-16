const init = {
  items: [
    { id: 0, text: 'Wash Dishes' },
    { id: 1, text: 'Do laundry' },
    { id: 2, text: 'Buy groceries' }
  ],
  id: 3
};

const reducer = (state = init, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        items: [...state.items, { id: state.id, text: action.payload }],
        id: state.id + 1
      };
    case 'DELETE_TODO':
      return { items: state.items.filter(item => item.id !== action.payload) }
    default:
      return state;
  }
};

export default reducer;