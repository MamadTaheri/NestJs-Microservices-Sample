import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto, UpdateTodoDto } from './todo.dto';
import { Todo } from './todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  // CRUD
  create(todo: CreateTodoDto) {
    console.log("create called")
    return this.todoRepository.save(todo);
  }

  getAll() {
    return this.todoRepository.find({});
  }

  update(todo: UpdateTodoDto) {
    return this.todoRepository.save(todo);
  }

  async delete(id: string) {
    return this.todoRepository.delete({ id });
  }
}
