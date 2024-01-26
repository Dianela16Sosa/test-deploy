import { PartialType } from '@nestjs/swagger';
import { CreateAutomotoraDto } from './create-automotora.dto';

export class UpdateAutomotoraDto extends PartialType(CreateAutomotoraDto) {}
