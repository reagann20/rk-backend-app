import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';

@Injectable()
export class FoodService {
  constructor(private readonly database: DatabaseService) {}

  create(createFoodDto: CreateFoodDto) {
    return this.database.food.create({ data: createFoodDto });
  }

  findAll() {
    return this.database.food.findMany();
  }

  findOne(id: number) {
    return this.database.food.findUnique({ where: { id } });
  }

  update(id: number, updateFoodDto: UpdateFoodDto) {
    return this.database.food.update({ where: { id }, data: updateFoodDto });
  }

  remove(id: number) {
    return this.database.food.delete({ where: { id } });
  }
}
