import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class DatabaseService {
  constructor(private readonly dataSource: DataSource) {}

	async callStoredProc(spName: string, params: any[]): Promise<any> {
    const query = `CALL ${spName}(${params.map(() => '?').join(', ')})`;

    return await this.dataSource.query(query, params);
  }
}
