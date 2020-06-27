/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

// MODULES //

var isProbabilityArray = require( '@stdlib/assert/is-probability-array' );
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var bonferroni = require( './bonferroni.js' );
var hommel = require( './hommel.js' );
var holm = require( './holm.js' );
var bh = require( './bh.js' );
var by = require( './by.js' );


// VARIABLES //

var METHODS = [ 'bh', 'bonferroni', 'by', 'holm', 'hommel' ];


// MAIN //

/**
* Adjusts supplied p-values for multiple comparisons via a specified method.
*
* @param {ProbabilityArray} pvals - p-values to be adjusted
* @param {string} method - correction method
* @param {PositiveInteger} [comparisons=pvals.length] - number of comparisons
* @throws {TypeError} first argument has to be an array-like object
* @throws {TypeError} second argument must be a string primitive
* @throws {Error} second argument must be `bh`, `bonferroni`, `by`, `holm`, or `hommel`
* @throws {RangeError} comparisons must be greater or equal to the number of elements in `pvals`
* @returns {ProbabilityArray} array containing the corrected p-values
*
* @example
* var pvalues = [ 0.008, 0.03, 0.123, 0.6, 0.2 ];
* var out = padjust( pvalues, 'bonferroni' );
* // returns [ 0.04, 0.15, ..., 1, 1 ]
*
* @example
* var pvalues = [ 0.008, 0.03, 0.123, 0.6, 0.2 ];
* var out = padjust( pvalues, 'by' );
* // returns [ ~0.091, ~0.171, ..., 1, ~0.571 ]
*
* @example
* var pvalues = [ 0.008, 0.03, 0.123, 0.6, 0.2 ];
* var out = padjust( pvalues, 'bh' );
* // returns [ 0.04, 0.075, ..., 0.6, 0.25 ]
*
* @example
* var pvalues = [ 0.008, 0.03, 0.123, 0.6, 0.2 ];
* var out = padjust( pvalues, 'holm' );
* // returns [ 0.04, 0.12, ..., 0.6, 0.4 ]
*
* @example
* var pvalues = [ 0.008, 0.03, 0.123, 0.6, 0.2 ];
* var out = padjust( pvalues, 'hommel' );
* // returns [ 0.032, 0.12, ..., 0.6, 0.4 ]
*/
function padjust( pvals, method, comparisons ) {
	if ( !isProbabilityArray( pvals ) ) {
		throw new TypeError( 'invalid argument. First argument must be an array of probabilities. Value: `' + pvals + '`.' );
	}
	if ( !isString( method ) ) {
		throw new TypeError( 'invalid argument. Second argument must be a string primitive. Value: `' + method + '`.' );
	}
	if ( arguments.length > 2 ) {
		if ( !isInteger( comparisons ) ) {
			throw new TypeError( 'invalid argument. `comparisons` must be an integer. Value: `' + comparisons + '`.' );
		}
		if ( comparisons < pvals.length ) {
			throw new RangeError( 'invalid argument. When specified, `comparisons` arguments must have at least a length of '+pvals.length+'. Value: `' + comparisons + '`.' );
		}
	}
	comparisons = comparisons || pvals.length;
	switch ( method ) {
	case 'bonferroni':
		return bonferroni( pvals, comparisons );
	case 'by':
		return by( pvals, comparisons );
	case 'bh':
		return bh( pvals, comparisons );
	case 'holm':
		return holm( pvals, comparisons );
	case 'hommel':
		return hommel( pvals, comparisons );
	default:
		throw new Error( 'invalid argument. Second argument must be one of '+METHODS.join( ', ' )+' Value: `' + method + '`.' );
	}
}


// EXPORTS //

module.exports = padjust;
