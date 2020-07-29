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
var pmf = require( '@stdlib/stats/base/dists/discrete-uniform/pmf' );
var max = require( '@stdlib/math/base/special/max' );
var pkg = require( './../package.json' ).name;
var chi2gof = require( './../lib' );


// MAIN //

bench( pkg+'::distribution_name', function benchmark( b ) {
	var result;
	var freqs;
	var len;
	var val;
	var x;
	var i;

	len = 100;
	x = new Array( len );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = discreteUniform( 0, 10 );
	}
	// Generate frequency table:
	freqs = new Array( 11 );
	for ( i = 0; i < 11; i++ ) {
		freqs[ i ] = 0;
	}
	for ( i = 0; i < len; i++ ) {
		val = x[ i ];
		freqs[ val ] += 1;
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		freqs[ i % freqs.length ] += max( discreteUniform( -1, 1 ), 0 );
		result = chi2gof( freqs, 'discrete-uniform', 0, 10 );
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

bench( pkg+'::distribution_name:simulate=true', function benchmark( b ) {
	var result;
	var freqs;
	var opts;
	var len;
	var val;
	var x;
	var i;

	len = 100;
	x = new Array( len );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = discreteUniform( 0, 10 );
	}
	// Generate frequency table:
	freqs = new Array( 11 );
	for ( i = 0; i < 11; i++ ) {
		freqs[ i ] = 0;
	}
	for ( i = 0; i < len; i++ ) {
		val = x[ i ];
		freqs[ val ] += 1;
	}
	opts = {
		'simulate': true
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		freqs[ i % freqs.length ] += max( discreteUniform( -1, 1 ), 0 );
		result = chi2gof( freqs, 'discrete-uniform', 0, 10, opts );
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

bench( pkg+'::distribution_name:simulate=true:iterations=250', function benchmark( b ) {
	var result;
	var freqs;
	var opts;
	var len;
	var val;
	var x;
	var i;

	len = 100;
	x = new Array( len );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = discreteUniform( 0, 10 );
	}
	// Generate frequency table:
	freqs = new Array( 11 );
	for ( i = 0; i < 11; i++ ) {
		freqs[ i ] = 0;
	}
	for ( i = 0; i < len; i++ ) {
		val = x[ i ];
		freqs[ val ] += 1;
	}
	opts = {
		'simulate': true,
		'iterations': 250
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		freqs[ i % freqs.length ] += max( discreteUniform( -1, 1 ), 0 );
		result = chi2gof( freqs, 'discrete-uniform', 0, 10, opts );
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

bench( pkg+'::distribution_name:simulate=true:iterations=100', function benchmark( b ) {
	var result;
	var freqs;
	var opts;
	var len;
	var val;
	var x;
	var i;

	len = 100;
	x = new Array( len );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = discreteUniform( 0, 10 );
	}
	// Generate frequency table:
	freqs = new Array( 11 );
	for ( i = 0; i < 11; i++ ) {
		freqs[ i ] = 0;
	}
	for ( i = 0; i < len; i++ ) {
		val = x[ i ];
		freqs[ val ] += 1;
	}
	opts = {
		'simulate': true,
		'iterations': 100
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		freqs[ i % freqs.length ] += max( discreteUniform( -1, 1 ), 0 );
		result = chi2gof( freqs, 'discrete-uniform', 0, 10, opts );
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

bench( pkg+'::probabilities', function benchmark( b ) {
	var result;
	var freqs;
	var probs;
	var len;
	var val;
	var x;
	var i;

	len = 100;
	x = new Array( len );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = discreteUniform( 0, 10 );
	}
	freqs = new Array( 11 );
	probs = new Array( 11 );
	for ( i = 0; i < 11; i++ ) {
		freqs[ i ] = 0;
		probs[ i ] = pmf( i, 0, 10 );
	}
	for ( i = 0; i < len; i++ ) {
		val = x[ i ];
		freqs[ val ] += 1;
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		freqs[ i % freqs.length ] += max( discreteUniform( -1, 1 ), 0 );
		result = chi2gof( freqs, probs );
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

bench( pkg+'::expected_counts', function benchmark( b ) {
	var expected;
	var result;
	var freqs;
	var len;
	var val;
	var x;
	var i;

	len = 100;
	x = new Array( len );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = discreteUniform( 0, 10 );
	}
	freqs = new Array( 11 );
	expected = new Array( 11 );
	for ( i = 0; i < 11; i++ ) {
		freqs[ i ] = 0;
		expected[ i ] = pmf( i, 0, 10 ) * len;
	}
	for ( i = 0; i < len; i++ ) {
		val = x[ i ];
		freqs[ val ] += 1;
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		freqs[ i % freqs.length ] += max( discreteUniform( -1, 1 ), 0 );
		result = chi2gof( freqs, expected );
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

bench( pkg+':toString', function benchmark( b ) {
	var digits;
	var result;
	var output;
	var x;
	var p;
	var i;

	x = [ 89, 37, 30, 28, 2 ];
	p = [ 0.40, 0.20, 0.20, 0.15, 0.05 ];
	result = chi2gof( x, p );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		digits = ( i % 8 ) + 1;
		output = result.toString({
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
