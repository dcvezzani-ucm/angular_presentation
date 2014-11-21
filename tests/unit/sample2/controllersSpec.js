'use strict';

describe('Todo controller', function() {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('todoApp'));

  describe('TodoController', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('TodoController', {$scope: scope});
    }));


    it('should provide 2 items in the todo list initially', function() {
      var todos = [];

      for(var i in scope.todos){
        todos[todos.length] = scope.todos[i].text
      }

      expect(todos).toEqualData(['learn angular', 'build an angular app']);
    });

    it('should implement #addTodo to add an item to the "todo" list', function() {
      expect(scope.todos.length).toBe(2);
      scope.todoText = "blah";
      scope.addTodo();

      expect(scope.todos.length).toBe(3);
    });

    it('should implement #remaining to show number of pending items in the "todo" list', function() {
      expect(scope.remaining()).toBe(1);

      for(var i in scope.todos){
        scope.todos[i].done = true;
      }
      
      expect(scope.remaining()).toBe(0);
    });

    it('should implement #archive to remove all completed items from the "todo" list', function() {
      expect(scope.todos.length).toBe(2);

      for(var i in scope.todos){
        scope.todos[i].done = true;
      }
      scope.archive();
      
      expect(scope.todos.length).toBe(0);
    });
  });
});
  
