import { IsNotEmpty, IsString, IsOptional, IsDate } from 'class-validator';

export class CreateHistoryDto {
    @IsString()
    historyId: string;

    @IsString()
    entityId: string;

    @IsString()
    @IsNotEmpty()
    versionNumber: string;

    @IsDate()
    changeDate: Date;

    @IsString()
    changedByUserId: string;

    @IsString()
    versionData: string;

    @IsString()
    @IsOptional()
    description: string;
}