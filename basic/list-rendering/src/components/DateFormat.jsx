const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { 
    month:'short'
  
  }
    
  ).format(date);
}

function TodoList() {
  return (
    <h1>To Do List for {formatDate(today)}</h1>
  );
}

export default TodoList;