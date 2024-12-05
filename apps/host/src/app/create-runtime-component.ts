import React, { FC, lazy } from 'react';

export function createLazyComponentFromRuntimeElement<ComponentProps>({
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
  const { createComponent } = require('@lit-labs/react');
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
