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

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var iteratorSymbol = require( '@stdlib/symbol/iterator' );
var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Returns an iterator which returns numbers incremented by `1`.
*
* @param {number} start - starting value (inclusive)
* @param {number} [stop=+infinity] - stopping value
* @throws {TypeError} first argument must be a number
* @throws {TypeError} second argument must be a number
* @returns {Iterator} iterator
*
* @example
* var iter = iterUnitspace( 0, 99 );
*
* var v = iter.next().value;
* // returns 0
*
* v = iter.next().value;
* // returns 1
*
* v = iter.next().value;
* // returns 2
*
* // ...
*/
function iterUnitspace( start, stop ) {
	var STOP;
	var iter;
	var curr;
	var FLG;
	if ( !isNumber( start ) || isnan( start ) ) {
		throw new TypeError( 'invalid argument. First argument must be a number. Value: `' + start + '`.' );
	}
	if ( arguments.length > 1 ) {
		if ( !isNumber( stop ) || isnan( stop ) ) {
			throw new TypeError( 'invalid argument. Second argument must be a number. Value: `' + stop + '`.' );
		}
		STOP = stop;
	} else {
		STOP = PINF;
	}
	curr = start - 1;

	// Create an iterator protocol-compliant object:
	iter = {};
	setReadOnly( iter, 'next', next );
	setReadOnly( iter, 'return', end );

	// If an environment supports `Symbol.iterator`, make the iterator iterable:
	if ( iteratorSymbol ) {
		setReadOnly( iter, iteratorSymbol, factory );
	}
	return iter;

	/**
	* Returns an iterator protocol-compliant object containing the next iterated value.
	*
	* @private
	* @returns {Object} iterator protocol-compliant object
	*/
	function next() {
		if ( FLG ) {
			return {
				'done': true
			};
		}
		curr += 1;
		if ( curr > STOP ) {
			FLG = true;
			return {
				'done': true
			};
		}
		return {
			'value': curr,
			'done': false
		};
	}

	/**
	* Finishes an iterator.
	*
	* @private
	* @param {*} [value] - value to return
	* @returns {Object} iterator protocol-compliant object
	*/
	function end( value ) {
		FLG = true;
		if ( arguments.length ) {
			return {
				'value': value,
				'done': true
			};
		}
		return {
			'done': true
		};
	}

	/**
	* Returns a new iterator.
	*
	* @private
	* @returns {Iterator} iterator
	*/
	function factory() {
		return iterUnitspace( start, STOP );
	}
}


// EXPORTS //

module.exports = iterUnitspace;
