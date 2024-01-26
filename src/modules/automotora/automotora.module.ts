import { Module } from '@nestjs/common';
import { AutomotoraService } from './automotora.service';
import { AutomotoraController } from './automotora.controller';

@Module({
  controllers: [AutomotoraController],
  providers: [AutomotoraService],
})
export class AutomotoraModule {}
