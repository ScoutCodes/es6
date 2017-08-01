class Task {
  constructor(title = Task.getDefaultTitle() ) {
    this.title = title;
    this._done = false;
    Task.count += 1;
    console.log('Creating task');
  }

  get done() {
    return this._done === true ? 'Completed' : 'Uncompleted';
  }

  set done(value) {
    if (value !== undefined && typeof value === 'boolean') {
      this._done = value;
    } else {
      console.error('Error! Set value true or false.')
    }
  }

  complete() {
    this._done = true;
    console.log(`Task "${this.title}" is already done.`);
  }

  static getDefaultTitle() {
    return 'Task';
  }
}

Task.count = 0;

let task = new Task('Clean room');
let task2 = new Task('Wash the dishes');
let task3 = new Task();

console.log(task instanceof Task);
console.log(task.title);
console.log(task2.title);
console.log(task3.title);
console.log(Task.count);
console.log(task.done, task._done);

task2.complete();
console.log(task2.done, task2._done);
