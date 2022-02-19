import React from 'react';
import './SidebarNavigation.scss';
import { SidebarNavigationProps } from './types';

// SUBCOMPONENTS
import SidebarNavigationToggle from './subcomponents/SidebarNavigationToggle';

// UTILS
import useStore, { initStore } from '../../hooks/useStore';

const actionTypes = {
  SET_SIDEBARNAVIGATION_EXPANDED: 'SET_SIDEBARNAVIGATION_EXPANDED',
};

const actions = {
  [actionTypes.SET_SIDEBARNAVIGATION_EXPANDED]: (
    store: any,
    payload: boolean
  ) => {
    store.ui.sidebarNavigation.expanded = payload;
    return store;
  },
};

const initialState = {
  ui: {
    sidebarNavigation: {
      expanded: false,
    },
  },
};

initStore(actions, initialState);

const SidebarNavigation = (props: SidebarNavigationProps) => {
  const { pages } = props;

  const { store, dispatch } = useStore();

  return (
    <div
      className={`SidebarNavigation ${
        store?.ui?.sidebarNavigation?.expanded ? ' expanded' : ''
      }`}
    >
      <ul className="SidebarNavigation__List">
        {pages.map((page: any) => {
          return <li>{page.name}</li>;
        })}
      </ul>
      <SidebarNavigationToggle
        onClick={() => {
          dispatch(
            actionTypes.SET_SIDEBARNAVIGATION_EXPANDED,
            !store?.ui?.sidebarNavigation?.expanded
          );
        }}
        isExpanded={store?.ui?.sidebarNavigation?.expanded}
      />
    </div>
  );
};

export default SidebarNavigation;
