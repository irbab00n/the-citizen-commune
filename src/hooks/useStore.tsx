import { useState, useEffect } from 'react';

import { UseStoreConfig } from '../interfaces/UseStoreConfig';

const _defaultUseStoreConfig: UseStoreConfig = {
  shouldListen: true,
};

let store: { [key: string]: any } = {};
let listeners: Function[] = [];
let actions: { [key: string]: Function } = {};

const updateListeners = () => {
  for (let listener of listeners) {
    listener(store);
  }
};

export const dispatch = (type: string, payload?: any) => {
  const nextState: any = actions[type](store, payload);
  store = { ...JSON.parse(JSON.stringify(store)), ...nextState };
  updateListeners();
};

export const dispatchMultiple = (updates: { [key: string]: any }[]) => {
  const nextState = updates.reduce(
    (next: { [key: string]: any }, update: { [key: string]: any }) => {
      return { ...next, ...actions[update.type](store, update.payload) };
    },
    JSON.parse(JSON.stringify(store))
  );
  store = { ...store, ...nextState };
  updateListeners();
};

export const initStore = (
  actionsToAdd: { [key: string]: Function },
  initialState?: { [key: string]: any }
) => {
  if (!actionsToAdd || typeof actionsToAdd !== 'object') {
    throw Error('Invalid actions to add supplied to initStore function');
  } else {
    actions = { ...actions, ...actionsToAdd };
  }

  if (initialState) {
    store = { ...store, ...initialState };
  }
};

const useStore = (config: UseStoreConfig = _defaultUseStoreConfig) => {
  const { shouldListen } = config;

  const setState: Function = useState(store)[1];

  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState);
    }

    return () => {
      if (shouldListen) {
        listeners = listeners.filter(
          (listener: Function) => listener !== setState
        );
      }
    };
  }, [store, shouldListen]);

  return {
    store,
    dispatch,
    dispatchMultiple,
  };
};

export default useStore;
