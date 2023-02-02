import type { RouteMeta, RouteRecordRaw } from "vue-router";
import type { DefineComponent } from "vue";

export type Component<T = any> =
  | DefineComponent
  | (() => Promise<typeof import("*.vue")>)
  | (() => Promise<T>);

export type AppRouteMeta = RouteMeta &
  Partial<{
    title: string;
    hiddenMenu: boolean;
    hiddenChildrenInMenu: boolean;
  }>;

// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, "meta"> {
  name: string;
  meta: AppRouteMeta;
  component?: Component | string;
  components?: Component;
  children?: AppRouteRecordRaw[];
  props?: Recordable;
  fullPath?: string;
}

export interface Menu {
  name: string;
  path: string;
  children?: Menu[];
  mata?: AppRouteMeta;
  hiddenMenu?: boolean;
  _parentName?: string;
  _fullPath: string;
  _depth: number;
}

export type AppRouteModule = AppRouteRecordRaw;
