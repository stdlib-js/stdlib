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

var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {string} [options.borderTop] - top border character sequence
* @param {string} [options.borderBottom] - bottom border character sequence
* @param {string} [options.borderLeft] - left border character sequence
* @param {string} [options.borderRight] - right border character sequence
* @param {(boolean|string)} [options.counter] - slide counter
* @param {(PositiveInteger|null)} [options.width] - presentation width
* @param {(PositiveInteger|null)} [options.height] - presentation height
* @param {string} [options.workspace] - REPL workspace name
* @param {string} [options.load] - file path specifying a presentation file to load
* @param {boolean} [options.autoClear] - boolean indicating whether to automatically clear the screen before writing a rendered slide to the REPL
* @param {boolean} [options.loop] - boolean indicating whether to "loop" a presentation
* @throws {Error} must provide valid options
* @returns {(Error|null)} error or null
*
* @example
* var options = {
*     'counter': true
* };
* var opts = {};
* var err = validate( opts, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, options ) {
	if ( !isPlainObject( options ) ) {
		return new TypeError( 'invalid argument. Options argument must be an object. Value: `' + options + '`.' );
	}
	if ( hasOwnProp( options, 'borderTop' ) ) {
		opts.borderTop = options.borderTop;
		if ( !isString( options.borderTop ) ) {
			return new TypeError( 'invalid option. `borderTop` option must be a string. Option: `' + options.borderTop + '`.' );
		}
	}
	if ( hasOwnProp( options, 'borderBottom' ) ) {
		opts.borderBottom = options.borderBottom;
		if ( !isString( options.borderBottom ) ) {
			return new TypeError( 'invalid option. `borderBottom` option must be a string. Option: `' + options.borderBottom + '`.' );
		}
	}
	if ( hasOwnProp( options, 'borderLeft' ) ) {
		opts.borderLeft = options.borderLeft;
		if ( !isString( options.borderLeft ) ) {
			return new TypeError( 'invalid option. `borderLeft` option must be a string. Option: `' + options.borderLeft + '`.' );
		}
	}
	if ( hasOwnProp( options, 'borderRight' ) ) {
		opts.borderRight = options.borderRight;
		if ( !isString( options.borderRight ) ) {
			return new TypeError( 'invalid option. `borderRight` option must be a string. Option: `' + options.borderRight + '`.' );
		}
	}
	if ( hasOwnProp( options, 'counter' ) ) {
		opts.counter = options.counter;
		if ( options.counter !== 'progress' && !isBoolean( options.counter ) ) {
			return new TypeError( 'invalid option. `counter` option must be either a recognized string or boolean. Option: `' + options.counter + '`.' );
		}
	}
	if ( hasOwnProp( options, 'width' ) ) {
		opts.width = options.width;
		if ( options.width !== null && !isPositiveInteger( options.width ) ) {
			return new TypeError( 'invalid option. `width` option must be either a positive integer or null. Option: `' + options.width + '`.' );
		}
	}
	if ( hasOwnProp( options, 'height' ) ) {
		opts.height = options.height;
		if ( options.height !== null && !isPositiveInteger( options.height ) ) {
			return new TypeError( 'invalid option. `height` option must be either a positive integer or null. Option: `' + options.height + '`.' );
		}
	}
	if ( hasOwnProp( options, 'workspace' ) ) {
		opts.workspace = options.workspace;
		if ( !isString( options.workspace ) ) {
			return new TypeError( 'invalid option. `workspace` option must be a string. Option: `' + options.workspace + '`.' );
		}
	}
	if ( hasOwnProp( options, 'load' ) ) {
		opts.load = options.load;
		if ( !isString( options.load ) ) {
			return new TypeError( 'invalid option. `load` option must be a string. Option: `' + options.load + '`.' );
		}
	}
	if ( hasOwnProp( options, 'autoClear' ) ) {
		opts.autoClear = options.autoClear;
		if ( !isBoolean( options.autoClear ) ) {
			return new TypeError( 'invalid option. `autoClear` option must be a boolean. Option: `' + options.autoClear + '`.' );
		}
	}
	if ( hasOwnProp( options, 'loop' ) ) {
		opts.loop = options.loop;
		if ( !isBoolean( options.loop ) ) {
			return new TypeError( 'invalid option. `loop` option must be a boolean. Option: `' + options.loop + '`.' );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;
