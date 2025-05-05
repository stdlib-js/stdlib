/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var objectKeys = require( '@stdlib/utils/keys' );
var setNonEnumerableReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var format = require( '@stdlib/string/format' );
var deepCopy = require( '@stdlib/utils/copy' );
var contains = require( '@stdlib/array/base/assert/contains' ).factory;
var validateKeybindings = require( './validate_keybindings.js' );
var ACTIONS = require( './actions.js' );


// VARIABLES //

var REPLACER = [ 'name', 'ctrl', 'shift', 'meta' ];
var isAction = contains( ACTIONS );


// MAIN //

/**
* Keybindings constructor.
*
* @private
* @constructor
* @param {Object} keybindings - keybindings object
* @throws {TypeError} each key must correspond to a single action
* @returns {Keybindings} keybindings instance
*/
function Keybindings( keybindings ) {
	var actions;
	var action;
	var keys;
	var key;
	var i;
	var j;

	if ( !( this instanceof Keybindings ) ) {
		return new Keybindings( keybindings );
	}

	// Initialize internal variables to store keybindings:
	this._action2Keys = keybindings;
	this._key2Action = {};

	// Create a hash table of keybindings:
	actions = objectKeys( keybindings );
	for ( i = 0; i < actions.length; i++ ) {
		action = actions[ i ];
		keys = keybindings[ action ];
		for ( j = 0; j < keys.length; j++ ) {
			key = JSON.stringify( keys[ j ], REPLACER );
			if ( hasOwnProp( this._key2Action, key ) ) {
				throw new TypeError( format( 'invalid argument. Each key in the keybindings argument must correspond to a single action. Value: `%s`', key ) );
			}
			this._key2Action[ key ] = action;
		}
	}

	return this;
}

/**
* Sets a keybinding.
*
* @private
* @name set
* @memberof Keybindings.prototype
* @type {Function}
* @param {string} action - action name
* @param {Array<Object>} keys - list of keys
* @throws {TypeError} first argument must be a valid action name
* @throws {TypeError} second argument must be an array of valid keys corresponding to a single action
* @returns {void}
*/
setNonEnumerableReadOnly( Keybindings.prototype, 'set', function set( action, keys ) {
	var validatedKeys;
	var JSONKeys;
	var key;
	var obj;
	var out;
	var err;
	var i;

	if ( !isAction( action ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a valid action name. Value: `%s`.', action ) );
	}

	// Validate provided keys:
	obj = {};
	out = {};
	obj[ action ] = keys;
	err = validateKeybindings( out, obj );
	if ( err ) {
		throw err;
	}

	// Check for collisions in existing hash table:
	JSONKeys = [];
	validatedKeys = out[ action ];
	for ( i = 0; i < validatedKeys.length; i++ ) {
		key = JSON.stringify( validatedKeys[ i ], REPLACER );
		if ( hasOwnProp( this._key2Action, key ) ) {
			throw new TypeError( format( 'invalid argument. Each key in the keys argument must correspond to a single action. Value: `%s`', key ) );
		}
		JSONKeys.push( key );
	}
	// Update hash table:
	for ( i = 0; i < JSONKeys.length; i++ ) {
		this._key2Action[ JSONKeys[ i ] ] = action;
	}
	this._action2Keys[ action ] = validatedKeys;
});

/**
* Gets action name corresponding to the specified key.
*
* @private
* @name getAction
* @memberof Keybindings.prototype
* @type {Function}
* @param {Object} key
* @returns {(string|null)} action name
*/
setNonEnumerableReadOnly( Keybindings.prototype, 'getAction', function getAction( key ) {
	var serializedKey = JSON.stringify( key, REPLACER );
	if ( !hasOwnProp( this._key2Action, serializedKey ) ) {
		return null;
	}
	return this._key2Action[ serializedKey ];
});

/**
* Lists all keybindings.
*
* @private
* @name list
* @memberof Keybindings.prototype
* @type {Function}
* @returns {Object} keybindings object
*/
setNonEnumerableReadOnly( Keybindings.prototype, 'list', function list() {
	return deepCopy( this._action2Keys );
});


// EXPORTS //

module.exports = Keybindings;
