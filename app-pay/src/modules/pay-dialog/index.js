import React from 'react';
import ReactDOM from 'react-dom';
import PayDialogComponent from './component';

class PayDialog extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    ReactDOM.render(<PayDialogComponent />, this.shadowRoot);
  }
}

customElements.define('pay-dialog', PayDialog);
