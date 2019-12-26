/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {string} [options.address] - server address
* @param {string} [options.hostname] - server hostname
* @param {string} [options.latest] - path to the "latest" documentation
* @param {boolean} [options.logger] - boolean indicating whether to enable logging
* @param {NonNegativeInteger} [options.port] - server port
* @param {string} [options.prefix] - URL path prefix used to create a virtual mount path for a static directory
* @param {string} [options.root] - root documentation directory
* @param {string} [options.static] - path of the directory that contains static files to serve
* @param {string} [options.template] - application shell template
* @param {boolean} [options.trustProxy] - boolean indicating whether to trust `X-forwarded-by` headers when the server is sitting behind a proxy
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
	if ( hasOwnProp( options, 'address' ) ) {
		opts.address = options.address;
		if ( !isString( opts.address ) ) {
			return new TypeError( 'invalid option. `address` option must be a primitive string. Option: `' + opts.address + '`.' );
		}
	}
	if ( hasOwnProp( options, 'hostname' ) ) {
		opts.hostname = options.hostname;
		if ( !isString( opts.hostname ) ) {
			return new TypeError( 'invalid option. `hostname` option must be a primitive string. Option: `' + opts.hostname + '`.' );
		}
	}
	if ( hasOwnProp( options, 'latest' ) ) {
		opts.latest = options.latest;
		if ( !isString( opts.latest ) ) {
			return new TypeError( 'invalid option. `latest` option must be a primitive string. Option: `' + opts.latest + '`.' );
		}
	}
	if ( hasOwnProp( options, 'logger' ) ) {
		opts.logger = options.logger;
		if ( !isBoolean( opts.logger ) ) {
			return new TypeError( 'invalid option. `logger` option must be a primitive boolean. Option: `' + opts.logger + '`.' );
		}
	}
	if ( hasOwnProp( options, 'port' ) ) {
		opts.port = options.port;
		if ( !isNonNegativeInteger( opts.port ) ) {
			return new TypeError( 'invalid option. `port` must be a nonnegative integer. Option: `' + opts.port + '`.' );
		}
	}
	if ( hasOwnProp( options, 'prefix' ) ) {
		opts.prefix = options.prefix;
		if ( !isString( opts.prefix ) ) {
			return new TypeError( 'invalid option. `prefix` option must be a primitive string. Option: `' + opts.prefix + '`.' );
		}
	}
	if ( hasOwnProp( options, 'root' ) ) {
		opts.root = options.root;
		if ( !isString( opts.root ) ) {
			return new TypeError( 'invalid option. `root` option must be a primitive string. Option: `' + opts.root + '`.' );
		}
	}
	if ( hasOwnProp( options, 'static' ) ) {
		opts.static = options.static;
		if ( !isString( opts.static ) ) {
			return new TypeError( 'invalid option. `static` option must be a primitive string. Option: `' + opts.static + '`.' );
		}
	}
	if ( hasOwnProp( options, 'template' ) ) {
		opts.template = options.template;
		if ( !isString( opts.template ) ) {
			return new TypeError( 'invalid option. `template` option must be a primitive string. Option: `' + opts.template + '`.' );
		}
	}
	if ( hasOwnProp( options, 'trustProxy' ) ) {
		opts.trustProxy = options.trustProxy;
		if ( !isBoolean( opts.trustProxy ) ) {
			return new TypeError( 'invalid option. `trustProxy` option must be a primitive boolean. Option: `' + opts.trustProxy + '`.' );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;
