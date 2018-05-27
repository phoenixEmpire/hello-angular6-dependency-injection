import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { LoggerService } from './logger.service';

// 用户上下文服务：模拟用户登录
@Injectable()
export class UserContextService {
    name: string;
    role: string;
    loggedInSince: Date;

    constructor(private userService: UserService, private loggerService: LoggerService) {
        this.loggedInSince = new Date();
    }

    loadUser(userId: number) {
        const user = this.userService.getUserById(userId);
        this.name = user.name;
        this.role = user.role;

        this.loggerService.logDebug('loaded user');
    }
}
