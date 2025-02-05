//create an array of strings
let myArray: Array<string> = ["Apple", "Banana", "Pear"];

//create a function to add tasks to the array
function addTask(task: string): number{
    myArray.push(task);
    console.log("Added new task: " + task); //shows insertion
    return myArray.length; //returns the updated number of elements in the array
}

function listAllTasks(): void{ //returns nothing
  myArray.forEach((element)=>{
    console.log("Task: " + element); //prints each array item in the console
  })
}
addTask("Peach");
addTask("Pineapple");
listAllTasks();

function deleteTask(task: string): number{
    let index = myArray.indexOf(task); //gets the index of the selected task to be deleted
    if(index != -1){
        myArray.splice(index, 1);
        console.log(task + " is removed from my tasks list."); //shows deletion
    }
    else {
        console.log(task + " is not in my tasks list.");
    }
    return myArray.length; //returns the updated number of elements in the array
}

deleteTask("Banana");
listAllTasks();