export class CreateTodoDto {
  description: string;
  completed: boolean;
}

export class UpdateTodoDto {
  id: string;
  description: string;
  completed: boolean;
}

export class DeleteTodoDto {
  id: string;
}
