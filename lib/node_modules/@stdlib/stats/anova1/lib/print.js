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

var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var roundn = require( '@stdlib/math/base/special/roundn' );
var repeat = require( '@stdlib/string/repeat' );
var max = require( '@stdlib/math/base/special/max' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;


// FUNCTIONS //

/**
* Returns n spaces.
*
* @private
* @param {integer} n - number of spaces
* @returns {string} n spaces
*/
function spaces( n ) {
	if ( n <= 0 ) {
		return '';
	}
	return repeat( ' ', n );
}


// MAIN //

/**
* Returns a function to pretty print test results.
*
* @private
* @param {Object} results - test results
* @returns {Function} pretty print function
*/
function prettyPrint( results ) {
	return print;

	/**
	* Pretty-print output of ANOVA.
	*
	* @private
	* @param {Object} [opts] - options object
	* @param {PositiveInteger} [opts.digits=4] - number of digits after the decimal point
	* @param {boolean} [opts.decision=true] - boolean indicating whether to print the test decision
	* @throws {TypeError} options argument must be an object
	* @throws {TypeError} must provide valid options
	* @returns {string} formatted results
	*/
	function print( opts ) {
		var statistic;
		var decision;
		var treatMS;
		var treatDF;
		var treatSS;
		var extra1;
		var extra2;
		var extra3;
		var errMS;
		var errDF;
		var errSS;
		var ndgts;
		var dgts;
		var str;

		dgts = 4;
		decision = true;
		if ( arguments.length > 0 ) {
			if ( !isObject( opts ) ) {
				throw new TypeError( 'invalid argument. First argument must be an options object. Value: `' + opts + '`.' );
			}
			if ( hasOwnProp( opts, 'digits' ) ) {
				if ( !isPositiveInteger( opts.digits ) ) {
					throw new TypeError( 'invalid option. `digits` option must be a positive integer. Option: `' + opts.digits + '`.' );
				}
				dgts = opts.digits;
			}
			if ( hasOwnProp( opts, 'decision' ) ) {
				if ( !isBoolean( opts.decision ) ) {
					throw new TypeError( 'invalid option. `decision` option must be a boolean primitive. Option: `' + opts.decision + '`.' );
				}
				decision = opts.decision;
			}
		}
		ndgts = -dgts;

		str = '';
		str += results.method;
		str += '\n\n';

		// Hypothesis
		str += 'Null Hypothesis: All Means Equal';
		str += '\n';
		str += 'Alternate Hypothesis: At Least one Mean not Equal';
		str += '\n\n';

		treatSS = roundn( results.treatment.ss, ndgts ).toString();
		errSS = roundn( results.error.ss, ndgts ).toString();
		treatMS = roundn( results.treatment.ms, ndgts ).toString();
		errMS = roundn( results.error.ms, ndgts ).toString();
		treatDF = results.treatment.df.toString();
		errDF = results.error.df.toString();
		statistic = roundn( results.statistic, ndgts ).toString();

		extra1 = max( max( treatDF.length, errDF.length ), 2 );
		extra2 = max( max( treatSS.length, errSS.length ), 2 );
		extra3 = max( max( treatMS.length, errMS.length ), 3 );

		// Formatted table
		str += '              ';
		str += 'df';
		str += spaces( 1 + extra1 );
		str += 'SS';
		str += spaces( 2 + extra2 );
		str += 'MS';
		str += spaces( 1 + extra3 );
		str += 'F Score';
		str += spaces( max( 7, statistic.length ) - 7 + 2 );
		str += 'P Value';
		str += '\n';

		// Now start adding in values
		str += 'Treatment';
		str += spaces( 5 );
		str += results.treatment.df;
		str += spaces( 3 + extra1 - treatDF.length );

		str += treatSS;
		str += spaces( 4 + extra2 - treatSS.length );
		str += treatMS;
		str += spaces( 3 + extra3 - treatMS.length );
		str += statistic;
		str += spaces( max( 7, statistic.length ) - statistic.length + 2 );
		str += roundn( results.pValue, ndgts );
		str += '\n';

		// Next line
		str += 'Errors';
		str += '        ';
		str += results.error.df;
		str += spaces( 3 + extra1 - errDF.length );
		str += errSS;
		str += spaces( 4 + extra2 - errSS.length );
		str += errMS;

		if ( decision ) {
			str += '\n\n';
			if ( results.rejected ) {
				str += 'Reject Null: ';
				str += roundn( results.pValue, ndgts );
				str += ' <= ';
				str += results.alpha;
			} else {
				str += 'Fail to Reject Null: ';
				str += roundn( results.pValue, ndgts );
				str += ' >= ';
				str += results.alpha;
			}
		}
		return str;
	}
}


// EXPORTS //

module.exports = prettyPrint;
