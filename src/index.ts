import { Logger } from 'replugged';
import { config } from '@settings';

export const logger = Logger.plugin('Quark');

export const strings = {
  DISABLED: 'snippet-disabled',
  DUPLICATE_NAME: 'duplicate-snippet-name',
  INVALID_NAME: 'invalid-snippet-name',
  NO_START_SCRIPT: 'no-start-script',
  NO_STOP_SCRIPT: 'no-stop-script',
  NOT_RAN: 'not-ran',
  error: (name: string, start: boolean) =>
    `An error occurred whilst running ${start ? 'start' : 'stop'} script for snippet "${name}"`,
  running: (name: string, start: boolean) =>
    `Running ${start ? 'start' : 'stop'} script for snippet "${name}"`,
  skipped: (name: string, reason: string, start: boolean) =>
    `Skipped running ${start ? 'start' : 'stop'} script for snippet "${name}" (${
      reason || 'unknown-reason'
    })`,
};

export const quarks = new Map<string, Map<string, unknown>>();

export const start = (): void => {
  config.get('scripts')?.forEach?.(({ enabled, name, start, stop }): void => {
    if (!enabled) logger.log(strings.skipped(name, strings.DISABLED, true), start, stop);
    else if (typeof name !== 'string' || !name)
      logger.error(strings.skipped(name, strings.INVALID_NAME, true), start, stop);
    else if (quarks.has(name))
      logger.error(strings.skipped(name, strings.DUPLICATE_NAME, true), start, stop);
    else if (!start)
      logger.error(strings.skipped(name, strings.NO_START_SCRIPT, true), start, stop);
    else {
      quarks.set(name, new Map<string, unknown>());

      logger.log(strings.running(name, true));

      try {
        // eslint-disable-next-line @typescript-eslint/no-implied-eval, no-new-func
        Function('quark', start).call(window, { logger, storage: quarks.get(name) });
      } catch (e) {
        logger.error(strings.error(name, true), e);
      }
    }
  });
};

export const stop = (): void => {
  config.get('scripts')?.forEach?.(({ enabled, name, start, stop }): void => {
    if (!enabled) logger.log(strings.skipped(name, strings.DISABLED, false), start, stop);
    else if (typeof name !== 'string' || !name)
      logger.error(strings.skipped(name, strings.INVALID_NAME, false), start, stop);
    else if (!stop) logger.error(strings.skipped(name, strings.NO_STOP_SCRIPT, false), start, stop);
    else if (!quarks.has(name))
      logger.error(strings.skipped(name, strings.NOT_RAN, false), start, stop);
    else {
      logger.log(strings.running(name, false));

      try {
        // eslint-disable-next-line @typescript-eslint/no-implied-eval, no-new-func
        Function('quark', stop).call(window, { logger, storage: quarks.get(name) });
      } catch (e) {
        logger.error(strings.error(name, false), e);
      }
    }
  });
};

export { Settings, config } from '@settings';
