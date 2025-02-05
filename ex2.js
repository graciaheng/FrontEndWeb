var myTodos = /** @class */ (function () {
    function myTodos() {
        this.myTask = [];
    }
    //create a function to add tasks to the array
    myTodos.prototype.addTask = function (task) {
        this.myTask.push(task);
        console.log("Added new task: " + task); //shows insertion
        return this.myTask.length; //returns the updated number of elements in the array
    };
    myTodos.prototype.listAllTasks = function () {
        this.myTask.forEach(function (element) {
            console.log("Task: " + element); //prints each array item in the console
        });
    };
    myTodos.prototype.deleteTask = function (task) {
        var index = this.myTask.indexOf(task); //gets the index of the selected task to be deleted
        if (index != -1) {
            this.myTask.splice(index, 1);
            console.log(task + " is removed from my tasks list."); //shows deletion
        }
        else {
            console.log(task + " is not in my tasks list.");
        }
        return this.myTask.length; //returns the updated number of elements in the array
    };
    return myTodos;
}());
var myTask = new myTodos();
myTask.addTask("Pear");
myTask.addTask("Pineapple");
myTask.listAllTasks();
myTask.deleteTask("Pineapple");
