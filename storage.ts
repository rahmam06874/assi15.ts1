export class Storage<T> {
    private _items: T[] = [];

    public addItem(item: T): void {
        this._items.push(item);
    }

    public removeItem(item: T): void {
        const index = this._items.indexOf(item);
        if (index !== -1) {
            this._items.splice(index, 1);
        }
    }

    public getAllItems(): T[] {
        return this._items;
    }

    public getItem(index: number): T | undefined {
        return this._items[index];
    }
}