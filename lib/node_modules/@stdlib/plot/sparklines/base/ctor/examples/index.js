/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable no-restricted-syntax, no-underscore-dangle */

'use strict';

var inherit = require( '@stdlib/utils/inherit' );
var Sparkline = require( './../lib' );

// Define a chart constructor:
function Chart( opts ) {
	if ( opts === void 0 ) {
		opts = {};
	}
	// Call the parent constructor:
	Sparkline.call( this, opts );

	return this;
}

// Inherit from the Sparkline constructor:
inherit( Chart, Sparkline );

// Implement a custom render method:
Chart.prototype._render = function render() {
	var str;
	var i;

	str = '';
	for ( i = 0; i < this._data.length; i++ ) {
		if ( this._data[ i ] > 0 ) {
			str += '↑';
		} else {
			str += '↓';
		}
	}
	return str;
};

// Create a new chart instance:
var chart = new Chart();

// Set chart data:
chart.data = [ 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0 ];

// Render the chart:
console.log( chart.render() );
// => '↑↓↓↑↓↑↑↑↓↑↑↓↓'
