export async function getComponentToExposeElementV1(): Promise<unknown> {
  const { ComponentToExpose } = await import('./component-to-expose');
  return ComponentToExpose;
}

export async function getComponentToExposeElementV2(): Promise<unknown> {
  const { ComponentToExposeElement } = await import(
    './web-component-to-expose'
  );
  return ComponentToExposeElement;
}

const modules = {
  getComponentToExposeElementV1,
  getComponentToExposeElementV2,
};

export default modules;
