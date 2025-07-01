/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Serializes a two-sample Z-test results object as a formatted string.
*
* ## Notes
*
* -   Example output:
*
*     ```text
*
*     Two-sample Z-test
*
*     Alternative hypothesis: True differences in means is less than 1.0
*
*        pValue: 0.0406
*        statistic: 9.9901
*        95% confidence interval: [9.7821, 10.4451]
*
*     Test Decision: Reject null in favor of alternative at 5% significance level
*
*     ```
*
* @param {Object} results - two-sample Z-test results object
* @param {Options} [opts] - options object
* @param {PositiveInteger} [opts.digits=4] - number of digits to display after decimal points
* @param {boolean} [opts.decision=true] - boolean indicating whether to show the test decision
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {string} serialized results
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var results = {
*     'rejected': true,
*     'alpha': 0.05,
*     'pValue': 0.0132,
*     'statistic': 2.4773,
*     'nullValue': 0.0,
*     'xmean': 3.7561,
*     'ymean': 3.0129,
*     'ci': new Float64Array( [ 0.1552, 1.3311 ] ),
*     'alternative': 'two-sided',
*     'method': 'Two-sample Z-test'
* };
*
* var str = toString( results );
* // returns <string>
*/
function toString( results, opts ) { // eslint-disable-line stdlib/no-redeclare
	var decision;
	var level;
	var dgts;
	var out;
	var alt;
	var ci;

	dgts = 4;
	decision = true;
	if ( arguments.length > 1 ) {
		if ( !isObject( opts ) ) {
			throw new TypeError( format( 'invalid argument. Must provide an object. Value: `%s`.', opts ) );
		}
		if ( hasOwnProp( opts, 'digits' ) ) {
			if ( !isPositiveInteger( opts.digits ) ) {
				throw new TypeError( format( 'invalid option. `%s` option must be a positive integer. Option: `%s`.', 'digits', opts.digits ) );
			}
			dgts = opts.digits;
		}
		if ( hasOwnProp( opts, 'decision' ) ) {
			if ( !isBoolean( opts.decision ) ) {
				throw new TypeError( format( 'invalid option. `%s` option must be a boolean. Option: `%s`.', 'decision', opts.decision ) );
			}
			decision = opts.decision;
		}
	}
	switch ( results.alternative ) {
	case 'less':
		alt = 'less than';
		break;
	case 'greater':
		alt = 'greater than';
		break;
	case 'two-sided':
	default:
		alt = 'not equal to';
		break;
	}

	level = ( 1.0 - results.alpha ) * 100;
	ci = results.ci;

	out = [
		'',
		results.method,
		'',
		format( 'Alternative hypothesis: True difference in means is %s %0.'+dgts+'f', alt, results.nullValue ),
		'',
		format( '    pValue: %0.'+dgts+'f', results.pValue ),
		format( '    statistic: %0.'+dgts+'f', results.statistic ),
		format( '    %.'+dgts+'f%% confidence interval: [%0.'+dgts+'f, %0.'+dgts+'f]', level, ci[ 0 ], ci[ 1 ] ),
		''
	];
	if ( decision ) {
		out.push( format( 'Test Decision: %s null in favor of alternative at %.'+dgts+'f%% significance level', ( results.rejected ) ? 'Reject' : 'Fail to reject', 100-level ) );
		out.push( '' );
	}
	return out.join( '\n' );
}


// EXPORTS //

module.exports = toString;
