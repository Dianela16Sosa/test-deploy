import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';
import { FilesModule } from '../files/files.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: "secret",
      signOptions: {
        expiresIn: '30d'
      }
    }),
    forwardRef(() => FilesModule)
  ],
  exports: [JwtStrategy, PassportModule, JwtModule]
})
export class AuthModule {}
