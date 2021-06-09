/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var isInteger = require( '@stdlib/assert/is-integer' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isObject = require( '@stdlib/assert/is-object' );
var floor = require( '@stdlib/math/base/special/floor' );
var round = require( '@stdlib/math/base/special/round' );
var ceil = require( '@stdlib/math/base/special/ceil' );


// VARIABLES //

var timestamp = /^\d{10}$|^\d{13}$/;
var rounders = [ 'floor', 'ceil', 'round' ];


// FUNCTIONS //

/**
* Validates a date parameter.
*
* @private
* @param {*} value - value to be validated
* @param {string} name - name to be used in error messages
* @throws {TypeError} value must either be a date string, Date object, Unix timestamp, or JavaScript timestamp
* @throws {Error} numeric date must be either a Unix or Javascript timestamp
* @returns {Date} validated date
*/
function validDate( value, name ) {
	var type;

	type = typeof value;
	if ( type === 'string' ) {
		value = Date.parse( value );
		if ( value !== value ) {
			throw new Error( 'invalid argument. Unable to parse ' + name.toLowerCase() + ' date.' );
		}
		value = new Date( value );
	}
	if ( type === 'number' ) {
		if ( !timestamp.test( value ) ) {
			throw new Error( 'invalid argument. Numeric ' + name.toLowerCase() + ' date must be either a Unix or Javascript timestamp.' );
		}
		if ( value.toString().length === 10 ) {
			value *= 1000; // sec to ms
		}
		value = new Date( value );
	}
	if ( !(value instanceof Date) ) {
		throw new TypeError( 'invalid argument. ' + name + ' date must either be a date string, Date object, Unix timestamp, or JavaScript timestamp.' );
	}
	return value;
}


// MAIN //

/**
* Generates an array of linearly spaced dates.
*
* @param {(Date|number|string)} start - start time as either a `Date` object, Unix timestamp, JavaScript timestamp, or date string
* @param {(Date|number|string)} stop - stop time as either a `Date` object, Unix timestamp, JavaScript timestamp, or date string
* @param {number} [length] - output array length (default: 100)
* @param {Object} [options] - function options
* @param {string} [options.round] - specifies how sub-millisecond times should be rounded: [ 'floor', 'ceil', 'round' ] (default: 'floor' )
* @throws {TypeError} length argument must a positive integer
* @throws {Error} must provide valid options
* @returns {Array} array of dates
*
* @example
* var stop = '2014-12-02T07:00:54.973Z';
* var start = new Date( stop ) - 60000;
*
* var arr = datespace( start, stop, 6 );
* // returns [...]
*
* @example
* // Equivalent of Math.ceil():
* var arr = datespace( 1417503655000, 1417503655001, 3, { 'round': 'ceil' } );
* // returns [...]
*
* // Equivalent of Math.round():
* arr = datespace( 1417503655000, 1417503655001, 3, { 'round': 'round' } );
* // returns [...]
*/
function datespace( start, stop, length, options ) {
	var opts;
	var len;
	var flg;
	var arr;
	var end;
	var fcn;
	var tmp;
	var d;
	var i;

	len = 100;
	flg = true;
	opts = {
		'round': 'floor'
	};
	start = validDate( start, 'Start' );
	stop = validDate( stop, 'Stop' );
	if ( arguments.length > 2 ) {
		if ( arguments.length === 3 ) {
			if ( isObject( length ) ) {
				opts = length;
			} else {
				len = length;

				// Turn off checking the options object...
				flg = false;
			}
		} else {
			opts = options;
			len = length;
		}
		if ( len === 0 ) {
			return [];
		}
		if ( !isInteger( len ) || len < 0 ) {
			throw new TypeError( 'invalid argument. Length must a positive integer.' );
		}
		if ( flg ) {
			if ( !isObject( opts ) ) {
				throw new TypeError( 'invalid argument. Options argument must be an object. Value: `' + opts + '`.' );
			}
			if ( hasOwnProp( opts, 'round' ) ) {
				if ( !isString( opts.round ) ) {
					throw new TypeError( 'invalid option. `round` option must be a string.' );
				}
				if ( rounders.indexOf( opts.round ) === -1 ) {
					throw new Error( 'invalid input option. `round` option must be one of [' + rounders.join( ',' ) + '].' );
				}
			}
		}
	}
	switch ( opts.round ) {
	case 'round':
		fcn = round;
		break;
	case 'ceil':
		fcn = ceil;
		break;
	default:
	case 'floor':
		fcn = floor;
		break;
	}

	// Calculate the increment...
	end = len - 1;
	d = ( stop.getTime() - start.getTime() ) / end;

	// Build the output array...
	arr = new Array( len );
	tmp = start;
	arr[ 0 ] = tmp;
	tmp = tmp.getTime();
	for ( i = 1; i < end; i++ ) {
		tmp += d;
		arr[ i ] = new Date( fcn( tmp ) );
	}
	arr[ end ] = stop;
	return arr;
}


// EXPORTS //

module.exports = datespace;
