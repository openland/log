import { Context } from '@openland/context';

export interface LogProvider {
    log(ctx: Context, service: string, level: 'info' | 'debug' | 'warn' | 'error', message: string): void;
    metric(ctx: Context, service: string, name: string, value: number, dimension: string): void;
}