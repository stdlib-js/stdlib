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

var mod = require( 'module' );
var contains = require( '@stdlib/assert/contains' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var BUILTINS = require( './builtins.json' );


// VARIABLES //

var LIST = mod.builtinModules || BUILTINS;


// MAIN //

/**
* Tests whether a string matches a Node.js built-in module name.
*
* @param {*} x - value to test
* @returns {boolean} boolean indicating whether a string matches a Node.js built-in module name
*
* @example
* var out = isNodeBuiltin( 'cluster' );
* // returns true
*
* @example
* var out = isNodeBuiltin( 'crypto' );
* // returns true
*
* @example
* var out = isNodeBuiltin( 'fs-extra' );
* // returns false
*
* @example
* var out = isNodeBuiltin( '' );
* // returns false
*/
function isNodeBuiltin( x ) {
	if ( !isString( x ) ) {
		return false;
	}
	return contains( LIST, x );
}


// EXPORTS //

module.exports = isNodeBuiltin;
