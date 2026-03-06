/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var format = require( '@stdlib/string/format' );
var SETTINGS = require( './settings.js' );
var SETTINGS_NAMES = require( './settings_names.js' );
var VALIDATORS = require( './settings_validators.js' );


// MAIN //

/**
* Validates settings.
*
* @private
* @param {Object} opts - destination object
* @param {Object} options - settings options
* @returns {(Error|null)} error or null
*
* @example
* var options = {
*     'autoClosePairs': true
* };
* var opts = {};
* var err = validate( opts, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, options ) {
	var name;
	var o;
	var f;
	var v;
	var i;
	if ( !isPlainObject( options ) ) {
		return new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
	}
	for ( i = 0; i < SETTINGS_NAMES.length; i++ ) {
		name = SETTINGS_NAMES[ i ];
		if ( hasOwnProp( options, name ) ) {
			v = options[ name ];
			o = SETTINGS[ name ];
			f = VALIDATORS[ o.type ];
			if ( !f.assert( v ) ) {
				return new TypeError( f.msg( name, v ) );
			}
			opts[ name ] = v;
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;
