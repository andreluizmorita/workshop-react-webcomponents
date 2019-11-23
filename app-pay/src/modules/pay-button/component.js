import React, { useEffect, useState, Fragment } from 'react';
import Events from 'common/events';
import '@material/mwc-button';

import styles from './styles.css';

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
    <Fragment>
      <style>{styles.toString()}</style>
      <mwc-button
        dense
        unelevated
        onClick={!isPurchased ? onClick : undefined}
        class={isPurchased ? 'button-purchased' : ''}>

        {props.text}
      </mwc-button>
    </Fragment>
  );
}

export default PayButton;
