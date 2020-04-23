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

var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var roundn = require( '@stdlib/math/base/special/roundn' );


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
	* Pretty-print test results.
	*
	* @private
	* @param {Options} [opts] - options object
	* @param {PositiveInteger} [opts.digits=4] - number of digits after the decimal point
	* @param {boolean} [opts.decision=true] - boolean indicating whether to print the test decision
	* @throws {TypeError} options argument must be an object
	* @throws {TypeError} must provide valid options
	* @returns {string} formatted results
	*/
	function print( opts ) {
		var decision;
		var dgts;
		var str;

		dgts = 4;
		decision = true;
		if ( arguments.length > 0 ) {
			if ( !isObject( opts ) ) {
				throw new TypeError( 'invalid argument. Must provide an object. Value: `' + opts + '`.' );
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
		str = '';
		str += results.method;
		str += '\n\n';
		str += 'Null hypothesis: the two variables are independent';
		str += '\n\n';
		str += '    pValue: ' + roundn( results.pValue, -dgts ) + '\n';
		str += '    statistic: ' + roundn( results.statistic, -dgts ) + '\n';
		str += '    degrees of freedom: ' + results.df + '\n';
		str += '\n';
		if ( decision ) {
			str += 'Test Decision: ';
			if ( results.rejected ) {
				str += 'Reject null in favor of alternative at ' + (results.alpha*100) + '% significance level';
			} else {
				str += 'Fail to reject null in favor of alternative at ' + (results.alpha*100) + '% significance level';
			}
			str += '\n';
		}
		return str;
	}
}


// EXPORTS //

module.exports = prettyPrint;
