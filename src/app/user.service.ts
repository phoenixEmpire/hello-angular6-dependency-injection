import { Injectable } from '@angular/core';

// 用户服务：查询用户
@Injectable()
export class UserService {
    getUserById(userId: number): any {
        return {
            name: 'Bombasto',
            role: 'Admin'
        };
    }
}
