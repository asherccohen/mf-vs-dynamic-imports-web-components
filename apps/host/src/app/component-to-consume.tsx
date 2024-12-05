import { createLazyComponentFromRuntimeElement } from './create-runtime-component';

//Static types, these should come from a package or other sharing mechanism
type ComponentToConsumeProps = {
  locale: string;
  onAddClick?: () => void;
};

export const LazyComponentToConsume =
  createLazyComponentFromRuntimeElement<ComponentToConsumeProps>({
    runtimeElementsHref: process.env.REACT_APP_OPPORTUNITY_ELEMENTS_URL,
    contextPath: '/',
    getterMethodName: 'getComponentToExposeElementV1',
    tagName: 'component-to-expose',
  });
