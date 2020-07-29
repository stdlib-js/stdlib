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

/* eslint-disable no-invalid-this, no-restricted-syntax */

'use strict';

// MODULES //

var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var roundn = require( '@stdlib/math/base/special/roundn' );
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );


// MAIN //

/**
* Returns a results object.
*
* @private
* @constructor
* @param {number} pValue - p-value
* @param {number} alpha - significance
* @param {number} statistic - test statistic
* @param {(number|null)} df - degrees of freedom
* @returns {Results} results object
*
* @example
* var res = new Results( 0.0406, 0.05, 9.9901, 4 );
* // returns <Results>
*/
function Results( pValue, alpha, statistic, df ) {
	if ( !(this instanceof Results) ) {
		return new Results( pValue, alpha, statistic, df );
	}
	this._pValue = pValue;
	this._alpha = alpha;
	this._statistic = statistic;
	this._df = df;
	return this;
}

/**
* Significance level.
*
* @private
* @name alpha
* @memberof Results.prototype
* @type {number}
*
* @example
* var res = new Results( 0.0406, 0.05, 9.9901, 4 );
*
* var alpha = res.alpha;
* // returns 0.05
*/
setReadOnlyAccessor( Results.prototype, 'alpha', function get() {
	return this._alpha;
});

/**
* Degrees of freedom.
*
* @private
* @name df
* @memberof Results.prototype
* @type {(number|null)}
*
* @example
* var res = new Results( 0.0406, 0.05, 9.9901, 4 );
*
* var df = res.df;
* // returns 4
*/
setReadOnlyAccessor( Results.prototype, 'df', function get() {
	return this._df;
});

/**
* Test name.
*
* @private
* @name method
* @memberof Results.prototype
* @type {string}
*
* @example
* var res = new Results( 0.0406, 0.05, 9.9901, 4 );
*
* var method = res.method;
* // returns 'Chi-square goodness-of-fit test'
*/
setReadOnly( Results.prototype, 'method', 'Chi-square goodness-of-fit test' );

/**
* Test p-value.
*
* @private
* @name pValue
* @memberof Results.prototype
* @type {number}
*
* @example
* var res = new Results( 0.0406, 0.05, 9.9901, 4 );
*
* var pval = res.pValue;
* // returns 0.0406
*/
setReadOnlyAccessor( Results.prototype, 'pValue', function get() {
	return this._pValue;
});

/**
* Boolean indicating the test decision.
*
* @private
* @name rejected
* @memberof Results.prototype
* @type {boolean}
*
* @example
* var res = new Results( 0.0406, 0.05, 9.9901, 4 );
*
* var bool = res.rejected;
* // returns true
*/
setReadOnlyAccessor( Results.prototype, 'rejected', function get() {
	return ( this._pValue <= this._alpha );
});

/**
* Test statistic.
*
* @private
* @name statistic
* @memberof Results.prototype
* @type {number}
*
* @example
* var res = new Results( 0.0406, 0.05, 9.9901, 4 );
*
* var stat = res.statistic;
* // returns 9.9901
*/
setReadOnlyAccessor( Results.prototype, 'statistic', function get() {
	return this._statistic;
});

/**
* Serializes a results object as a string.
*
* ## Notes
*
* -   Example output:
*
*     ```text
*
*     Chi-square goodness-of-fit test
*
*     Null hypothesis: population probabilities are equal to those in p
*
*        pValue: 0.0406
*        statistic: 9.9901
*        degrees of freedom: 4
*
*     Test Decision: Reject null in favor of alternative at 5% significance level
*
*     ```
*
* @private
* @name toString
* @memberof Results.prototype
* @type {Function}
* @param {Options} [opts] - options object
* @param {PositiveInteger} [opts.digits=4] - number of digits after the decimal point
* @param {boolean} [opts.decision=true] - boolean indicating whether to show the test decision
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {string} serialized results
*
* @example
* var res = new Results( 0.0406, 0.05, 9.9901, 4 );
*
* var str = res.toString();
* // returns <string>
*/
setReadOnly( Results.prototype, 'toString', function toString( opts ) {
	var decision;
	var dgts;
	var out;

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
	out = [
		this.method,
		'',
		'',
		'Null hypothesis: population probabilities are equal to those in p',
		'',
		'',
		'    pValue: ' + roundn( this._pValue, -dgts ),
		'    statistic: ' + roundn( this._statistic, -dgts ),
		'    degrees of freedom: ' + this._df,
		''
	];
	if ( decision ) {
		out.push( 'Test Decision: ' + ( ( this.rejected ) ? 'Reject' : 'Fail to reject' ) + ' null in favor of alternative at ' + (this._alpha*100.0) + '% significance level' );
		out.push( '' );
	}
	return out.join( '\n' );
});

/**
* Serializes a results object as a JSON object.
*
* ## Notes
*
* -   `JSON.stringify()` implicitly calls this method when stringifying a `Results` instance.
*
* @private
* @name toJSON
* @memberof Results.prototype
* @type {Function}
* @returns {Object} serialized object
*
* @example
* var res = new Results( 0.0406, 0.05, 9.9901, 4 );
*
* var o = res.toJSON();
* // returns {'rejected': true, 'alpha': 0.05, 'pValue': 0.0406, 'df': 4, ...}
*/
setReadOnly( Results.prototype, 'toJSON', function toJSON() {
	return {
		'rejected': this.rejected,
		'alpha': this._alpha,
		'pValue': this._pValue,
		'df': this._df,
		'statistic': this._statistic,
		'method': this.method
	};
});


// EXPORTS //

module.exports = Results;
