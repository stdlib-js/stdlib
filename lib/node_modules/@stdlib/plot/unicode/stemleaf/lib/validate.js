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

var isObject = require( '@stdlib/assert/is-plain-object' );
var isFunction = require( '@stdlib/assert/is-function' );
var isArray = require( '@stdlib/assert/is-array' );
var isTypedArray = require( '@stdlib/assert/is-typed-array' );
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var hasOwnProp = require( '@stdlib/assert/has-own-property' );


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Options} opts - function options
* @param {(Array|TypedArray)} [opts.x] - chart data
* @param {(Array|TypedArray)} [opts.y] - chart data
* @param {Function} [opts.xValue] - x-value accessor
* @param {Function} [opts.yValue] - y-value accessor
* @param {PositiveInteger} leafDigits - number of digits to display as leafs
* @returns {(Error|null)} error or null
*
* @example
* var opts = {
*     'x': [ 23, 11, 137, 58 ],
*     'y': [ 21, 11, 39, 80 ]
* };
* var err = validate( opts );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts ) {
	if ( !isObject( opts ) ) {
		return new TypeError( 'invalid argument. Options argument must be an object. Value: `' + opts + '`.' );
	}
	if ( hasOwnProp( opts, 'x' ) ) {
		if ( !isArray( opts.x ) && !isTypedArray( opts.x ) ) {
			return new TypeError( 'invalid option. `x` option must be an array or typed array. Option: `' + opts.x + '`.' );
		}
	}
	if ( hasOwnProp( opts, 'xValue' ) ) {
		if ( !isFunction( opts.xValue ) ) {
			return new TypeError( 'invalid option. `xValue` option must be a function. Option: `' + opts.xValue + '`.' );
		}
	}
	if ( hasOwnProp( opts, 'y' ) ) {
		if ( !isArray( opts.y ) && !isTypedArray( opts.y ) ) {
			return new TypeError( 'invalid option. `y` option must be an array or typed array. Option: `' + opts.y + '`.' );
		}
	}
	if ( hasOwnProp( opts, 'yValue' ) ) {
		if ( !isFunction( opts.yValue ) ) {
			return new TypeError( 'invalid option. `yValue` option must be a function. Option: `' + opts.yValue + '`.' );
		}
	}
	if ( hasOwnProp( opts, 'leafDigits' ) ) {
		if ( !isPositiveInteger( opts.leafDigits ) ) {
			return new TypeError( 'invalid option. `leafDigits` option must be a positive integer. Option: `' + opts.leafDigits + '`.' );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;
