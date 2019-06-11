import { LogProvider } from "../LogProvider";
import { ConsoleLogProvider } from "../ConsoleLogProvider";

class LogConfigImpl {
    logProvider: LogProvider = new ConsoleLogProvider();
    disabledAll: boolean = false;
    disabledServices = new Set<string>();
    allowDisablingSeverLevels = false;

    registerLogProvider(provider: LogProvider) {
        this.logProvider = provider;
    }
}

export const LogConfig = new LogConfigImpl();