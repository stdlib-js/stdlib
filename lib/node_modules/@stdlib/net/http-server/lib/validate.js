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

var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {NonNegativeInteger} [options.port] - server port
* @param {NonNegativeInteger} [options.maxport] - max server port
* @param {string} [options.hostname] - server hostname
* @param {string} [options.address] - server address
* @returns {(Error|null)} error or null
*
* @example
* var options = {
*     'port': 7331,
*     'address': '127.0.0.1'
* };
* var opts = {};
* var err = validate( opts, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( 'invalid argument. Options argument must be an object. Value: `' + options + '`.' );
	}
	if ( hasOwnProp( options, 'port' ) ) {
		opts.port = options.port;
		if ( !isNonNegativeInteger( opts.port ) ) {
			return new TypeError( 'invalid option. `port` must be a nonnegative integer. Option: `' + opts.port + '`.' );
		}
	}
	if ( hasOwnProp( options, 'maxport' ) ) {
		opts.maxport = options.maxport;
		if ( !isNonNegativeInteger( opts.maxport ) ) {
			return new TypeError( 'invalid option. `maxport` option must be a nonnegative integer. Option: `' + opts.maxport + '`.' );
		}
	}
	if ( hasOwnProp( options, 'hostname' ) ) {
		opts.hostname = options.hostname;
		if ( !isString( opts.hostname ) ) {
			return new TypeError( 'invalid option. `hostname` option must be a primitive string. Option: `' + opts.hostname + '`.' );
		}
	}
	if ( hasOwnProp( options, 'address' ) ) {
		opts.address = options.address;
		if ( !isString( opts.address ) ) {
			return new TypeError( 'invalid option. `address` option must be a primitive string. Option: `' + opts.address + '`.' );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;
