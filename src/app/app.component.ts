import { Component } from '@angular/core';
import { LoggerService } from './logger.service';
import { UserContextService } from './user-context.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggerService, UserContextService, UserService] // 在根组件中注册提供商
})
export class AppComponent {
  private userId = 1;

  // 嵌套服务依赖
  constructor(logger: LoggerService, public userContext: UserContextService) {
    userContext.loadUser(this.userId);
    logger.logInfo('AppComponent initialized');
  }
}
