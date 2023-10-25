import { fluxDispatcher, toast } from 'replugged/common';

import { config, _logger } from '@util';
import { loadAll, startAll, stopAll } from '@quark';

import './style.css';

export const newRepoNotice = (): void => {
  toast.toast(
    'Quark has moved to a new repository. Please reupdate using the updater.',
    toast.Kind.FAILURE,
  );

  config.set('newRepoNotice', true);

  fluxDispatcher.unsubscribe('POST_CONNECTION_OPEN', newRepoNotice);
};

export const start = (): void => {
  if (!config.get('newRepoNotice')) fluxDispatcher.subscribe('POST_CONNECTION_OPEN', newRepoNotice);

  loadAll();
  startAll();
};

export const stop = (): void => stopAll();

export { Settings, Editor, openEditor } from '@components';
export { config } from '@util';
export * as quark from '@quark';
