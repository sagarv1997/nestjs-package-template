import { Injectable } from '@nestjs/common';

@Injectable()
export class PackageService {
  getPackageHello(): string {
    return 'Hello World from Package!';
  }
}
