import { PropsWithChildren } from 'react';

type Props = {
  locale: string;
  onAddClick?: () => void;
};

export const ComponentToExpose = (props: PropsWithChildren<Props>) => {
  return <div>Component to expose</div>;
};
