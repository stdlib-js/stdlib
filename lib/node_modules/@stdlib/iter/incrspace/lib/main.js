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
var ceil = require( '@stdlib/math/base/special/ceil' );


// VARIABLES //

var DEFAULT_INCREMENT = 1;


// MAIN //

/**
* Returns an iterator which returns evenly spaced numbers according to a specified increment.
*
* @param {number} start - starting value (inclusive)
* @param {number} stop - stopping value (exclusive)
* @param {number} [increment=1] - increment
* @throws {TypeError} first argument must be a number
* @throws {TypeError} second argument must be a number
* @throws {TypeError} third argument must be a number
* @returns {Iterator} iterator
*
* @example
* var iter = iterIncrspace( 0, 100, 2 );
*
* var v = iter.next().value;
* // returns 0
*
* v = iter.next().value;
* // returns 2
*
* v = iter.next().value;
* // returns 4
*
* // ...
*/
function iterIncrspace( start, stop, increment ) {
	var iter;
	var incr;
	var FLG;
	var N;
	var i;

	if ( !isNumber( start ) || isnan( start ) ) {
		throw new TypeError( 'invalid argument. First argument must be a number. Value: `' + start + '`.' );
	}
	if ( !isNumber( stop ) || isnan( stop ) ) {
		throw new TypeError( 'invalid argument. Second argument must be a number. Value: `' + stop + '`.' );
	}
	if ( arguments.length > 2 ) {
		if ( !isNumber( increment ) || isnan( increment ) ) {
			throw new TypeError( 'invalid argument. Third argument must be a number. Value: `' + increment + '`.' );
		}
		incr = increment;
	} else {
		incr = DEFAULT_INCREMENT;
	}
	N = ceil( (stop-start)/incr );
	i = -1;

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
		i += 1;
		if ( FLG || i >= N ) {
			return {
				'done': true
			};
		}
		return {
			'value': start + (i*incr),
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
		return iterIncrspace( start, stop, incr );
	}
}


// EXPORTS //

module.exports = iterIncrspace;
