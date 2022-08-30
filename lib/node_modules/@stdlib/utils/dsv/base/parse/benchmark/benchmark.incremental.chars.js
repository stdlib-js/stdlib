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

var bench = require( '@stdlib/bench' );
var pow = require( '@stdlib/math/base/special/pow' );
var pkg = require( './../package.json' ).name;
var Parser = require( './../lib' );


// VARIABLES //

var OPTS = {
	'delimiter': ',',
	'newline': '\r\n'
};


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - number of characters
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	var data;
	var i;

	data = [];
	for ( i = 0; i < len; i++ ) {
		data.push( i );
	}
	data = data.join( '' ) + OPTS.newline;

	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var parse;
		var opts;
		var out;
		var i;

		opts = {
			'delimiter': OPTS.delimiter,
			'newline': OPTS.newline,
			'onRow': onRow
		};
		parse = new Parser( opts );

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			out = parse.next( data );
			if ( typeof out !== 'object' ) {
				b.fail( 'should return an object' );
			}
		}
		b.toc();
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
		b.pass( 'benchmark finished' );
		b.end();

		/**
		* Callback invoked upon processing a record.
		*
		* @private
		* @param {Array} record - record
		*/
		function onRow( record ) {
			if ( typeof record !== 'object' ) {
				b.fail( 'should return an object' );
			}
		}
	}
}


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var len;
	var min;
	var max;
	var f;
	var i;

	min = 1; // 10^min
	max = 5; // 10^max

	for ( i = min; i <= max; i++ ) {
		len = pow( 10, i );
		f = createBenchmark( len );
		bench( pkg+'::incremental,line-by-line:lines=1,ncols=1,nchars='+(len+OPTS.newline.length)+',nfields=1', f );
	}
}

main();
