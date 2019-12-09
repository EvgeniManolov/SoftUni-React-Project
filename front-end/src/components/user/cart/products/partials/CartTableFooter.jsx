import React from 'react';

import { CART, CURRENCY } from '../../../../../data/constants/componentConstants';

class CartTableFooter extends React.Component {
	constructor (props) {
		super(props);
	}
	render() {

		let totalSum = this.props.totalSum;

		return (
			<div className="table-footer">

				{CART.totalSum}<span className="total-sum">{totalSum}&nbsp;{CURRENCY}</span>

			</div>
		);
	}
}

export default CartTableFooter;
