/* eslint-disable max-statements, max-lines-per-function */

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

var isNumberArray = require( '@stdlib/assert/is-number-array' ).primitives;
var isTypedArrayLike = require( '@stdlib/assert/is-typed-array-like' );
var setReadOnly = require( '@stdlib/utils/define-read-only-property' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var ranks = require( '@stdlib/stats/ranks' );
var normalCDF = require( '@stdlib/stats/base/dists/normal/cdf' ).factory;
var signrankCDF = require( '@stdlib/stats/base/dists/signrank/cdf' );
var tabulate = require( '@stdlib/utils/tabulate' );
var signum = require( '@stdlib/math/base/special/signum' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var abs = require( '@stdlib/math/base/special/abs' );
var Float64Array = require( '@stdlib/array/float64' );
var validate = require( './validate.js' );
var unique = require( './unique.js' );
var print = require( './print.js' ); // eslint-disable-line stdlib/no-redeclare


// VARIABLES //

var pnorm = normalCDF( 0.0, 1.0 );


// MAIN //

/**
* Computes a Wilcoxon signed rank test.
*
* @param {NumericArray} x - data array
* @param {NumericArray} [y] - optional paired data array
* @param {Options} [options] - function options
* @param {number} [options.alpha=0.05] - significance level
* @param {string} [options.alternative='two-sided'] - alternative hypothesis (`two-sided`, `less`, or `greater`)
* @param {string} [options.zeroMethod='wilcox'] - method governing how zero-differences are handled (`pratt`, `wilcox`, or `zsplit`)
* @param {boolean} [options.correction=true] - continuity correction adjusting the Wilcoxon rank statistic by 0.5 towards the mean
* @param {boolean} [options.exact=false] - whether to force using the exact distribution instead of a normal approximation when there are more than fifty data points
* @param {number} [options.mu=0] - location parameter under H0
* @throws {TypeError} `x` must be a numeric array
* @throws {TypeError} `y` must be a numeric array
* @throws {TypeError} options has to be simple object
* @throws {TypeError} `alpha` option has to be a number primitive
* @throws {RangeError} `alpha` option has to be a number in the interval `[0,1]`
* @throws {TypeError} `alternative` option has to be a string primitive
* @throws {Error} `alternative` option must be `two-sided`, `less`, or `greater`
* @throws {TypeError} `zeroMethod` option has to be a string primitive
* @throws {Error} `zeroMethod` option must be `pratt`, `wilcox`, or `zsplit`
* @throws {TypeError} `correction` option has to be a boolean primitive
* @throws {TypeError} `exact` option has to be a boolean primitive
* @throws {TypeError} `mu` option has to be a number primitive
* @returns {Object} test result object
*
* @example
* var x = [ 6, 8, 14, 16, 23, 24, 28, 29, 41, -48, 49, 56, 60, -67, 75 ];
* var out = wilcoxon( x, {
*     'mu': 2
* });
*
* @example
* var x = [ 6, 8, 14, 16, 23, 24, 28, 29, 41, -48, 49, 56, 60, -67, 75 ];
* var out = wilcoxon( x, {
*     'alternative': 'greater'
* });
*/
function wilcoxon() {
	var correction;
	var zeroMethod;
	var options;
	var hasTies;
	var counts;
	var repsum;
	var rplus;
	var nzero;
	var rzero;
	var alpha;
	var pval;
	var opts;
	var stat;
	var alt;
	var err;
	var len;
	var tmp;
	var out;
	var ad;
	var mu;
	var mn;
	var se;
	var d;
	var i;
	var r;
	var T;
	var v;
	var x;
	var y;

	x = arguments[ 0 ];
	if ( !isTypedArrayLike( x ) && !isNumberArray( x ) ) {
		throw new TypeError( 'invalid argument. First argument must be a numeric array. Value: `' + x + '`.' );
	}
	len = x.length;
	if ( arguments.length > 1 ) {
		if ( isObject( arguments[ 1 ] ) ) {
			options = arguments[ 1 ];
		} else {
			y = arguments[ 1 ];
			if ( !isTypedArrayLike( y ) && !isNumberArray( y ) ) {
				throw new TypeError( 'invalid argument. `y` argument must be a numeric array. Value: `' + y + '`.' );
			}
			if ( len !== y.length ) {
				throw new Error( 'invalid arguments. The first and second arguments must have the same length.' );
			}
			if ( arguments.length > 2 ) {
				options = arguments[ 2 ];
			}
		}
	}
	opts = {};
	if ( options ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	mu = opts.mu || 0.0;
	if ( opts.correction === void 0 ) {
		correction = true;
	} else {
		correction = opts.correction;
	}
	if ( opts.alpha === void 0 ) {
		alpha = 0.05;
	} else {
		alpha = opts.alpha;
	}
	if ( len < 2 ) {
		throw new Error( 'invalid argument. First argument must contain at least two elements. Value: `' + x + '`' );
	}
	alt = opts.alternative || 'two-sided';
	zeroMethod = opts.zeroMethod || 'wilcox';

	if ( zeroMethod === 'wilcox' ) {
		// Only keep all non-zero differences:
		d = [];
		if ( y ) {
			for ( i = 0; i < len; i++ ) {
				v = ( x[ i ] - y[ i ] ) - mu;
				if ( v !== 0 ) {
					d.push( v );
				}
			}
		} else {
			for ( i = 0; i < len; i++ ) {
				if ( x[ i ] !== 0 ) {
					d.push( x[ i ] - mu );
				}
			}
		}
		nzero = x.length - d.length;
	} else {
		d = new Float64Array( len );
		nzero = 0;
		if ( y ) {
			for ( i = 0; i < len; i++ ) {
				d[ i ] = ( x[ i ] - y[ i ] ) - mu;
				if ( d[ i ] === 0 ) {
					nzero += 1;
				}
			}
		} else {
			for ( i = 0; i < len; i++ ) {
				d[ i ] = x[ i ] - mu;
				if ( d[ i ] === 0 ) {
					nzero += 1;
				}
			}
		}
	}
	if ( nzero === len ) {
		throw new Error( '`x` or `x - y` cannot be zero for all elements.' );
	}
	// Update length after potentially discarding zero values:
	len = d.length;
	ad = new Float64Array( len );
	for ( i = 0; i < len; i++ ) {
		ad[ i ] = abs( d[ i ] );
	}
	r = ranks( ad );
	rplus = 0;
	rzero = 0;
	for ( i = 0; i < len; i++ ) {
		if ( d[ i ] > 0 ) {
			rplus += r[ i ];
		}
		else if ( d[ i ] === 0 ) {
			rzero += r[ i ];
		}
	}
	hasTies = unique( r ).length !== r.length;
	if ( zeroMethod === 'zsplit' ) {
		rplus += rzero / 2.0;
	}
	T = rplus;
	mn = len * ( len + 1.0 ) * 0.25;
	se = len * ( len + 1.0 ) * ( ( 2.0 * len ) + 1.0 );

	if ( zeroMethod === 'pratt' ) {
		tmp = [];
		for ( i = 0; i < len; i++ ) {
			if ( d[ i ] !== 0 ) {
				tmp.push( r[ i ] );
			}
		}
		r = tmp;
		mn -= nzero * ( nzero + 1.0 ) * 0.25;
		se -= nzero * ( nzero + 1.0 ) * ( ( 2.0 * nzero ) + 1.0 );
	}
	counts = tabulate( r );
	repsum = 0;
	for ( i = 0; i < counts.length; i++ ) {
		if ( counts[ i ][ 1 ] > 1 ) {
			v = counts[ i ][ 1 ];
			repsum += v * ( (v*v) - 1 );
		}
	}
	if ( repsum > 0 ) {
		// Correction for repeated values:
		se -= 0.5 * repsum;
	}
	se = sqrt( se / 24.0 );

	if (
		( len > 50 && !opts.exact ) ||
		nzero > 0 ||
		hasTies
	) {
		d = 0.0;
		if ( correction ) {
			switch ( alt ) {
			case 'two-sided':
				d = 0.5 * signum( T - mn );
				break;
			case 'less':
				d = -0.5;
				break;
			default:
				d = 0.5;
				break;
			}
		}
		// Compute test statistic and p-value using normal approximation:
		stat = ( T - mn - d ) / se;
		if ( alt === 'two-sided' ) {
			pval = 2.0 * ( 1.0 - pnorm( abs( stat ) ) );
		} else if ( alt === 'greater' ) {
			pval = 1.0 - pnorm( stat );
		} else {
			pval = pnorm( stat );
		}
	} else {
		// Compute test statistic and p-value using exact critical values:
		stat = T;
		if ( alt === 'two-sided' ) {
			if ( stat > ( len * ( len+1 ) / 4 ) ) {
				pval = 2.0 * ( 1 - signrankCDF( stat - 1, len ) );
			} else {
				pval = 2.0 * signrankCDF( stat, len );
			}
		} else if ( alt === 'greater' ) {
			pval = 1.0 - signrankCDF( stat - 1, len );
		} else {
			pval = signrankCDF( stat, len );
		}
	}
	out = {};
	setReadOnly( out, 'rejected', pval <= alpha );
	setReadOnly( out, 'alpha', alpha );
	setReadOnly( out, 'pValue', pval );
	setReadOnly( out, 'statistic', T );
	setReadOnly( out, 'nullValue', mu );
	setReadOnly( out, 'alternative', alt );
	setReadOnly( out, 'method', ( ( y ) ? 'Paired' : 'One-Sample' ) + ' Wilcoxon signed rank test' );
	setReadOnly( out, 'print', print );
	return out;
}


// EXPORTS //

module.exports = wilcoxon;
