import { createContextNamespace } from '@openland/context';

export const LogPathContext = createContextNamespace<ReadonlyArray<string>>('log-path', []);