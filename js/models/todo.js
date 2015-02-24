Todos.Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

// This code creates a Todo model within the application namespace
// and gives the model two attributes
