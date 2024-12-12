import { loadRemote } from '@module-federation/enhanced/runtime';
import React, { FC, lazy } from 'react';

export function createDynamicImportsComponentFromRuntimeElement<
  ComponentProps
>({
  runtimeElementsHref,
  contextPath,
  getterMethodName,
  tagName,
}: {
  runtimeElementsHref?: string;
  contextPath?: string;
  getterMethodName: string;
  tagName: string;
}): FC<ComponentProps> {
  const { createComponent } = require('@lit/react');
  return lazy(async () => {
    const path = [
      runtimeElementsHref?.startsWith('/') && contextPath,
      runtimeElementsHref,
    ]
      .filter(Boolean)
      .join('');
    const elements = await import(/* webpackIgnore: true */ path);
    return {
      default: createComponent({
        react: React,
        elementClass: await elements[getterMethodName](),
        tagName,
      }),
    };
  }) as FC<ComponentProps>;
}

export function createMFComponentFromRuntimeElement<ComponentProps>({
  runtimeElementsHref,
  contextPath,
  getterMethodName,
  tagName,
}: {
  runtimeElementsHref?: string;
  contextPath?: string;
  getterMethodName: string;
  tagName: string;
}): FC<ComponentProps> {
  const { createComponent } = require('@lit/react');
  return lazy(async () => {
    const path = [
      runtimeElementsHref?.startsWith('/') && contextPath,
      runtimeElementsHref,
    ]
      .filter(Boolean)
      .join('');
    const elements = await loadRemote(path);
    return {
      default: createComponent({
        react: React,
        //@ts-expect-error Fix type error
        elementClass: await elements[getterMethodName](),
        tagName,
      }),
    };
  }) as FC<ComponentProps>;
}

//TODO: This is the module exposed with MF that I want to consume as Dynamic Imports, if possible.
// Basically it should be doing this:

// const RemoteReactComponentAsDynamicImport = lazy(async () => {
//   const module = await import('remoteModuleFederation/DynamicImportsModule');

//   const element = (await module.getComponentToExposeElementV1()) as FC<any>;
//   return {
//     default: element,
//   };
// });
export function createMFComponentFromRuntime<ComponentProps>({
  runtimeElementsHref,
  contextPath,
  getterMethodName,
  tagName,
}: {
  runtimeElementsHref?: string;
  contextPath?: string;
  getterMethodName: string;
  tagName: string;
}): FC<ComponentProps> {
  return lazy(async () => {
    const path = [
      runtimeElementsHref?.startsWith('/') && contextPath,
      runtimeElementsHref,
    ]
      .filter(Boolean)
      .join('');
    const elements = await loadRemote(path);

    //@ts-expect-error Fix types
    const element = await elements[getterMethodName]();

    return {
      default: element,
    };
  }) as FC<ComponentProps>;
}
