import { Body, Controller, Param, Post, Get } from '@nestjs/common';
import { RolesService } from './roles.service';
import { createRoleDto } from './dto/create-role.dto';

@Controller('roles')
export class RolesController {
  constructor(private roleService: RolesService) {}

  @Post()
  create(@Body() dto: createRoleDto) {
    return this.roleService.createRole(dto);
  }

  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.roleService.getRoleByValue(value);
  }
}