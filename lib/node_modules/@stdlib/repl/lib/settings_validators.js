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

var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var format = require( '@stdlib/string/format' );


// FUNCTIONS //

/**
* Returns a formatted error message for a value is not a boolean.
*
* @private
* @param {string} name - setting name
* @param {*} value - invalid value
* @returns {string} formatted error message
*/
function booleanErrMsg( name, value ) {
	return format( 'invalid argument. `%s` setting must be a boolean. Value: `%s`.', name, value );
}

/**
* Returns a formatted error message for a value is not an integer.
*
* @private
* @param {string} name - setting name
* @param {*} value - invalid value
* @returns {string} formatted error message
*/
function integerErrMsg( name, value ) {
	return format( 'invalid argument. `%s` setting must be an integer. Value: `%s`.', name, value );
}

/**
* Returns a formatted error message for a value is not a number.
*
* @private
* @param {string} name - setting name
* @param {*} value - invalid value
* @returns {string} formatted error message
*/
function numberErrMsg( name, value ) {
	return format( 'invalid argument. `%s` setting must be a number. Value: `%s`.', name, value );
}

/**
* Returns a formatted error message for a value is not a string.
*
* @private
* @param {string} name - setting name
* @param {*} value - invalid value
* @returns {string} formatted error message
*/
function stringErrMsg( name, value ) {
	return format( 'invalid argument. `%s` setting must be a string. Value: `%s`.', name, value );
}


// MAIN //

/**
* Mapping from data types to validation functions.
*
* @private
* @name VALIDATORS
* @type {Object}
*/
var VALIDATORS = { // eslint-disable-line vars-on-top
	'boolean': {
		'assert': isBoolean,
		'msg': booleanErrMsg
	},
	'integer': {
		'assert': isInteger,
		'msg': integerErrMsg
	},
	'number': {
		'assert': isNumber,
		'msg': numberErrMsg
	},
	'string': {
		'assert': isString,
		'msg': stringErrMsg
	}
};


// EXPORTS //

module.exports = VALIDATORS;
