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

var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var removePunctuation = require( '@stdlib/string/remove-punctuation' );
var format = require( '@stdlib/string/format' );
var validate = require( './validate.js' );
var INDEX_YEAR = require( './index_year.js' );
var INDEX_NAME = require( './index_name.js' );
var INDEX_PARTY = require( './index_party.js' );
var db = require( './db.js' );
var union = require( './union.js' );
var getFile = require( './get_file.js' );


// MAIN //

/**
* Returns State of the Union addresses.
*
* @param {Options} [options] - options object
* @param {(string|StringArray)} [options.name] - name of president(s)
* @param {(PositiveInteger|PositiveIntegerArray)} [options.year] - year(s)
* @param {PositiveIntegerArray} [options.range] - year range
* @param {(string|StringArray)} [options.party] - political party
* @throws {RangeError} unrecognized property value
* @returns {ObjectArray} SOTU addresses
*
* @example
* var speeches = sotu();
* // returns <ObjectArray>
*
* @example
* var speeches = sotu({
*     'name': [ 'Franklin D Roosevelt', 'William J. Clinton' ]
* });
* // returns <ObjectArray>
*/
function sotu( options ) {
	var indices;
	var opts;
	var ids;
	var err;
	var out;
	var i;

	opts = {};
	if ( arguments.length > 0 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	// Normalize options...
	if ( isString( opts.name ) ) {
		opts.name = [ opts.name ];
	}
	if ( opts.name ) {
		for ( i = 0; i < opts.name.length; i++ ) {
			opts.name[ i ] = removePunctuation( opts.name[ i ] );
		}
	}
	if ( isString( opts.party ) ) {
		opts.party = [ opts.party ];
	}
	if ( isNumber( opts.year ) ) {
		opts.year = [ opts.year ];
	}
	// Compute indices...
	indices = [];
	if ( opts.name ) {
		for ( i = 0; i < opts.name.length; i++ ) {
			if ( !hasOwnProp( INDEX_NAME, opts.name[ i ] ) ) {
				throw new RangeError( format( 'invalid option. Unrecognized `%s`. Option: `[%s]`.', 'name', opts.name.join(',') ) );
			}
			ids = INDEX_NAME[ opts.name[ i ] ];
			indices.push( ids );
		}
	}
	if ( opts.year ) {
		for ( i = 0; i < opts.year.length; i++ ) {
			if ( !hasOwnProp( INDEX_YEAR, opts.year[ i ] ) ) {
				throw new RangeError( format( 'invalid option. Unrecognized `%s`. Option: `[%s]`.', 'year', opts.year.join(',') ) );
			}
			ids = INDEX_YEAR[ opts.year[ i ] ];
			indices.push( ids );
		}
	}
	if ( opts.party ) {
		for ( i = 0; i < opts.party.length; i++ ) {
			if ( !hasOwnProp( INDEX_PARTY, opts.party[ i ] ) ) {
				throw new RangeError( format( 'invalid option. Unrecognized `%s`. Option: `[%s]`.', 'party', opts.party.join(',') ) );
			}
			ids = INDEX_PARTY[ opts.party[ i ] ];
			indices.push( ids );
		}
	}
	if ( opts.range ) {
		for ( i = opts.range[ 0 ]; i <= opts.range[ 1 ]; i++ ) {
			ids = INDEX_YEAR[ i ];
			if ( ids ) {
				indices.push( ids );
			}
		}
	}
	if ( indices.length ) {
		indices = union.apply( null, indices );
	} else {
		// If no options have been provided to limit the query range, return the entire dataset...
		for ( i = 0; i < db.length; i++ ) {
			indices.push( i );
		}
	}
	// Retrieve the data from the database...
	out = [];
	for ( i = 0; i < indices.length; i++ ) {
		out.push( getFile( indices[i] ) );
	}
	return out;
}


// EXPORTS //

module.exports = sotu;
