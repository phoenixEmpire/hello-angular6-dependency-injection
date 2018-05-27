import { Injectable } from '@angular/core';

// 日志服务
@Injectable()
export class LoggerService {
    logs: string[] = [];

    logInfo(msg: any) {
        this.log(`INFO: ${msg}`);
    }

    logDebug(msg: any) {
        this.log(`DEBUG: ${msg}`);
    }

    logError(msg: any) {
        this.log(`ERROR: ${msg}`);
    }

    private log(msg: any, isErr = false) {
        this.logs.push(msg);
        isErr ? console.error(msg) : console.log(msg);
    }
}
