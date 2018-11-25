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
var randu = require( '@stdlib/random/base/randu' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var isObject = require( '@stdlib/assert/is-object' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var bartlettTest = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var result;
	var len;
	var x;
	var y;
	var z;
	var i;

	x = new Array( 50 );
	y = new Array( 50 );
	z = new Array( 50 );
	len = x.length;
	for ( i = 0; i < len; i++ ) {
		x[ i ] = ( randu()*50.0 );
		y[ i ] = ( randu()*50.0 ) + 10.0;
		z[ i ] = ( randu()*50.0 ) + 20.0;
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y[ i % y.length ] = ( randu()*50.0 ) + 10.0;
		result = bartlettTest( x, y, z );
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

bench( pkg+'::groups', function benchmark( b ) {
	var result;
	var group;
	var vals;
	var len;
	var i;

	vals = new Array( 150 );
	group = new Array( 150 );
	len = vals.length;
	for ( i = 0; i < len; i++ ) {
		group[ i ] = discreteUniform( 0, 2 );
		vals[ i ] = ( randu()*50.0 ) + ( 10.0*group[ i ] );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		vals[ i % vals.length ] = ( randu()*50.0 ) + ( 10.0*group[ i ] );
		result = bartlettTest( vals, {
			'groups': group
		});
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
	var group;
	var vals;
	var len;
	var i;

	vals = new Array( 100 );
	group = new Array( 100 );
	len = vals.length;
	for ( i = 0; i < len; i++ ) {
		group[ i ] = discreteUniform( 0, 2 );
		vals[ i ] = ( randu()*50.0 ) + ( 10.0*group[ i ] );
	}
	result = bartlettTest( vals, {
		'groups': group
	});

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
