import { NoteBook } from './notebook';

export class User {

    private _notebooks: NoteBook[] = [];

    constructor(
        private _id: number,
        private _name: string,
        private _email: string,
        private _password: string,
        private _phone: string,
        private _age: number
    ) {
        if (_age < 18 || _age > 60) {
            throw new Error("Age must be between 18 and 60.");
        }
    }

    public get id(): number { return this._id; }
    public get name(): string { return this._name; }
    public get email(): string { return this._email; }
    public get age(): number { return this._age; }

    public set age(value: number) {
        if (value >= 18 && value <= 60) {
            this._age = value;
        } else {
            throw new Error("العمر يجب أن يكون بين 18 و 60 سنة.");
        }
    }

    public addNotebook(notebook: NoteBook): void {
        this._notebooks.push(notebook);
    }

    public getNotebooks(): NoteBook[] {
        return this._notebooks;
    }

    public displayInfo(): void {
        console.log(`ID: ${this._id}, Name: ${this._name}, Email: ${this._email}, Phone: ${this._phone}, Age: ${this._age}`);
    }
}