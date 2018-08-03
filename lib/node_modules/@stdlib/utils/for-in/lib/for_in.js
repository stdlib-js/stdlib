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

var isFunction = require( '@stdlib/assert/is-function' );


// MAIN //

/**
* Invokes a function once for each own and inherited enumerable property of an object.
*
* ## Notes
*
* -   Iteration order is **not** guaranteed.
*
*
* @param {Object} obj - input object
* @param {Function} fcn - function to invoke
* @param {*} [thisArg] - execution context
* @throws {TypeError} first argument must be an object
* @throws {TypeError} second argument must be a function
* @returns {Object} obj - input object
*
* @example
* function log( v, key ) {
*     console.log( '%s: %d', key, v );
* }
*
* function Foo() {
*     this.a = 1;
*     this.b = 2;
*     return this;
* }
*
* Foo.prototype.c = 3;
* Foo.prototype.d = 4;
*
* var obj = new Foo();
*
* forIn( obj, log );
*/
function forIn( obj, fcn, thisArg ) {
	var bool;
	var key;
	if ( typeof obj !== 'object' || obj === null ) {
		throw new TypeError( 'invalid argument. First argument must be an object. Value: `'+obj+'`.' );
	}
	if ( !isFunction( fcn ) ) {
		throw new TypeError( 'invalid argument. Second argument must be a function. Value: `'+fcn+'`.' );
	}
	for ( key in obj ) { // eslint-disable-line guard-for-in
		bool = fcn.call( thisArg, obj[ key ], key, obj );
		if ( bool === false ) {
			return obj;
		}
	}
	return obj;
}


// EXPORTS //

module.exports = forIn;
