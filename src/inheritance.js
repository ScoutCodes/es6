class Task {
  constructor(title) {
    this.title = title;
    this.done = false;
    console.log('Creating task');
  }

  complete() {
    this.done = true;
    console.log(`Task "${this.title}" completed.`);
  }
}

class SubTask extends Task {
  constructor(title, parent) {
    super(title);
    this.parent = parent;
    console.log(`Creating subtask`);
  }

  complete() {
    super.complete();
    console.log(`Subtask "${this.title}" completed.`);
  }
}

let task = new Task('Learn JavaScript');
let subtask = new SubTask('Learn ES6');

task.complete();
subtask.complete();

console.log(task);
console.log(subtask);
