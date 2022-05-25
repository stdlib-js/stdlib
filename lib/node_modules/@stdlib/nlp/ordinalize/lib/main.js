/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var format = require( '@stdlib/string/format' );
var isInteger = require( '@stdlib/assert/is-integer' );
var validate = require( './validate.js' );


// MAIN //

/**
* Turns an integer into an ordinal string (e.g., `1st`, `2nd`, etc.).
*
* @param {(string|integer)} value - string or number to convert
* @param {Object} [options] - options
* @param {boolean} [options.suffixOnly=false] - boolean indicating whether to return only the suffix
* @param {string} [options.lang='en'] - language code
* @param {string} [options.gender='masculine'] - grammatical gender (used if applicable; either 'masculine' or 'feminine')
* @throws {TypeError} must provide a string or integer
* @returns {string} ordinal string or suffix
*
* @example
* var out = ordinalize( '1' );
* // returns '1st'
*
* @example
* var out = ordinalize( '2' );
* // returns '2nd'
*
* @example
* var out = ordinalize( '21' );
* // returns '21st'
*
* @example
* var out = ordinalize( '1', { 'lang': 'de' } );
* // returns '1.'
*
* @example
* var out = ordinalize( '7', { 'lang': 'es' } );
* // returns '7ª'
*/
function ordinalize( value, options ) {
	var lastTwoDigits;
	var lastDigit;
	var suffix;
	var opts;
	var err;

	if ( !isString( value ) && !isInteger( value ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a string or integer. Value: %s.', value ) );
	}
	opts = {};
	if ( arguments.length > 1 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	value = String( value );
	lastDigit = value[ value.length-1 ];
	lastTwoDigits = value.slice( -2 );

	switch ( opts.lang ) {
	case 'fr':
		if ( value === '1' ) {
			suffix = opts.gender === 'feminine' ? 're' : 'er';
		}
		else {
			suffix = 'e';
		}
		break;
	case 'de':
	case 'fin':
		suffix = '.';
		break;
	case 'it':
	case 'pt':
	case 'es':
		if ( opts.gender === 'feminine' ) {
			suffix = 'ª';
		} else {
			suffix = 'º';
		}
		break;
	case 'swe':
		if (
			( lastTwoDigits !== '11' && lastDigit === '1' ) ||
			( lastTwoDigits !== '12' && lastDigit === '2' ) )
		{
			suffix = ':a';
		}
		else {
			suffix = ':e';
		}
		break;
	case 'en':
	default:
		if ( lastTwoDigits !== '11' && lastDigit === '1' ) {
			suffix = 'st';
		}
		else if ( lastTwoDigits !== '12' && lastDigit === '2' ) {
			suffix = 'nd';
		}
		else if ( lastTwoDigits !== '13' && lastDigit === '3' ) {
			suffix = 'rd';
		}
		else {
			suffix = 'th';
		}
	}
	if ( opts.suffixOnly ) {
		return suffix;
	}
	return value + suffix;
}


// EXPORTS //

module.exports = ordinalize;
