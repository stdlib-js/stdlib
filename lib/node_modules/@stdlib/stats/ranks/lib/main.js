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

// MODULES //

var isCollection = require( '@stdlib/assert/is-collection' );
var contains = require( '@stdlib/assert/contains' );
var sum = require( './sum.js' );
var order = require( './order.js' );
var isMissing = require( './is_missing.js' );
var validate = require( './validate.js' );


// MAIN //

/**
* Computes the sample ranks for the values of an array-like object.
*
* @param {Collection} x - data array
* @param {Object} [options] - options object
* @param {string} [options.method='average'] - method name determining how ties are treated
* @param {string} [options.missing='last'] - determines where missing values go (`first`,`last`, or `remove`)
* @param {Array} [options.encoding=[null,NaN]] - array of values encoding missing values
* @throws {TypeError} first argument has to be an array-like object
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Array} array containing the computed ranks for the elements of x
*
* @example
* var arr = [ 1.1, 2.0, 3.5, 0.0, 2.4 ];
* var out = ranks( arr );
* // returns [ 2, 3, 5, 1, 4 ]
*
* @example
* // Ties are averaged:
* arr = [ 2, 2, 1, 4, 3 ];
* out = ranks( arr );
* // returns [ 2.5, 2.5, 1, 5, 4 ]
*
* @example
* // Missing values are placed last:
* arr = [ null, 2, 2, 1, 4, 3, NaN, NaN ];
* out = ranks( arr );
* // returns [ 6, 2.5, 2.5, 1, 5, 4, 7 ,8 ]
*/
function ranks( x, options ) {
	var missingIndices;
	var noDuplicates;
	var countMissing;
	var totalNoTies;
	var finalRanks;
	var encoding;
	var iPlusOne;
	var ordered;
	var missing;
	var tieRank;
	var method;
	var ranks;
	var opts;
	var xnew;
	var err;
	var n;
	var i;
	var j;

	if ( !isCollection( x ) ) {
		throw new TypeError( 'invalid argument. First argument `x` must be an array-like object. Value: `' + x + '`.' );
	}
	opts = {};
	if ( arguments.length > 1 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	method = opts.method || 'average';
	encoding = opts.encoding || [ null, NaN ];
	missing = opts.missing || 'last';

	n = x.length;
	xnew = [];
	for ( i = 0; i < n; i++ ) {
		if ( !contains( encoding, x[ i ] ) ) {
			xnew.push( x[ i ] );
		}
	}
	missingIndices = isMissing( x, encoding );
	n = xnew.length;
	totalNoTies = 0;
	ranks = new Array( n );
	ordered = order( xnew );

	if ( method === 'ordinal' ) {
		for ( i = 0; i < n; i++ ) {
			ranks[ ordered[ i ] ] = i + 1;
		}
	} else {
		noDuplicates = 0;
		for ( i = 0; i < n; i++ ) {
			iPlusOne = i + 1;
			if (
				( i === n - 1 ) ||
				( xnew[ ordered[i] ] !== xnew[ ordered[ iPlusOne ] ] )
			) {
				switch ( method ) {
				case 'average':
				default:
					tieRank = iPlusOne - ( 0.5 * noDuplicates );
					break;
				case 'min':
					tieRank = iPlusOne - noDuplicates;
					break;
				case 'max':
					tieRank = iPlusOne;
					break;
				case 'dense':
					tieRank = iPlusOne - noDuplicates - totalNoTies;
					totalNoTies += noDuplicates;
					break;
				}
				for ( j = i - noDuplicates; j < iPlusOne; j++ ) {
					ranks[ ordered[ j ] ] = tieRank;
				}
				noDuplicates = 0;
			} else {
				noDuplicates += 1;
			}
		}
	}

	if ( missing === 'first' ) {
		countMissing = sum( missingIndices );
		j = 1;
		finalRanks = new Array( missingIndices.length );
		for ( i = 0; i < missingIndices.length; i++ ) {
			if ( missingIndices[ i ] ) {
				finalRanks[ i ] = j;
				j += 1;
			} else {
				finalRanks[ i ] = ranks.shift() + countMissing;
			}
		}
		return finalRanks;
	}
	if ( missing === 'last' ) {
		finalRanks = new Array( missingIndices.length );
		for ( i = 0; i < missingIndices.length; i++ ) {
			if ( missingIndices[ i ] ) {
				finalRanks[ i ] = i + ranks.length + 1;
			} else {
				finalRanks[ i ] = ranks.shift();
			}
		}
		return finalRanks;
	}
	// Case: missing = 'remove'
	return ranks;
}


// EXPORTS //

module.exports = ranks;
