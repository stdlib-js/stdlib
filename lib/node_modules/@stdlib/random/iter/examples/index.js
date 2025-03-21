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

'use strict';

var roundn = require( '@stdlib/math/base/special/roundn' );
var mean = require( '@stdlib/stats/base/mean' );
var iter = require( './../lib' );

var initialPrice = 100.0;
var currentPrice = initialPrice;
var numDays = 30;
var volatility = 0.02; // 2% daily volatility

// Create iterator for random price movements:
var priceIter = iter.normal( 0.0, volatility );
var prices = [ initialPrice ];
var dailyReturns = [];

// Simulate price movements:
var change;
var i;
for ( i = 0; i < numDays; i++ ) {
	change = priceIter.next().value;
	currentPrice *= ( 1.0 + change );
	prices.push( roundn( currentPrice, -2 ) );
	dailyReturns.push( change * 100.0 );
}

// Calculate summary statistics:
var totalReturn = ( ( currentPrice - initialPrice ) / initialPrice ) * 100.0;
var avgReturn = mean( numDays, dailyReturns, 1 );

// Print results:
console.log( 'Stock Price Simulation Results:' );
console.log( '-------------------------------' );
console.log( 'Initial Price: $%d', initialPrice );
console.log( 'Final Price: $%d', roundn( currentPrice, -2 ) );
console.log( 'Total Return: %d%', roundn( totalReturn, -2 ) );
console.log( 'Average Daily Return: %d%', roundn( avgReturn, -2 ) );
console.log( '\nPrice History:' );
console.log( prices.join( ' → ' ) );
