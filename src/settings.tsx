import { common, settings } from 'replugged';

const { React } = common;

export const defaultConfig = {
  scripts: [] as Array<{
    enabled: boolean;
    name: string;
    start: string;
    stop?: string;
  }>,
};

export const config = await settings.init('lib.evelyn.Quark', defaultConfig);

export const Settings = (): JSX.Element => <div></div>;
