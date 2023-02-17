
function DeleteItem({ id, deleteItem }) {
    return (
      <button onClick={() => deleteItem(id)}>
        Delete
      </button>
    );
  }
  
  export default DeleteItem;