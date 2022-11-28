import {
  CommonActions,
  NavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import React from 'react';
import {RootStackRoutes} from './types';

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

export function navigate(name: string, params?: any, merge?: boolean) {
  if (merge) {
    navigationRef.current?.navigate<any>({name, params, merge});
  } else {
    navigationRef.current?.navigate(name, params);
  }
}

export const pop = (number?: number) => {
  navigationRef.current?.dispatch(StackActions.pop(number));
};

export const popToTop = () => {
  navigationRef.current?.dispatch(StackActions.popToTop());
};

export const goBack = () => {
  navigationRef.current?.goBack();
};

export function replace(name: keyof RootStackRoutes, params?: any) {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}

export function push(name: keyof RootStackRoutes, params?: any) {
  navigationRef.current?.dispatch(StackActions.push(name, params));
}

export const navigateAndReset = (
  routes: {name: string; params?: any; key?: string}[],
  index: number,
) => {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index,
      routes,
    }),
  );
};
