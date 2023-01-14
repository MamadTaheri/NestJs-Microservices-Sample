import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { CreateTodoDto, UpdateTodoDto } from './todo.dto';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  // CRUD
  @Post()
  create(@Body() todo: CreateTodoDto) {
    return this.todosService.create(todo);
  }

  @Get()
  getAll() {
    return this.todosService.getAll();
  }

  @Put()
  update(@Body() todo: UpdateTodoDto) {
    return this.todosService.update(todo);
  }

  @Delete()
  delete(@Query('id') id: string) {
    return this.todosService.delete(id);
  }
}
