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
var isArray = require( '@stdlib/assert/is-array' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var isObjectLike = require( '@stdlib/assert/is-object-like' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isFunction = require( '@stdlib/assert/is-function' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Inverts an object, such that keys become values and values become keys, according to a transform function.
*
* @param {ObjectLike} obj - input object
* @param {Options} [opts] - function options
* @param {boolean} [opts.duplicates=true] - boolean indicating whether to store duplicate keys
* @param {Function} transform - transform function
* @throws {TypeError} first argument must be object-like
* @throws {TypeError} options argument must an an object
* @throws {TypeError} last argument must be a function
* @throws {TypeError} must provide valid options
* @returns {Object} inverted object
*
* @example
* function transform( key, value ) {
*     return key + value;
* }
* var obj = {
*     'a': 'beep',
*     'b': 'boop'
* };
* var out = invertBy( obj, transform );
* // returns { 'abeep': 'a', 'bboop': 'b' }
*
* @example
* function transform( key, value ) {
*     return value;
* }
* var obj = {
*     'a': 'beep',
*     'b': 'beep'
* };
* var out = invertBy( obj, transform );
* // returns { 'beep': [ 'a', 'b' ] }
*
* @example
* function transform( key, value ) {
*     return value;
* }
*
* var obj = {};
* obj.a = 'beep';
* obj.b = 'boop';
* obj.c = 'beep'; // inserted after `a`
*
* var opts = {
*     'duplicates': false
* };
* var out = invertBy( obj, opts, transform );
* // returns { 'beep': 'c', 'boop': 'b' }
*/
function invertBy( obj, opts, transform ) {
	var allowDupes;
	var keys;
	var len;
	var key;
	var val;
	var out;
	var cb;
	var v;
	var i;
	if ( !isObjectLike( obj ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an object (except null). Value: `%s`.', obj ) );
	}
	allowDupes = true;
	if ( arguments.length === 2 ) {
		cb = opts;
	} else {
		if ( !isObject( opts ) ) {
			throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', opts ) );
		}
		if ( hasOwnProp( opts, 'duplicates' ) ) {
			allowDupes = opts.duplicates;
			if ( !isBoolean( allowDupes ) ) {
				throw new TypeError( format( 'invalid option. `%s` option must be a boolean. Option: `%s`.', 'duplicates', allowDupes ) );
			}
		}
		cb = transform;
	}
	if ( !isFunction( cb ) ) {
		throw new TypeError( format( 'invalid argument. Last argument must be a function. Value: `%s`.', cb ) );
	}
	keys = objectKeys( obj );
	len = keys.length;
	out = {};
	if ( allowDupes ) {
		for ( i = 0; i < len; i++ ) {
			key = keys[ i ];
			val = cb( key, obj[ key ], obj );
			if ( !hasOwnProp( out, val ) ) {
				out[ val ] = key;
				continue;
			}
			v = out[ val ];
			if ( isArray( v ) ) {
				out[ val ].push( key );
			} else {
				out[ val ] = [ v, key ];
			}
		}
	} else {
		for ( i = 0; i < len; i++ ) {
			key = keys[ i ];
			val = cb( key, obj[ key ], obj );
			out[ val ] = key;
		}
	}
	return out;
}


// EXPORTS //

module.exports = invertBy;
