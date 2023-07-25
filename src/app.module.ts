import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';
import { AdminController } from './admin/admin.controller';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [],
  controllers: [CatsController, AdminController],
  providers: [CatsService],
})
export class AppModule {}
