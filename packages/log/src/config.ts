import { LogProvider } from './LogProvider';
import { LogConfig } from './impl/LogConfig';

export function setLogProvider(provider: LogProvider) {
    LogConfig.registerLogProvider(provider);
}

export function disableAll() {
    LogConfig.disabledAll = true;
}

export function enableAll() {
    LogConfig.disabledAll = false;
    LogConfig.disabledServices.clear();
}

export function disableService(service: string) {
    LogConfig.disabledServices.add(service);
}

export function enableService(service: string) {
    LogConfig.disabledServices.delete(service);
}