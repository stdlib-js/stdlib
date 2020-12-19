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

var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isObject = require( '@stdlib/assert/is-plain-object' );
var isArray = require( '@stdlib/assert/is-array' );
var contains = require( '@stdlib/assert/contains' );
var Int32Array = require( '@stdlib/array/int32' );
var Uint32Array = require( '@stdlib/array/uint32' );
var table = require( './prngs.js' );


// VARIABLES //

var TYPED_ARRAY_CTORS = {
	'Int32Array': Int32Array,
	'Uint32Array': Uint32Array
};
var PRNG_WRAPPERS = [ 'randi', 'randn', 'randu' ];


// MAIN //

/**
* Revives a JSON-serialized pseudorandom number generator.
*
* @param {string} key - key
* @param {*} value - value
* @returns {(*|Function)} value or PRNG
*
* @example
* var parseJSON = require( '@stdlib/utils/parse-json' );
* var mt19937 = require( '@stdlib/random/base/mt19937' );
*
* var str = JSON.stringify( mt19937 );
* var rand = parseJSON( str, reviver );
* // returns <Function>
*/
function reviver( key, value ) {
	var factory;
	var opts;
	var args;
	var ctor;
	var tmp;
	if (
		value &&
		value.type === 'PRNG' &&
		isString( value.name ) &&
		isObject( value.state ) &&
		isArray( value.params ) &&
		isString( value.state.type ) &&
		isArray( value.state.data )
	) {
		opts = {};
		factory = table[ value.name ];
		if ( factory === void 0 ) {
			tmp = value.name.split( '-' );
			if ( contains( PRNG_WRAPPERS, tmp[ 0 ] ) ) {
				factory = table[ tmp[ 0 ] ];
				opts.name = tmp.slice( 1 ).join( '-' );
			}
		}
		if ( factory ) {
			ctor = TYPED_ARRAY_CTORS[ value.state.type ];
			if ( ctor ) {
				opts.state = new ctor( value.state.data );

				args = value.params.slice();
				args.push( opts );

				try {
					return factory.apply( null, args );
				} catch ( error ) { // eslint-disable-line no-unused-vars
					// Return the original JSON value...
				}
			}
		}
	}
	return value;
}


// EXPORTS //

module.exports = reviver;
