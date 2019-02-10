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
var isObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var validators = require( './validators' );


// VARIABLES //

var KEYS = objectKeys( validators );


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {NonNegativeInteger} [options.translateX] - horizontal translation
* @param {NonNegativeInteger} [options.translateY] - vertical translation
* @param {boolean} [options.autoRender] - indicates whether to re-render on a change event
* @returns {(Error|null)} error or null
*
* @example
* var opts = {};
* var options = {
*     'translateX': 90,
*     'translateY': 20
* };
* var err = validate( opts, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, options ) {
	var err;
	var key;
	var val;
	var i;
	if ( !isObject( options ) ) {
		return new TypeError( 'invalid argument. Options argument must be an object. Value: `' + options + '`.' );
	}
	for ( i = 0; i < KEYS.length; i++ ) {
		key = KEYS[ i ];
		if ( hasOwnProp( options, key ) ) {
			val = options[ key ];
			err = validators[ key ]( val );
			if ( err ) {
				return err;
			}
			opts[ key ] = val;
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;
