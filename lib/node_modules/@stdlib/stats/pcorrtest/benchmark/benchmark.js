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
var rnorm = require( '@stdlib/random/base/normal' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var pkg = require( './../package.json' ).name;
var pcorrtest = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var result;
	var rho;
	var idx;
	var y;
	var x;
	var i;

	rho = 0.5;
	x = [];
	y = [];
	for ( i = 0; i < 300; i++ ) {
		x.push( rnorm( 0.0, 1.0 ) );
		y.push( ( rho * x[ i ] ) + rnorm( 0.0, sqrt( 1.0 - (rho*rho) ) ) );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		idx = i % x.length;
		y[ idx ] = ( rho * x[ i ] ) + rnorm( 0.0, sqrt( 1.0 - (rho*rho) ) );
		result = pcorrtest( x, y );
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
	var rho;
	var idx;
	var y;
	var x;
	var i;

	rho = 0.5;
	x = [];
	y = [];
	for ( i = 0; i < 300; i++ ) {
		x.push( rnorm( 0.0, 1.0 ) );
		y.push( ( rho * x[ i ] ) + rnorm( 0.0, sqrt( 1.0 - (rho*rho) ) ) );
	}
	opts = {
		'alternative': 'less'
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		idx = i % x.length;
		y[ idx ] = ( rho * x[ i ] ) + rnorm( 0.0, sqrt( 1.0 - (rho*rho) ) );
		result = pcorrtest( x, y, opts );
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

bench( pkg+':rho=0.5', function benchmark( b ) {
	var result;
	var opts;
	var rho;
	var idx;
	var y;
	var x;
	var i;

	rho = 0.5;
	x = [];
	y = [];
	for ( i = 0; i < 300; i++ ) {
		x.push( rnorm( 0.0, 1.0 ) );
		y.push( ( rho * x[ i ] ) + rnorm( 0.0, sqrt( 1.0 - (rho*rho) ) ) );
	}
	opts = {
		'rho': 0.5
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		idx = i % x.length;
		y[ idx ] = ( rho * x[ i ] ) + rnorm( 0.0, sqrt( 1.0 - (rho*rho) ) );
		result = pcorrtest( x, y, opts );
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
	var rho;
	var y;
	var x;
	var i;

	rho = 0.5;
	x = [];
	y = [];
	for ( i = 0; i < 300; i++ ) {
		x.push( rnorm( 0.0, 1.0 ) );
		y.push( ( rho * x[ i ] ) + rnorm( 0.0, sqrt( 1.0 - (rho*rho) ) ) );
	}
	result = pcorrtest( x, y );

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
