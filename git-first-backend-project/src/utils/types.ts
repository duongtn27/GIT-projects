import { Role, User } from "../user/entities/user.entity";

export type UserDetails = {
    email: string;
    displayName: string;
}

export type AuthJwtPayload = {
    sub: number;
};

export type CurrentUser = User;