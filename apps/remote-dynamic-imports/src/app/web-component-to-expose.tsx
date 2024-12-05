import { createRoot, type Root } from 'react-dom/client';
import { ComponentToExpose } from './component-to-expose';

export interface ComponentToExposeAttributes {
  locale: string;
}

export interface ComponentToExposeProperties {
  onAddClick?: () => void;
}

export class ComponentToExposeElement extends HTMLElement {
  #reactRoot: Root | undefined;
  #properties: ComponentToExposeProperties = {};

  constructor() {
    super();
    this.#onPropertyChange(['onAddClick'], () => this.#render());
  }

  #render(): void {
    const locale = this.getAttribute('locale');

    if (!this.#reactRoot || !locale) {
      return;
    }

    this.#reactRoot.render(
      <ComponentToExpose
        locale={locale}
        onAddClick={this.#properties.onAddClick}
      />
    );
  }

  connectedCallback(): void {
    if (!this.#reactRoot) {
      this.#reactRoot = createRoot(this);
      this.#render();
    }
  }

  attributeChangedCallback(): void {
    this.#render();
  }

  disconnectedCallback(): void {
    this.#reactRoot?.unmount();
    this.#reactRoot = undefined;
  }

  #onPropertyChange(
    names: (keyof ComponentToExposeProperties)[],
    callback: () => void
  ) {
    names.forEach((name) => {
      Object.defineProperty(this, name, {
        get() {
          return this.#properties[name];
        },
        set(value) {
          this.#properties[name] = value;
          callback();
        },
      });
    });
  }
}

customElements.define('component-to-expose', ComponentToExposeElement);
