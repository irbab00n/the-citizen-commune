import React from 'react';
import { RouteConfig } from "../../interfaces/RouteConfig";

export interface SidebarNavigationProps {
  pages: RouteConfig[];
}

export interface SidebarNavigationToggleProps {
  [key: string]: React.MouseEventHandler | boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isExpanded: boolean
}
