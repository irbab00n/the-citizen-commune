export interface RouteConfig {
  [key: string]: any;
  endpoint: string;
  name: string;
  component: Function;
  exact: boolean;
}
