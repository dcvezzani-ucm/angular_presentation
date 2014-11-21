angular.module('todoApp', [])
        .controller('TodoController', ["$scope", "Notes", function ($scope, Notes) {
                $scope.$watch(function () {
                    return Notes.getNotes()
                }, function (newVal, oldVal) {
                    if (typeof newVal !== 'undefined') {
                        $scope.notes = Notes.getNotes();
                    }
                });
                $scope.todos = [
                    {text: 'learn angular', done: true},
                    {text: 'build an angular app', done: false}];

                $scope.addTodo = function () {
                    $scope.todos.push({text: $scope.todoText, done: false});
                    $scope.todoText = '';
                };

                $scope.remaining = function () {
                    var count = 0;
                    angular.forEach($scope.todos, function (todo) {
                        count += todo.done ? 0 : 1;
                    });
                    return count;
                };

                $scope.archive = function () {
                    var oldTodos = $scope.todos;
                    $scope.todos = [];
                    angular.forEach(oldTodos, function (todo) {
                        if (!todo.done)
                            $scope.todos.push(todo);
                    });
                };
                $scope.removeNotes = function () {
                    Notes.removeNotes();
                }

            }])
            
            //Updated controller that calles Notes service factory instead
            .controller("additionalController", ["$scope", "Notes", function ($scope, Notes) {
                $scope.modifySomeNotes = function () {
                Notes.updateNotes($scope.notes);
                $scope.notes = "";
            }
    }]);
