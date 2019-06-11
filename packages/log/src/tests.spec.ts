import { createNamedContext } from "@openland/context";
import { setLogProvider } from "./config";
import { createLogger } from "./createLogger";

describe('logger', () => {
    it('should call provider', () => {
        let log = jest.fn();
        let metric = jest.fn();
        let context = createNamedContext('test');
        setLogProvider({
            log,
            metric
        });
        let logger = createLogger('test');
        logger.log(context, 'message');
        expect(log).toHaveBeenCalledTimes(1);
        expect(metric).not.toHaveBeenCalled();
        logger.debug(context, 'message');
        expect(log).toHaveBeenCalledTimes(2);
        expect(metric).not.toHaveBeenCalled();
        logger.error(context, new Error('Hello!'));
        expect(log).toHaveBeenCalledTimes(3);
        expect(metric).not.toHaveBeenCalled();
        logger.warn(context, 'message');
        expect(log).toHaveBeenCalledTimes(4);
        expect(metric).not.toHaveBeenCalled();
        logger.metric(context, 'metric', 0, 'ms');
        expect(log).toHaveBeenCalledTimes(4);
        expect(metric).toHaveBeenCalledTimes(1);
    });
});