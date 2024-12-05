import { createLazyComponentFromRuntimeElement } from './create-runtime-component';

//Static types, these should come from a package or other sharing mechanism
export type ComponentToConsumeProps = {
  locale: string;
  onAddClick?: () => void;
};

export const LazyComponentToConsumeWeb =
  createLazyComponentFromRuntimeElement<ComponentToConsumeProps>({
    runtimeElementsHref: 'http://localhost:4201/main.js',
    // contextPath: '',
    getterMethodName: 'getComponentToExposeElementV1',
    tagName: 'component-to-expose',
  });

export const LazyComponentToConsume = (props: ComponentToConsumeProps) => {
  return <div>Lazy component</div>;
};

export default LazyComponentToConsume;
