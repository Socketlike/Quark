import { Logger, common, settings } from 'replugged';
import type { Quark } from '@quark';

const { React } = common;

export const logger = Logger.plugin('Quark');

export const defaultConfig = {
  quarks: {} as Record<string, Quark>,
};

export const config = await settings.init('lib.evelyn.Quark', defaultConfig);

export const Settings = (): JSX.Element => <div></div>;
