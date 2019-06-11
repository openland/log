import { AnyFighter } from "./utils/AnyFighter";
import { Context } from "@openland/context";

export interface Logger {
    log: <C extends AnyFighter<C, never, Context>>(ctx: C, message: any, ...param: any[]) => void;
    debug: <C extends AnyFighter<C, never, Context>>(ctx: C, message: any, ...param: any[]) => void;
    warn: <C extends AnyFighter<C, never, Context>>(ctx: C, message: any, ...param: any[]) => void;
    error: <C extends AnyFighter<C, never, Context>>(ctx: C, message: any, ...param: any[]) => void;

    metric: <C extends AnyFighter<C, never, Context>>(ctx: C, name: string, value: number, dimension: string) => void;

    forceEnable(): void;
}