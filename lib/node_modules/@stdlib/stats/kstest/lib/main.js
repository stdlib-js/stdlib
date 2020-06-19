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

var isTypedArrayLike = require( '@stdlib/assert/is-typed-array-like' );
var isNumber = require( '@stdlib/assert/is-number' );
var isNumberArray = require( '@stdlib/assert/is-number-array' ).primitives;
var setReadOnly = require( '@stdlib/utils/define-read-only-property' );
var isFunction = require( '@stdlib/assert/is-function' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isnan = require( '@stdlib/assert/is-nan' );
var max = require( '@stdlib/stats/base/max' );
var pKolmogorov1 = require( './smirnov.js' );
var pKolmogorov = require( './marsaglia.js' );
var ascending = require( './ascending.js' );
var subtract = require( './subtract.js' );
var validate = require( './validate.js' );
var getCDF = require( './get_cdf.js' );
var print = require( './print.js' ); // eslint-disable-line stdlib/no-redeclare


// FUNCTIONS //

var slice = Array.prototype.slice;


// MAIN //

/**
* Computes a Kolmogorov-Smirnov goodness-of-fit test.
*
* @param {NumericArray} x - input array holding numeric values
* @param {(Function|string)} y - either a CDF function or a string denoting the name of a distribution
* @param {...number} [params] - distribution parameters passed to reference CDF
* @param {Options} [options] - function options
* @param {number} [options.alpha=0.05] - significance level
* @param {boolean} [options.sorted=false] - boolean indicating if the input array is already in sorted order
* @param {string} [options.alternative="two-sided"] - string indicating whether to conduct two-sided or one-sided hypothesis test (other options: `less`, `greater`)
* @throws {TypeError} argument x has to be a typed array or array of numbers
* @throws {TypeError} argument y has to be a CDF function or string
* @throws {TypeError} options has to be simple object
* @throws {TypeError} alpha option has to be a number primitive
* @throws {RangeError} alpha option has to be a number in the interval `[0,1]`
* @throws {TypeError} alternative option has to be a string primitive
* @throws {Error} alternative option must be `two-sided`, `less` or `greater`
* @throws {TypeError} sorted option has to be a boolean primitive
* @returns {Object} test result object
*
* @example
* var out = kstest( [ 2.0, 1.0, 5.0, -5.0, 3.0, 0.5, 6.0 ], 'normal', 0.0, 1.0 );
* // returns { 'pValue': ~0.015, 'statistic': ~0.556, ... }
*/
function kstest() {
	var nDistParams;
	var distParams;
	var distArgs;
	var options;
	var alpha;
	var opts;
	var pval;
	var stat;
	var yVal;
	var alt;
	var err;
	var idx;
	var out;
	var val;
	var i;
	var n;
	var x;
	var y;

	x = arguments[ 0 ];
	y = arguments[ 1 ];
	if ( !isNumberArray( x ) && !isTypedArrayLike( x ) ) {
		throw new TypeError( 'invalid argument. First argument must be a typed array or number array. Value: `' + x + '`.' );
	}
	if ( !isFunction( y ) && !isString( y ) ) {
		throw new TypeError( 'invalid argument. Second argument must be either a CDF function or a string primitive. Value: `' + y + '`' );
	}
	if ( isString( y ) ) {
		y = getCDF( y );
	}
	nDistParams = y.length - 1.0;
	n = x.length;

	distParams = new Array( nDistParams );
	for ( i = 0; i < nDistParams; i++ ) {
		idx = i + 2;
		val = arguments[ idx ];
		if ( !isNumber( val ) || isnan( val ) ) {
			throw new TypeError( 'invalid argument. Distribution parameter must be a number primitive. Value: `' + val + '`.' );
		}
		distParams[ i ] = arguments[ idx ];
	}
	opts = {};
	if ( arguments.length > 2 + nDistParams ) {
		options = arguments[ 2 + nDistParams ];
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	// Make a copy to prevent mutation of x:
	x = slice.call( x );

	if ( opts.alpha === void 0 ) {
		alpha = 0.05;
	} else {
		alpha = opts.alpha;
	}
	if ( alpha < 0.0 || alpha > 1.0 ) {
		throw new RangeError( 'invalid argument. Option `alpha` must be a number in the range 0 to 1. Value: `' + alpha + '`.' );
	}

	// Input data has to be sorted:
	if ( opts.sorted !== true ) {
		x.sort( ascending );
	}
	distArgs = [ null ].concat( distParams );
	for ( i = 0; i < n; i++ ) {
		distArgs[ 0 ] = x[ i ];
		yVal = y.apply( null, distArgs );
		x[ i ] = yVal - ( i / n );
	}

	alt = opts.alternative || 'two-sided';
	switch ( alt ) {
	case 'two-sided':
		stat = max( n, [ max( n, x, 1 ), max( n, subtract( 1/n, x ), 1 ) ], 1 );
		break;
	case 'greater':
		stat = max( n, subtract( 1/n, x ), 1 );
		break;
	case 'less':
		stat = max( n, x, 1 );
		break;
	default:
		throw new Error( 'Invalid option. `alternative` must be either `two-sided`, `less` or `greater`. Value: `' + alt + '`' );
	}
	if ( alt === 'two-sided' ) {
		pval = 1.0 - pKolmogorov( stat, n );
	} else {
		pval = 1.0 - pKolmogorov1( stat, n );
	}

	out = {};
	setReadOnly( out, 'rejected', pval <= alpha );
	setReadOnly( out, 'alpha', alpha );
	setReadOnly( out, 'pValue', pval );
	setReadOnly( out, 'statistic', stat );
	setReadOnly( out, 'method', 'Kolmogorov-Smirnov goodness-of-fit test' );
	setReadOnly( out, 'print', print );
	setReadOnly( out, 'alternative', alt );
	return out;
}


// EXPORTS //

module.exports = kstest;
