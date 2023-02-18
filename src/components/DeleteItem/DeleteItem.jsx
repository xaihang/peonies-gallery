
function DeleteItem({ id, deleteItem }) {
    return (
      <button className="delete-button" onClick={() => deleteItem(id)}>
        Delete
      </button>
    );
  }
  
  export default DeleteItem;