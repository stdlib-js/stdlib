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

var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var ctors = require( './ctors.js' );


// MAIN //

/**
* Revives a JSON-serialized complex number.
*
* @param {string} key - key
* @param {*} value - value
* @returns {(*|Complex)} value or complex number
*
* @example
* var parseJSON = require( '@stdlib/utils/parse-json' );
*
* var str = '{"type":"Complex128","re":5,"im":3}';
*
* var z = parseJSON( str, reviver );
* // returns <Complex128>
*/
function reviver( key, value ) {
	var ctor;
	if (
		value &&
		value.type &&
		isNumber( value.re ) &&
		isNumber( value.im )
	) {
		ctor = ctors[ value.type ];
		if ( ctor ) {
			return new ctor( value.re, value.im );
		}
	}
	return value;
}


// EXPORTS //

module.exports = reviver;
