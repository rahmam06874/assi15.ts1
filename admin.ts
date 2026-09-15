import { User } from './user';
import { Note } from './note'; // هنحتاجها إدارة الملاحظات

export class Admin extends User {


    constructor(id: number, name: string, email: string, password: string, phone: string, age: number) {

        super(id, name, email, password, phone, age);
    }
    public manageNotes(note: Note, action: 'delete' | 'edit' | 'approve'): void {
        console.log(`Admin ${this.name} performed action '${action}' on Note ID: ${note.id}`);
    }
}