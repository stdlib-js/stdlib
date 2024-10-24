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
var isArray = require( '@stdlib/assert/is-array' );
var isString = require( '@stdlib/assert/is-string' );
var isBoolean = require( '@stdlib/assert/is-boolean' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var format = require( '@stdlib/string/format' );


// VARIABLES //

var ACTIONS = [
	'moveRight',
	'moveLeft',
	'moveWordRight',
	'moveWordLeft',
	'moveBeginning',
	'moveEnd',
	'tab',
	'indentLineRight',
	'indentLineLeft',
	'deleteLeft',
	'deleteRight',
	'deleteWordLeft',
	'deleteWordRight',
	'deleteLineLeft',
	'deleteLineRight',
	'yankKilled',
	'yankPop',
	'undo',
	'redo',
	'transposeAboutCursor',
	'uppercaseNextWord',
	'capitalizeNextWord',
	'lowercaseNextWord',
	'clearScreen'
];
var KEY_BOOLEAN_PROPS = [ 'ctrl', 'shift', 'meta' ];


// FUNCTIONS //

/**
* Validates a key object.
*
* @private
* @param {Object} obj - key object
* @returns {(Error|null)} error or null
*/
function validateKey( obj ) {
	var prop;
	var i;
	if ( !hasOwnProp( obj, 'name' ) ) {
		return new TypeError( format( 'invalid option. Each key object must have a `name` property. Value: `%s`.', obj ) );
	}
	if ( !isString( obj[ 'name' ] ) ) {
		return new TypeError( format( 'invalid option. Each key object\'s `name` property must be a string. Value: `%s`.', obj ) );
	}
	for ( i = 0; i < KEY_BOOLEAN_PROPS.length; i++ ) {
		prop = KEY_BOOLEAN_PROPS[ i ];
		if ( hasOwnProp( obj, prop ) ) {
			if ( !isBoolean( obj[ prop ] ) ) {
				return new TypeError( format( 'invalid option. Each key object\'s `%s` property must be a boolean. Value: `%s`.', prop, obj ) );
			}
		}
	}
	return null;
}


// MAIN //

/**
* Validates keybindings.
*
* @param {Object} opts - destination object
* @param {Object} options - settings options
* @returns {(Error|null)} error or null
*/
function validate( opts, options ) {
	var list;
	var out;
	var err;
	var i;
	var j;
	var o;
	if ( !isPlainObject( options ) ) {
		return new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
	}
	for ( i = 0; i < ACTIONS.length; i++ ) {
		if ( hasOwnProp( options, ACTIONS[ i ] ) ) {
			list = options[ ACTIONS[ i ] ];
			if ( !isArray( list ) ) {
				return new TypeError( format( 'invalid option. Each action must be an array of objects. Value: `%s`.', list ) );
			}
			out = [];
			for ( j = 0; j < list.length; j++ ) {
				o = list[ j ];
				if ( !isPlainObject( o ) ) {
					return new TypeError( format( 'invalid option. Each action must be an array of objects. Value: `%s`.', list ) );
				}
				err = validateKey( o );
				if ( err ) {
					return err;
				}
				out.push( {
					'name': o.name,
					'ctrl': o.ctrl || false,
					'shift': o.shift || false,
					'meta': o.meta || false
				});
			}
			opts[ ACTIONS[ i ] ] = out;
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;
