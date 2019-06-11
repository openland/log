import { LogProvider } from './LogProvider';
import { Context, ContextName } from '@openland/context';

export class ConsoleLogProvider implements LogProvider {
    log(ctx: Context, service: string, level: 'info' | 'debug' | 'warn' | 'error', message: string) {
        let ctxName = ContextName.get(ctx);
        if (level === 'debug') {
            console.debug('[' + ctxName + '] ' + service + ' (' + level + '):' + message);
        } else if (level === 'error') {
            console.error('[' + ctxName + '] ' + service + ' (' + level + '):' + message);
        } else if (level === 'warn') {
            console.warn('[' + ctxName + '] ' + service + ' (' + level + '):' + message);
        } else {
            console.log('[' + ctxName + '] ' + service + ' (' + level + '):' + message);
        }
    }
    metric(ctx: Context, service: string, name: string, value: number, dimension: string) {
        let ctxName = ContextName.get(ctx);
        console.log('[' + ctxName + '] ' + service + ':' + name + ': ' + value + ' ' + dimension);
    }
}