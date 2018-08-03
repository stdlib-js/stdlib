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
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - options to validate
* @param {string} [options.cmd] - executable file/command
* @param {PositiveInteger} [options.concurrency] - number of scripts to execute concurrently
* @param {PositiveInteger} [options.workers] - number of workers
* @param {boolean} [options.ordered] - boolean indicating whether to preserve the order of script output
* @param {NonNegativeInteger} [options.uid] - process user identity
* @param {NonNegativeInteger} [options.gid] - process group identity
* @param {NonNegativeInteger} [options.maxBuffer] - max child process `stdio` buffer size
* @returns {(Error|null)} error or null
*
* @example
* var opts = {};
* var options = {
*     'concurrency': 4,
*     'workers': 2
* };
* var err = validate( opts, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( 'invalid argument. Options argument must be an object. Value: `' + options + '`.' );
	}
	if ( hasOwnProp( options, 'concurrency' ) ) {
		opts.concurrency = options.concurrency;
		if ( !isPositiveInteger( opts.concurrency ) ) {
			return new TypeError( 'invalid option. `concurrency` option must be a positive integer. Option: `' + opts.concurrency + '`.' );
		}
	}
	if ( hasOwnProp( options, 'workers' ) ) {
		opts.workers = options.workers;
		if ( !isPositiveInteger( opts.workers ) ) {
			return new TypeError( 'invalid option. `workers` option must be a positive integer. Option: `' + opts.workers + '`.' );
		}
	}
	if ( hasOwnProp( options, 'cmd' ) ) {
		opts.cmd = options.cmd;
		if ( !isString( opts.cmd ) ) {
			return new TypeError( 'invalid option. `cmd` option must be a primitive string. Option: `' + opts.cmd + '`.' );
		}
	}
	if ( hasOwnProp( options, 'ordered' ) ) {
		opts.ordered = options.ordered;
		if ( !isBoolean( opts.ordered ) ) {
			return new TypeError( 'invalid option. `ordered` option must be a primitive boolean. Option: `' + opts.ordered + '`.' );
		}
	}
	if ( hasOwnProp( options, 'uid' ) ) {
		opts.uid = options.uid;
		if ( !isNonNegativeInteger( opts.uid ) ) {
			return new TypeError( 'invalid option. `uid` option must be a nonnegative integer. Option: `' + opts.uid + '`.' );
		}
	}
	if ( hasOwnProp( options, 'gid' ) ) {
		opts.gid = options.gid;
		if ( !isNonNegativeInteger( opts.gid ) ) {
			return new TypeError( 'invalid option. `gid` option must be a nonnegative integer. Option: `' + opts.gid + '`.' );
		}
	}
	if ( hasOwnProp( options, 'maxBuffer' ) ) {
		opts.maxBuffer = options.maxBuffer;
		if ( !isNonNegativeInteger( opts.maxBuffer ) ) {
			return new TypeError( 'invalid option. `maxBuffer` option must be a nonnegative integer. Option: `' + opts.maxBuffer + '`.' );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;
