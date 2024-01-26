import { DataSource } from 'typeorm';
export declare class DatabaseService {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    callStoredProc(spName: string, params: any[]): Promise<any>;
}
