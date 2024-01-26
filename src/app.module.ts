import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmConfigService } from './config/TypeOrmConfigService';
import { VehiculosModule } from './modules/vehiculos/vehiculos.module';
import { AuthModule } from './modules/auth/auth.module';
import { PersonasModule } from './modules/personas/personas.module';
import { FilesModule } from './modules/files/files.module';
import { PdfModule } from './modules/pdf/pdf.module';
import { DatabaseModule } from './modules/database/database.module';
import { AutomotoraModule } from './modules/automotora/automotora.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, //Para no tener que importar siempre el ConfigModule en otros módulos de Nest
      envFilePath: '.env', 
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService, //-> Es otra opción
      // imports: [ConfigModule],
      // useFactory: (configService: ConfigService) => ({
      //   type: 'mysql',
      //   host: configService.get('DB_HOST'),
      //   port: +configService.get('DB_PORT'),
      //   username: configService.get('DB_USER'),
      //   password: configService.get('DB_PASSWORD'),
      //   database: configService.get('DATABASE'),
      //   entities: [],
      //   autoLoadEntities: false,
      //   synchronize: false,
      // }),
      // inject: [ConfigService],
      // dataSourceFactory: async (options) => {
      //   const dataSource = await new DataSource(options).initialize();
      //   return dataSource;
      // },
    }),
    AuthModule,
    DatabaseModule,
    FilesModule,
    PdfModule,
    PersonasModule,
    VehiculosModule,
    AutomotoraModule,
    UsuariosModule
  ],
})
export class AppModule { }