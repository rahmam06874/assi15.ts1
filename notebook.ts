import { Note } from './note';
import { User } from './user';

export class NoteBook {
    private _notes: Note[] = []; 

    constructor(
        private _id: number,
        private _title: string
    ) {}

    public get id(): number { return this._id; }
    public get title(): string { return this._title; }
    public get notes(): Note[] { return this._notes; }

    public addNote(id: number, title: string, content: string, user: User): Note {
        const newNote = new Note(id, title, content, user);
        this._notes.push(newNote);
        return newNote;
    }

    public removeNote(noteId: number): boolean {
        const index = this._notes.findIndex(note => note.id === noteId);
        if (index !== -1) {
            this._notes.splice(index, 1);
            return true;
        }
        return false;
    }

    public getAllNotes(): Note[] {
        return this._notes;
    }
}