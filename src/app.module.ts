import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TodoModule } from './app/todo/todo.module';
import { ListModule } from './app/list/list.module';
import { ShortModule } from './app/short/short.module';
@Module({
  imports: [ConfigModule.forRoot(), TodoModule, ListModule, ShortModule],
})
export class AppModule {}
