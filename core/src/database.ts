import path from 'path';
import fs from 'fs/promises';
import fsSync from 'fs';

const databasePrefix = 'data';

export interface DatabaseOptions {
    defaultData?: object; // Optional Field
}

export class Database {
    private databasePath: string;
    // Short form constructor
    constructor(private collectionName: string,protected options? : DatabaseOptions ) {
        this.databasePath = path.join(databasePrefix, collectionName + '.json');
    }

    async init() {
        const defaultData = this.options?.defaultData ?? [];
        if (!fsSync.existsSync(databasePrefix)) {
            await fs.mkdir(databasePrefix, { recursive: true });
            await fs.writeFile(
                this.databasePath,
                JSON.stringify(defaultData, null, 2),
                'utf-8'
            );
        
        }

        return this;
    }
}

const database = new Database('users',  { defaultData: { name: 'John'} });