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

var isObjectLike = require( '@stdlib/assert/is-object-like' );


// MAIN //

/**
* Returns an array of an object's own and inherited enumerable property values.
*
* @param {ObjectLike} obj - input object
* @throws {TypeError} must provide an object-like value
* @returns {Array} value array
*
* @example
* function Foo() {
*     this.beep = 'boop';
*     return this;
* }
*
* Foo.prototype.foo = 'bar';
*
* var obj = new Foo();
*
* var values = objectValuesIn( obj );
* // e.g., returns [ 'boop', 'bar' ]
*/
function objectValuesIn( obj ) {
	var out;
	var key;
	if ( !isObjectLike( obj ) ) {
		throw new TypeError( 'invalid argument. Must provide an object-like value. Value: `'+obj+'`.' );
	}
	out = [];
	for ( key in obj ) { // eslint-disable-line guard-for-in
		out.push( obj[ key ] );
	}
	return out;
}


// EXPORTS //

module.exports = objectValuesIn;
