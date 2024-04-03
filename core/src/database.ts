

const databasePrefix = 'data';

export class Database {
    // Short form constructor
    constructor(private collectionName: string
                ,protected options: object) {}
}

const database = new Database('users',  { max: 1000 });