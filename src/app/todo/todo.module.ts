import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoCreateUseCase } from './use-cases/todo-create.use-case';
import { TodoDeleteUseCase } from './use-cases/todo-delete.use-case';
import { TodoFetchUseCase } from './use-cases/todo-fetch.use-case';
import { TodoListUseCase } from './use-cases/todo-list.use-case';
import { TodoUpdateUseCase } from './use-cases/todo-update.use-case';
import { TODO_REPOSITORY } from './domain/interfaces/repositories/todo.repository.interface';
import { TodoRepository } from './infrastructure/dao/repositories/todo.repository';
import { DatabaseModule } from 'src/core/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TodoController],
  providers: [
    TodoCreateUseCase,
    TodoFetchUseCase,
    TodoListUseCase,
    TodoUpdateUseCase,
    TodoDeleteUseCase,
    {
      provide: TODO_REPOSITORY,
      useClass: TodoRepository,
    },
  ],
})
export class TodoModule {}
