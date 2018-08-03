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

var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isObject = require( '@stdlib/assert/is-plain-object' );
var isArray = require( '@stdlib/assert/is-array' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );


// MAIN //

/**
* Generates array tuples from input arrays.
*
* @param {...Array} arr - input arrays to be zipped
* @param {Object} [opts] - function options
* @param {boolean} [opts.trunc=true] - boolean indicating whether to truncate arrays longer than the shortest input array
* @param {*} [opts.fill=null] - fill value used for arrays of unequal length
* @param {boolean} [opts.arrays=false] - boolean indicating whether an input array should be interpreted as an array of arrays to be zipped
* @throws {TypeError} must provide array arguments
* @throws {Error} must provide at least one array
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Array} output array of arrays
*
* @example
* var zipped = zip( [ 1, 2 ], [ 'a', 'b' ] );
* // returns [ [ 1, 'a' ], [ 2, 'b' ] ]
*
* @example
* var zipped = zip( [ 1, 2, 3 ], [ 'a', 'b' ] );
* // returns [ [ 1, 'a' ], [ 2, 'b' ] ]
*
* @example
* var opts = {
*     'trunc': false
* };
*
* var zipped = zip( [ 1, 2, 3 ], [ 'a', 'b' ], opts );
* // returns [ [ 1, 'a' ], [ 2, 'b' ], [ 3, null ] ]
*
* @example
* var opts = {
*     'trunc': false,
*     'fill': ''
* };
*
* var zipped = zip( [ 1, 2, 3 ], [ 'a', 'b' ], opts );
* // returns [ [ 1, 'a' ], [ 2, 'b' ], [ 3, '' ] ]
*
* @example
* var arr = [ [ 1, 2 ], [ 'a', 'b' ] ];
*
* // Default behavior:
* var zipped = zip( arr );
* // returns [ [ [ 1, 2 ] ], [ [ 'a', 'b' ] ] ]
*
* // Array of arrays:
* zipped = zip( arr, { 'arrays': true } );
* // returns [ [ 1, 'a' ], [ 2, 'b' ] ]
*/
function zip() {
	var nargs;
	var args;
	var fill;
	var opts;
	var arg;
	var flg;
	var len;
	var arr;
	var out;
	var val;
	var i;
	var j;

	opts = {};
	fill = null;
	args = Array.prototype.slice.call( arguments );
	nargs = args.length;

	for ( i = 0; i < nargs-1; i++ ) {
		if ( !isArray( args[i] ) ) {
			throw new TypeError( 'invalid argument. Must provide array arguments. Value: `' + args[i] + '`.' );
		}
	}
	arg = args[ nargs-1 ];
	flg = isObject( arg );
	if ( !flg && !isArray( arg ) ) {
		throw new TypeError( 'invalid argument. Last argument must be either an array or an options object. Value: `' + arg + '`.' );
	}
	if ( flg ) {
		opts = args.pop();
	}
	nargs = args.length;
	if ( nargs === 0 ) {
		throw new Error( 'insufficient input arguments. Must provide at least one array.' );
	}
	if ( hasOwnProp( opts, 'trunc' ) ) {
		if ( !isBoolean( opts.trunc ) ) {
			throw new TypeError( 'invalid option. `trunc` option must be a boolean.  Value: `' + opts.trunc + '`.' );
		}
	} else {
		opts.trunc = true;
	}
	if ( hasOwnProp( opts, 'fill' ) ) {
		fill = opts.fill;
	}
	if ( hasOwnProp( opts, 'arrays' ) ) {
		if ( !isBoolean( opts.arrays ) ) {
			throw new TypeError( 'invalid option. `arrays` option must be a boolean. Value: `' + opts.arrays + '`.' );
		}
	} else {
		opts.arrays = false;
	}
	if ( nargs === 1 && opts.arrays ) {
		// Treat the lone array argument as an array of arrays to be zipped...
		args = args[ 0 ];
		nargs = args.length;
	}
	len = args[ 0 ].length;
	if ( opts.trunc ) {
		// Find the min array length...
		for ( i = 0; i < nargs; i++ ) {
			val = args[ i ].length;
			if ( val < len ) {
				len = val;
			}
		}
	} else {
		// Find the max array length...
		for ( i = 0; i < nargs; i++ ) {
			val = args[ i ].length;
			if ( val > len ) {
				len = val;
			}
		}
	}
	out = new Array( len );
	for ( j = 0; j < len; j++ ) {
		// Temporary array to store tuples...
		arr = new Array( nargs );

		// Create the tuples...
		for ( i = 0; i < nargs; i++ ) {
			arg = args[ i ];

			// If an array is too short, use a fill value...
			if ( arg.length <= j ) {
				arr[ i ] = fill;
				continue;
			}
			arr[ i ] = arg[ j ];
		}
		out[ j ] = arr;
	}
	return out;
}


// EXPORTS //

module.exports = zip;
