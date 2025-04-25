import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { TodoCreateUseCase } from './use-cases/todo-create.use-case';
import { TodoDeleteUseCase } from './use-cases/todo-delete.use-case';
import { TodoFetchUseCase } from './use-cases/todo-fetch.use-case';
import { TodoListUseCase } from './use-cases/todo-list.use-case';
import { TodoUpdateUseCase } from './use-cases/todo-update.use-case';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { TodoListApiResponseDto } from './domain/dto/response/todo-list-response.dto';
import { TodoListPathParamsDto } from './domain/dto/request/todo-list-request.dto';
import { TodoListRequestDtoAdapter } from './infrastructure/dto/adapters/request/todo-list-request-dto.adapter';
import { TodoListResponseDtoAdapter } from './infrastructure/dto/adapters/response/todo-list-response-dto.adapter';
import { TodoFetchPathParamsDto } from './domain/dto/request/todo-fetch-request.dto';
import { TodoFetchApiResponseDto } from './domain/dto/response/todo-fetch-response.dto';
import { TodoFetchRequestDtoAdapter } from './infrastructure/dto/adapters/request/todo-fetch-request-dto.adapter';
import { TodoFetchResponseDtoAdapter } from './infrastructure/dto/adapters/response/todo-fetch-response-dto.adapter';
import {
  TodoCreateBodyRequestDto,
  TodoCreatePathParamsDto,
} from './domain/dto/request/todo-create-request.dto';
import { TodoCreateApiResponseDto } from './domain/dto/response/todo-create-response.dto';
import { TodoCreateRequestDtoAdapter } from './infrastructure/dto/adapters/request/todo-create-request-dto.adapter';
import { TodoCreateResponseDtoAdapter } from './infrastructure/dto/adapters/response/todo-create-response-dto.adapter';
import { TodoUpdatePathParamsDto } from './domain/dto/request/todo-update-request.dto';
import { TodoUpdateApiResponseDto } from './domain/dto/response/todo-update-response.dto';
import { TodoUpdateRequestDtoAdapter } from './infrastructure/dto/adapters/request/todo-update-request-dto.adapter';
import { TodoUpdateBodyRequestDto } from './domain/dto/request/todo-update-request.dto';
import { TodoUpdateResponseDtoAdapter } from './infrastructure/dto/adapters/response/todo-update-response-dto.adapter';
import { TodoDeleteApiResponseDto } from './domain/dto/response/todo-delete-response.dto';
import { TodoDeletePathParamsDto } from './domain/dto/request/todo-delete-request.dto';
import { TodoDeleteRequestDtoAdapter } from './infrastructure/dto/adapters/request/todo-delete-request-dto.adapter';
import { TodoDeleteResponseDtoAdapter } from './infrastructure/dto/adapters/response/todo-delete-response-dto.adapter';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('list/:listId/todo')
export class TodoController {
  constructor(
    private readonly todoCreateUseCase: TodoCreateUseCase,
    private readonly todoFetchUseCase: TodoFetchUseCase,
    private readonly todoListUseCase: TodoListUseCase,
    private readonly todoUpdateUseCase: TodoUpdateUseCase,
    private readonly todoDeleteUseCase: TodoDeleteUseCase,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new todo' })
  @ApiCreatedResponse({ type: TodoCreateApiResponseDto })
  async createTodo(
    @Param() pathParams: TodoCreatePathParamsDto,
    @Body() body: TodoCreateBodyRequestDto,
  ): Promise<TodoCreateApiResponseDto> {
    const model = TodoCreateRequestDtoAdapter.toModel({
      pathParams,
      body,
    });

    const result = await this.todoCreateUseCase.execute(model);

    if (result.isErr()) {
      throw new HttpException(result.error.message, result.error.statusCode);
    }

    return TodoCreateResponseDtoAdapter.fromModel(result.value);
  }

  @Get()
  @ApiOperation({ summary: 'List all available todos of a list' })
  @ApiOkResponse({ type: TodoListApiResponseDto })
  async listTodos(
    @Param() pathParams: TodoListPathParamsDto,
  ): Promise<TodoListApiResponseDto> {
    const model = TodoListRequestDtoAdapter.toModel({
      pathParams,
    });

    const result = await this.todoListUseCase.execute(model);

    if (result.isErr()) {
      throw new HttpException(result.error.message, result.error.statusCode);
    }

    return TodoListResponseDtoAdapter.fromModel(result.value);
  }

  @Get(':todoId')
  @ApiOperation({ summary: 'Fetch a todo by id' })
  @ApiOkResponse({ type: TodoFetchApiResponseDto })
  async fetchTodo(
    @Param() pathParams: TodoFetchPathParamsDto,
  ): Promise<TodoFetchApiResponseDto> {
    const model = TodoFetchRequestDtoAdapter.toModel({
      pathParams,
    });

    const result = await this.todoFetchUseCase.execute(model);

    if (result.isErr()) {
      throw new HttpException(result.error.message, result.error.statusCode);
    }

    return TodoFetchResponseDtoAdapter.fromModel(result.value);
  }

  @Put(':todoId')
  @ApiOperation({ summary: 'Update a todo' })
  @ApiOkResponse({ type: TodoUpdateApiResponseDto })
  async updateTodo(
    @Param() pathParams: TodoUpdatePathParamsDto,
    @Body() body: TodoUpdateBodyRequestDto,
  ): Promise<TodoUpdateApiResponseDto> {
    const model = TodoUpdateRequestDtoAdapter.toModel({
      pathParams,
      body,
    });

    const result = await this.todoUpdateUseCase.execute(model);

    if (result.isErr()) {
      throw new HttpException(result.error.message, result.error.statusCode);
    }

    return TodoUpdateResponseDtoAdapter.fromModel(result.value);
  }

  @Delete(':todoId')
  @ApiOperation({ summary: 'Delete a todo' })
  @ApiOkResponse({ type: TodoDeleteApiResponseDto })
  async deleteTodo(
    @Param() pathParams: TodoDeletePathParamsDto,
  ): Promise<TodoDeleteApiResponseDto> {
    const model = TodoDeleteRequestDtoAdapter.toModel({
      pathParams,
    });

    const result = await this.todoDeleteUseCase.execute(model);

    if (result.isErr()) {
      throw new HttpException(result.error.message, result.error.statusCode);
    }

    return TodoDeleteResponseDtoAdapter.fromModel(result.value);
  }
}
