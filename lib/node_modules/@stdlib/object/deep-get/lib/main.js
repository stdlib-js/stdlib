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
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isArray = require( '@stdlib/assert/is-array' );
var format = require( '@stdlib/string/format' );
var validate = require( './validate.js' );
var defaults = require( './defaults.js' );
var dget = require( './dget.js' );


// MAIN //

/**
* Returns a nested property value.
*
* @param {ObjectLike} obj - input object
* @param {(string|Array)} path - key path
* @param {Options} [options] - function options
* @param {string} [options.sep='.'] - key path separator
* @throws {TypeError} second argument must be a string or key array
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {*} nested property value
*
* @example
* var obj = { 'a': { 'b': { 'c': 'd' } } };
* var val = deepGet( obj, 'a.b.c' );
* // returns 'd'
*
* @example
* var arr = [
*     { 'a': [ {'x': 5} ] },
*     { 'a': [ {'x': 10} ] }
* ];
* var val = deepGet( arr, '1.a.0.x' );
* // returns 10
*
* @example
* var obj = { 'a': { 'b': { 'c': 'd' } } };
* var val = deepGet( obj, ['a','b','c'] );
* // returns 'd'
*
* @example
* var obj = { 'a': { 'b': { 'c': 'd' } } };
* var val = deepGet( obj, 'a/b/c', {
*     'sep': '/'
* });
* // returns 'd'
*/
function deepGet( obj, path, options ) {
	var isStr;
	var props;
	var opts;
	var err;
	if ( !isObjectLike( obj ) ) {
		return;
	}
	isStr = isString( path );
	if ( !isStr && !isArray( path ) ) {
		throw new TypeError( format( 'invalid argument. Key path must be a string or a key array. Value: `%s`.', path ) );
	}
	opts = defaults();
	if ( arguments.length > 2 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	if ( isStr ) {
		props = path.split( opts.sep );
	} else {
		props = path;
	}
	return dget( obj, props );
}


// EXPORTS //

module.exports = deepGet;
