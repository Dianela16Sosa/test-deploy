import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class UsuariosService {

  constructor(private readonly databaseService: DatabaseService) {}
  
  async findAll() {
    try {
      console.log('aaaa')
      const result = await this.databaseService.callStoredProc(
        'sp_listar_tb_persona',
        [],
      );
      return result[0][0].UsuariosDetallados;
    } catch (error) {
      console.log(error);
      this.handleDBExceptions(error);
    }
  }
  handleDBExceptions(error: any) {
    throw new Error('Method not implemented.');
  }

  async eliminarUsuario(id: number) {
    try {
      const result = await this.databaseService.callStoredProc('sp_eliminar_tb_persona', [id]);
      console.log(result);
      
    } catch (error) {
      console.log(error);
      this.handleDBExceptions(error);
    }
  }
}
