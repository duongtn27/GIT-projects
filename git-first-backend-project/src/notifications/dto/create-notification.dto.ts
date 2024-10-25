import { IsInt, IsNotEmpty, IsString, IsBoolean } from 'class-validator';

export class CreateNotificationDto {
    @IsString()
    @IsNotEmpty()
    message: string;

    @IsBoolean()
    isRead: boolean;
}
