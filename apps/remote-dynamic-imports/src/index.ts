export async function getComponentToExposeElementV1(): Promise<unknown> {
  const { ComponentToExposeElement } = await import(
    './app/web-component-to-expose'
  );
  return ComponentToExposeElement;
}

const modules = {
  getComponentToExposeElementV1,
};

export default modules;
