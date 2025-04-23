import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TodoModule } from './app/todo/todo.module';
import { ListModule } from './app/list/list.module';

@Module({
  imports: [ConfigModule.forRoot(), TodoModule, ListModule],
})
export class AppModule {}
