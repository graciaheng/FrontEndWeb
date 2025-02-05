interface myInterface { //create interface
    myTask:Array<string>;
    addTask(tasks:string):number;
    listAllTasks():void;
    deleteTask(task:string):number;
}

class myTodos implements myInterface{//implement the interface
    myTask:Array<string>=[];

    //create a function to add tasks to the array
    addTask(task: string): number{
    this.myTask.push(task);
    console.log("Added new task: " + task); //shows insertion
    return this.myTask.length; //returns the updated number of elements in the array
    }

    listAllTasks(): void{ //returns nothing
        this.myTask.forEach(
        (element)=>{
          console.log("Task: " + element); //prints each array item in the console
        })
      }

    deleteTask(task: string): number{
    let index:number = this.myTask.indexOf(task); //gets the index of the selected task to be deleted
    if(index != -1){
        this.myTask.splice(index, 1);
        console.log(task + " is removed from my tasks list."); //shows deletion
    }
    else {
        console.log(task + " is not in my tasks list.");
    }
        return this.myTask.length; //returns the updated number of elements in the array
    }
}

let myTask = new myTodos();
myTask.addTask("Pear");
myTask.addTask("Pineapple");
myTask.listAllTasks();
myTask.deleteTask("Pineapple");