import { Logger } from "./Logger";
import { LoggerImpl } from "./impl/LoggerImpl";

export function createLogger(service: string): Logger {
    return new LoggerImpl(service);
}