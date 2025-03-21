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

var bench = require( '@stdlib/bench' );
var isObject = require( '@stdlib/assert/is-object' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var pkg = require( './../package.json' ).name;
var binomialTest = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var result;
	var x;
	var n;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = discreteUniform( 0, 1000 );
		n = x + discreteUniform( 0, 1000 );
		result = binomialTest( x, n );
		if ( typeof result !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isObject( result ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::array', function benchmark( b ) {
	var result;
	var arr;
	var i;

	arr = new Array( 2 );
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ 0 ] = discreteUniform( 0, 1000 );
		arr[ 1 ] = discreteUniform( 0, 1000 );
		result = binomialTest( arr );
		if ( typeof result !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isObject( result ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::one-sided', function benchmark( b ) {
	var result;
	var opts;
	var x;
	var n;
	var i;

	opts = {
		'alternative': 'less'
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = discreteUniform( 0, 1000 );
		n = x + discreteUniform( 0, 1000 );
		result = binomialTest( x, n, opts );
		if ( typeof result !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isObject( result ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::p=0.8', function benchmark( b ) {
	var result;
	var opts;
	var x;
	var n;
	var i;

	opts = {
		'p': 0.8
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = discreteUniform( 0, 1000 );
		n = x + discreteUniform( 0, 1000 );
		result = binomialTest( x, n, opts );
		if ( typeof result !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isObject( result ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':print', function benchmark( b ) {
	var digits;
	var result;
	var output;
	var i;

	result = binomialTest( 682, 925 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		digits = ( i % 8 ) + 1;
		output = result.print({
			'digits': digits
		});
		if ( typeof output !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( output ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
