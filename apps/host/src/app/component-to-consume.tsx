import {
  createDynamicImportsComponentFromRuntimeElement,
  createMFComponentFromRuntime,
} from './create-runtime-component';

//Static types, these should come from a package or other sharing mechanism
export type ComponentToConsumeProps = {
  locale: string;
  onAddClick?: () => void;
};

//TODO: ignore for now, this is used to consume WebComponents
export const WebComponentToConsume =
  createDynamicImportsComponentFromRuntimeElement<ComponentToConsumeProps>({
    runtimeElementsHref: 'http://localhost:4202/main.js',
    // contextPath: '',
    getterMethodName: 'getComponentToExposeElementV2',
    tagName: 'component-to-expose',
  });

export const ReactComponentToConsume =
  createMFComponentFromRuntime<ComponentToConsumeProps>({
    // TODO: This is the the thing I need to fix, can a consumer import a file directly?
    // runtimeElementsHref: 'http://localhost:4202/main.js',
    runtimeElementsHref: 'remoteModuleFederation/DynamicImportsModule',
    // contextPath: '',
    getterMethodName: 'getComponentToExposeElementV1',
    tagName: 'component-to-expose',
  });
