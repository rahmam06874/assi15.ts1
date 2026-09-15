import { User } from './user';
import { Admin } from './admin';
import { NoteBook } from './notebook';
import { Storage } from './storage';

// 1.User
console.log("--- Testing User ---");
const user1 = new User(1, "Ahmed", "ahmed@mail.com", "pass123", "01012345678", 25);
user1.displayInfo();

console.log("\n--- Testing Admin ---");
const admin1 = new Admin(2, "Sara Admin", "sara@mail.com", "admin123", "01198765432", 30);
admin1.displayInfo();

console.log("\n--- Testing Aggregation (User & Notebook) ---");
const myNotebook = new NoteBook(101, "My Daily Notes");
user1.addNotebook(myNotebook);
console.log(`Notebook '${myNotebook.title}' assigned to user: ${user1.name}`);

console.log("\n--- Testing Composition & Association ---");
const note1 = myNotebook.addNote(1, "TypeScript Assignment", "This is the full solution for assignment 15 in TS.", user1);
console.log("Created Note Preview:", note1.preview());
console.log(`Note Author (Association): ${note1.userId.name}`);

console.log("\n--- Testing Generic Storage ---");
const userStorage = new Storage<User>();
userStorage.addItem(user1);
userStorage.addItem(admin1);
console.log("Total Users stored:", userStorage.getAllItems().length);

const notebookStorage = new Storage<NoteBook>();
notebookStorage.addItem(myNotebook);
console.log("Total Notebooks stored:", notebookStorage.getAllItems().length);
