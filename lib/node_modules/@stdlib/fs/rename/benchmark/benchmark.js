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

var join = require( 'path' ).join;
var bench = require( '@stdlib/bench' );
var pkg = require( './../package.json' ).name;
var rename = require( './../lib' );


// FIXTURES //

var FILE = join( __dirname, 'fixtures', 'file.txt' );


// FUNCTIONS //

/**
* Restores a fixture file.
*
* @private
* @param {string} name - current fixture filename
*/
function restore( name ) {
	rename.sync( name, FILE );
}


// MAIN //

bench( pkg, function benchmark( b ) {
	var op;
	var np;
	var i;

	op = FILE;
	np = op;

	i = 0;
	b.tic();

	return next();

	function next() {
		i += 1;
		if ( i <= b.iterations ) {
			op = np;
			np = 'file '+i+'.txt';
			return rename( op, np, done );
		}
		b.toc();
		b.pass( 'benchmark finished' );

		restore( np );
		b.end();
	}

	function done( error ) {
		if ( error ) {
			b.fail( error.message );
		}
		next();
	}
});

bench( pkg+':sync', function benchmark( b ) {
	var out;
	var np;
	var op;
	var i;

	op = FILE;
	np = op;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		op = np;
		np = 'file'+i+'.txt';
		out = rename.sync( op, np );
		if ( out instanceof Error ) {
			b.fail( out.message );
		}
	}
	b.toc();
	if ( out instanceof Error ) {
		b.fail( out.message );
	}
	b.pass( 'benchmark finished' );

	restore( np );
	b.end();
});
