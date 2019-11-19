import React, { useRef, Fragment, useState, useEffect } from 'react';
import Events from 'common/events';

import products from 'common/data.json';
import '@material/mwc-dialog';

function PayDialog() {
  const [product, setProduct] = useState(undefined);
  const [open, setOpen] = useState(false);
  const dialogRef = useRef();

  function openDialog(e) {
    setOpen(true);
  }

  function closeDialog(e) {
    setOpen(false);
    setProduct(undefined);
  }

  function loadProduct(e) {
    openDialog();

    const product = products.find(product => product.id === e.productId);
    setProduct(product);
  }

  function buyProduct() {
    Events.dispatch('payment:product-purchased', { product });
  }

  function handleEvents() {
    const dialog = dialogRef.current;

    Events.subscribe('payment:load-product', loadProduct);
    Events.subscribe('payment:close-dialog', closeDialog);

    dialog.addEventListener('opened', openDialog);
    dialog.addEventListener('closed', closeDialog);

    return () => {
      Events.unsubscribe('payment:load-product');
      Events.unsubscribe('payment:close-dialog');

      dialog.removeEventListener('opened', openDialog);
      dialog.removeEventListener('closed', closeDialog);
    }
  }

  useEffect(handleEvents, []);

  return (
    <mwc-dialog ref={dialogRef} heading="Privacy Policy" {...(open && { open })}>
      <div>
        {product &&
          <Fragment>
            <span>{product.name}</span>
          </Fragment>
        }
      </div>

      <mwc-button slot="primaryAction" dialogAction="accept" onClick={buyProduct}>
        Buy
      </mwc-button>
      <mwc-button slot="secondaryAction" dialogAction="cancel">
        Cancel
      </mwc-button>
    </mwc-dialog>
  );
}

export default PayDialog;
