import { Controller, Get } from '@nestjs/common';
import { PackageService } from './package.service';

@Controller()
export class PackageController {
  constructor(private readonly packageService: PackageService) {}

  @Get()
  getHello(): string {
    return this.packageService.getPackageHello();
  }
}
