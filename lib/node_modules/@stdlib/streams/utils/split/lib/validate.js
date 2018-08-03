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
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isNonNegative = require( '@stdlib/assert/is-nonnegative-number' ).isPrimitive;
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isRegExp = require( '@stdlib/assert/is-regexp' );


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {(string|RegExp)} [options.sep] - separator used to split streamed data
* @param {boolean} [options.objectMode] - specifies whether stream should operate in object mode
* @param {(string|null)} [options.encoding] - specifies how `Buffer` objects should be decoded to `strings`
* @param {NonNegativeNumber} [options.highWaterMark] - specifies the `Buffer` level for when `write()` starts returning `false`
* @param {boolean} [options.allowHalfOpen] - specifies whether the stream should remain open even if one side ends
* @param {boolean} [options.writableObjectMode] - specifies whether the writable side should be in object mode
* @returns {(Error|null)} null or an error object
*
* @example
* var opts = {};
* var options = {
*     'sep': '\t',
*     'objectMode': true
* };
* var err= validate( opts, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( 'invalid argument. Options must be an object. Value: `' + options + '`.' );
	}
	if ( hasOwnProp( options, 'sep' ) ) {
		opts.sep = options.sep;
		if (
			!isString( opts.sep ) &&
			!isRegExp( opts.sep )
		) {
			return new TypeError( 'invalid option. `sep` option must be either a primitive string or a regular expression. Option: `' + opts.sep + '`.' );
		}
	}
	if ( hasOwnProp( options, 'objectMode' ) ) {
		opts.objectMode = options.objectMode;
		if ( !isBoolean( opts.objectMode ) ) {
			return new TypeError( 'invalid option. `objectMode` option must be a boolean primitive. Option: `' + opts.objectMode + '`.' );
		}
	}
	if ( hasOwnProp( options, 'writableObjectMode' ) ) {
		opts.writableObjectMode = options.writableObjectMode;
		if ( !isBoolean( opts.writableObjectMode ) ) {
			return new TypeError( 'invalid option. `writableObjectMode` option must be a boolean primitive. Option: `' + opts.writableObjectMode + '`.' );
		}
	}
	if ( hasOwnProp( options, 'encoding' ) ) {
		opts.encoding = options.encoding;
		if ( !isString( opts.encoding ) ) {
			return new TypeError( 'invalid option. `encoding` option must be a string primitive. Option: `' + opts.encoding + '`.' );
		}
	}
	if ( hasOwnProp( options, 'allowHalfOpen' ) ) {
		opts.allowHalfOpen = options.allowHalfOpen;
		if ( !isBoolean( opts.allowHalfOpen ) ) {
			return new TypeError( 'invalid option. `allowHalfOpen` option must be a boolean primitive. Option: `' + opts.allowHalfOpen + '`.' );
		}
	}
	if ( hasOwnProp( options, 'highWaterMark' ) ) {
		opts.highWaterMark = options.highWaterMark;
		if ( !isNonNegative( opts.highWaterMark ) ) {
			return new TypeError( 'invalid option. `highWaterMark` option must be a nonnegative number. Option: `' + opts.highWaterMark + '`.' );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;
