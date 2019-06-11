import { Logger } from '../Logger';
import { AnyFighter } from '../utils/AnyFighter';
import { Context } from '@openland/context';
import { LogConfig } from './LogConfig';
import { format } from 'util';

export class LoggerImpl implements Logger {
    readonly service: string;
    enabled: boolean;
    readonly allowDisablingSeverLevels: boolean;

    constructor(service: string) {
        this.service = service;
        this.enabled = !LogConfig.disabledAll && !LogConfig.disabledServices.has(service.toLowerCase())
        this.allowDisablingSeverLevels = LogConfig.allowDisablingSeverLevels;
    }

    //
    // Logging
    //

    log<C extends AnyFighter<C, never, Context>>(ctx: C, message: any, ...param: any[]) {
        if (!this.enabled) {
            return;
        }
        let formatted = format(message, ...param);
        LogConfig.logProvider.log(ctx, this.service, 'info', formatted);
    }
    debug<C extends AnyFighter<C, never, Context>>(ctx: C, message: any, ...param: any[]) {
        if (!this.enabled) {
            return;
        }
        let formatted = format(message, ...param);
        LogConfig.logProvider.log(ctx, this.service, 'debug', formatted);
    }
    warn<C extends AnyFighter<C, never, Context>>(ctx: C, message: any, ...param: any[]) {
        if (!this.enabled && this.allowDisablingSeverLevels) {
            return;
        }
        let formatted = format(message, ...param);
        LogConfig.logProvider.log(ctx, this.service, 'warn', formatted);
    }
    error<C extends AnyFighter<C, never, Context>>(ctx: C, message: any, ...param: any[]) {
        if (!this.enabled && this.allowDisablingSeverLevels) {
            return;
        }
        let formatted = format(message, ...param);
        LogConfig.logProvider.log(ctx, this.service, 'error', formatted);
    }

    // Metrics

    metric<C extends AnyFighter<C, never, Context>>(ctx: C, name: string, value: number, dimension: string) {
        LogConfig.logProvider.metric(ctx, this.service, name, value, dimension);
    }

    // Management
    forceEnable() {
        this.enabled = true;
    }
}