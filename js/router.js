Todos.Router.map(function() {
  this.resource('todos', { path: '/' });
});

// This code looks for the todos variable in the Ember Application Object and then
// creates an index route for the todo variable.  In this case, the router specifies
// that it will render the todos template on the root page rather than /todos.
