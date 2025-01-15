import { IsNotEmpty, IsString, IsNumber, Min } from 'class-validator';

export class CreateFoodDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}