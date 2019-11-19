import React, { useEffect, useState } from 'react';
import Events from 'common/events';
import '@material/mwc-button';

function PayButton(props) {
  const [purchasedState, setPurchasedState] = useState('idle');
  const isPurchased = purchasedState === 'purchased';

  useEffect(() => {
    Events.subscribe('payment:product-purchased', onPurchased);

    return () => {
      Events.unsubscribe('payment:fetching');
      Events.unsubscribe('payment:complete');
      Events.unsubscribe('payment:failure');
    }
  }, []);

  function onPurchased(e) {
    if (e.product.id === props.productId) {
      setPurchasedState('purchased');
    }
  }

  function onClick() {
    Events.dispatch('payment:load-product', {
      productId: props.productId
    });
  }

  return (
    <mwc-button
      dense
      unelevated
      onClick={!isPurchased ? onClick : undefined}
      style={isPurchased ? {'--mdc-theme-primary': '#4caf50'} : {}}>

      {props.text}
    </mwc-button>
  );
}

export default PayButton;
