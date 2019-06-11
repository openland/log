import { Context } from '@openland/context';
import { LogMetaContext } from './LogMetaContext';

export function withLogMeta(ctx: Context, fields: any): Context {
    let src = { ...LogMetaContext.get(ctx), ...fields };
    return LogMetaContext.set(ctx, src);
}