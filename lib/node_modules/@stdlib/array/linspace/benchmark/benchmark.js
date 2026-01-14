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
var isArrayLikeObject = require( '@stdlib/assert/is-array-like-object' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var pkg = require( './../package.json' ).name;
var linspace = require( './../lib' );


// MAIN //

bench( pkg+'::default,real', function benchmark( b ) {
	var v;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = linspace( 0.0, 100.0, 10 );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an array-like object' );
		}
	}
	b.toc();
	if ( !isArrayLikeObject( v ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::default,complex', function benchmark( b ) {
	var x1;
	var x2;
	var v;
	var i;

	x1 = new Complex128( 0.0, 0.0 );
	x2 = new Complex128( 100.0, 10.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = linspace( x1, x2, 10 );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an array-like object' );
		}
	}
	b.toc();
	if ( !isArrayLikeObject( v ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::real:dtype=float64', function benchmark( b ) {
	var opts;
	var v;
	var i;

	opts = {
		'dtype': 'float64'
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = linspace( 0.0, 100.0, 10, opts );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an array-like object' );
		}
	}
	b.toc();
	if ( !isArrayLikeObject( v ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::real:dtype=float32', function benchmark( b ) {
	var opts;
	var v;
	var i;

	opts = {
		'dtype': 'float32'
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = linspace( 0.0, 100.0, 10, opts );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an array-like object' );
		}
	}
	b.toc();
	if ( !isArrayLikeObject( v ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::real:dtype=generic', function benchmark( b ) {
	var opts;
	var v;
	var i;

	opts = {
		'dtype': 'generic'
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = linspace( 0.0, 100.0, 10, opts );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an array-like object' );
		}
	}
	b.toc();
	if ( !isArrayLikeObject( v ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::complex:dtype=generic', function benchmark( b ) {
	var opts;
	var x1;
	var x2;
	var v;
	var i;

	opts = {
		'dtype': 'generic'
	};

	x1 = new Complex128( 0.0, 0.0 );
	x2 = new Complex128( 100.0, 10.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = linspace( x1, x2, 10, opts );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an array-like object' );
		}
	}
	b.toc();
	if ( !isArrayLikeObject( v ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::real:dtype=complex128', function benchmark( b ) {
	var opts;
	var v;
	var i;

	opts = {
		'dtype': 'complex128'
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = linspace( 0.0, 100.0, 10, opts );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an array-like object' );
		}
	}
	b.toc();
	if ( !isArrayLikeObject( v ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::complex:dtype=complex128', function benchmark( b ) {
	var opts;
	var x1;
	var x2;
	var v;
	var i;

	opts = {
		'dtype': 'complex128'
	};

	x1 = new Complex128( 0.0, 0.0 );
	x2 = new Complex128( 100.0, 10.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = linspace( x1, x2, 10, opts );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an array-like object' );
		}
	}
	b.toc();
	if ( !isArrayLikeObject( v ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::real:dtype=complex64', function benchmark( b ) {
	var opts;
	var v;
	var i;

	opts = {
		'dtype': 'complex64'
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = linspace( 0.0, 100.0, 10, opts );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an array-like object' );
		}
	}
	b.toc();
	if ( !isArrayLikeObject( v ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::complex:dtype=complex64', function benchmark( b ) {
	var opts;
	var x1;
	var x2;
	var v;
	var i;

	opts = {
		'dtype': 'complex64'
	};

	x1 = new Complex64( 0.0, 0.0 );
	x2 = new Complex64( 100.0, 10.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = linspace( x1, x2, 10, opts );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an array-like object' );
		}
	}
	b.toc();
	if ( !isArrayLikeObject( v ) ) {
		b.fail( 'should return an array-like object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
