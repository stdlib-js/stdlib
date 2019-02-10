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

var objectKeys = require( '@stdlib/utils/keys' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var ctors = require( './ctors.js' );


// MAIN //

/**
* Revives a JSON-serialized error object.
*
* @param {string} key - key
* @param {*} value - value
* @returns {(*|Error|SyntaxError|URIError|EvalError|ReferenceError|RangeError|TypeError)} value or error object
*
* @example
* var str = '{"type":"TypeError","message":"beep"}';
* var err = JSON.parse( str, reviver );
* // returns <TypeError>
*/
function reviver( key, value ) {
	var hasStack;
	var ctor;
	var keys;
	var err;
	var k;
	var i;
	if (
		value &&
		value.type &&
		isString( value.message )
	) {
		ctor = ctors[ value.type ];
		if ( ctor ) {
			err = new ctor( value.message );
			keys = objectKeys( value );
			for ( i = 0; i < keys.length; i++ ) {
				k = keys[ i ];
				if (
					k === 'type' ||
					k === 'message' ||
					k === 'name' // read-only for built-ins
				) {
					continue;
				}
				if ( k === 'stack' ) {
					if ( !isString( value[k] ) ) {
						continue;
					}
					hasStack = true;
				}
				err[ k ] = value[ k ];
			}
			if ( !hasStack && isString( err.stack ) ) {
				err.stack = '';
			}
			return err;
		}
	}
	return value;
}


// EXPORTS //

module.exports = reviver;
