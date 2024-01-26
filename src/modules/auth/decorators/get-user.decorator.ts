import { createParamDecorator, ExecutionContext, InternalServerErrorException } from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    const persona = req.user;

    if (!persona) throw new InternalServerErrorException('Usuario no encontrado');
        
    return (!data) ? persona : persona[data];
  }
);