import { Context } from '@openland/context';
import { LogPathContext } from './LogPathContext';

export function withLogPath(ctx: Context, segment: string): Context {
    let ex = LogPathContext.get(ctx);
    return LogPathContext.set(ctx, [...ex, segment]);
}