import { User } from './user';

export class Note {
    constructor(
        private _id: number,
        private _title: string,
        private _content: string,
        private _userId: User 
    ) {}

    
    public get id(): number { return this._id; }
    public get title(): string { return this._title; }
    public get content(): string { return this._content; }
    public get userId(): User { return this._userId; }

    public set title(value: string) { this._title = value; }
    public set content(value: string) { this._content = value; }

    public preview(): string {
        if (this._content.length > 20) {
            return this._content.substring(0, 20) + "...";
        }
        return this._content;
    }
}