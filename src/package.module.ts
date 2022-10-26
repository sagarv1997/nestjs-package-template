import { Module } from '@nestjs/common';
import { PackageController } from './package.controller';
import { PackageService } from './package.service';

@Module({
  imports: [],
  controllers: [PackageController],
  providers: [PackageService],
})
export class PackageModule {}
