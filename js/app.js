window.Todos = Ember.Application.create();
 // This line creates the initial instance of the Ember Object,
 // and it creates an (instance?) variable for the todos
 Todos.ApplicationAdapter = DS.FixtureAdapter.extend();

 // This code creates the application adapter, which either connects the app to a backend
 // or (in this case) fixture data.
