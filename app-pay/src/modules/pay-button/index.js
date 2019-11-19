import React from 'react';
import ReactDOM from 'react-dom';
import PayButtonComponent from './component';

class PayButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.onChangeAttributes();
  }

  static get observedAttributes() {
    return ['text', 'variant', 'color'];
  }

  attributeChangedCallback() {
    this.onChangeAttributes();
  }

  onChangeAttributes() {
    const productId = this.getAttribute('product-id');
    const text = this.getAttribute('text') || '';
    const variant = this.getAttribute('variant') || 'contained';
    const color = this.getAttribute('color') || 'primary';

    ReactDOM.render(<PayButtonComponent productId={productId} text={text} variant={variant} color={color}/>, this.shadowRoot);
  }
}

customElements.define('pay-button', PayButton);
