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

var defineProperty = require( '@stdlib/utils/define-property' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Moves a property from one object to another object.
*
* @param {Object} source - source object
* @param {string} prop - property to move
* @param {Object} target - target object
* @throws {TypeError} first argument must be an object
* @throws {TypeError} third argument must be an object
* @returns {boolean} boolean indicating whether operation was successful
*
* @example
* var obj1 = { 'a': 'b' };
* var obj2 = {};
*
* var bool = moveProperty( obj1, 'a', obj2 );
* // returns true
*
* @example
* var obj1 = { 'a': 'b' };
* var obj2 = {};
*
* var bool = moveProperty( obj1, 'c', obj2 );
* // returns false
*/
function moveProperty( source, prop, target ) {
	var desc;
	if ( typeof source !== 'object' || source === null ) {
		throw new TypeError( format( 'invalid argument. Source argument must be an object. Value: `%s`.', source ) );
	}
	if ( typeof target !== 'object' || target === null ) {
		throw new TypeError( format( 'invalid argument. Target argument must be an object. Value: `%s`.', target ) );
	}
	// TODO: handle case where gOPD is not supported
	desc = Object.getOwnPropertyDescriptor( source, prop );
	if ( desc === void 0 ) {
		return false;
	}
	delete source[ prop ];
	defineProperty( target, prop, desc );
	return true;
}


// EXPORTS //

module.exports = moveProperty;
