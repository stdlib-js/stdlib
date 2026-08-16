/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var isCollection = require( '@stdlib/assert/is-collection' );
var complex = require( '@stdlib/complex/cmplx' );
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;
var scalar2array = require( './../lib' );


// MAIN //

bench( format( '%s::default,number', pkg ), function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		1,
		2,
		3
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = scalar2array( values[ i%values.length ] );
		if ( v.length !== 1 ) {
			b.fail( 'should return a single-element array' );
		}
	}
	b.toc();
	if ( !isCollection ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::default,non-numeric', pkg ), function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		true,
		false,
		null,
		{}
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = scalar2array( values[ i%values.length ] );
		if ( v.length !== 1 ) {
			b.fail( 'should return a single-element array' );
		}
	}
	b.toc();
	if ( !isCollection ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::default,complex128', pkg ), function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		complex( 3.0, 4.0, 'float64' ),
		complex( 1.0, 2.0, 'float64' ),
		complex( 0.0, 0.0, 'float64' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = scalar2array( values[ i%values.length ] );
		if ( v.length !== 1 ) {
			b.fail( 'should return a single-element array' );
		}
	}
	b.toc();
	if ( !isCollection ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::default,complex64', pkg ), function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		complex( 3.0, 4.0, 'float32' ),
		complex( 1.0, 2.0, 'float32' ),
		complex( 0.0, 0.0, 'float32' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = scalar2array( values[ i%values.length ] );
		if ( v.length !== 1 ) {
			b.fail( 'should return a single-element array' );
		}
	}
	b.toc();
	if ( !isCollection ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::default,complex-like', pkg ), function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		{
			're': 3.0,
			'im': 4.0
		},
		{
			're': 1.0,
			'im': 2.0
		},
		{
			're': 0.0,
			'im': 0.0
		}
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = scalar2array( values[ i%values.length ] );
		if ( v.length !== 1 ) {
			b.fail( 'should return a single-element array' );
		}
	}
	b.toc();
	if ( !isCollection ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::default,bool', pkg ), function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		true,
		false
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = scalar2array( values[ i%values.length ] );
		if ( v.length !== 1 ) {
			b.fail( 'should return a single-element array' );
		}
	}
	console.log( v );
	b.toc();
	if ( !isCollection ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:dtype=float64', pkg ), function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		1,
		2,
		3
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = scalar2array( values[ i%values.length ], 'float64' );
		if ( v.length !== 1 ) {
			b.fail( 'should return a single-element array' );
		}
	}
	b.toc();
	if ( !isCollection ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:dtype=float32', pkg ), function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		1,
		2,
		3
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = scalar2array( values[ i%values.length ], 'float32' );
		if ( v.length !== 1 ) {
			b.fail( 'should return a single-element array' );
		}
	}
	b.toc();
	if ( !isCollection ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:dtype=int32', pkg ), function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		1,
		2,
		3
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = scalar2array( values[ i%values.length ], 'int32' );
		if ( v.length !== 1 ) {
			b.fail( 'should return a single-element array' );
		}
	}
	b.toc();
	if ( !isCollection ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:dtype=int16', pkg ), function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		1,
		2,
		3
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = scalar2array( values[ i%values.length ], 'int16' );
		if ( v.length !== 1 ) {
			b.fail( 'should return a single-element array' );
		}
	}
	b.toc();
	if ( !isCollection ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:dtype=int8', pkg ), function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		1,
		2,
		3
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = scalar2array( values[ i%values.length ], 'int8' );
		if ( v.length !== 1 ) {
			b.fail( 'should return a single-element array' );
		}
	}
	b.toc();
	if ( !isCollection ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:dtype=uint32', pkg ), function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		1,
		2,
		3
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = scalar2array( values[ i%values.length ], 'uint32' );
		if ( v.length !== 1 ) {
			b.fail( 'should return a single-element array' );
		}
	}
	b.toc();
	if ( !isCollection ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:dtype=uint16', pkg ), function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		1,
		2,
		3
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = scalar2array( values[ i%values.length ], 'uint16' );
		if ( v.length !== 1 ) {
			b.fail( 'should return a single-element array' );
		}
	}
	b.toc();
	if ( !isCollection ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:dtype=uint8', pkg ), function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		1,
		2,
		3
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = scalar2array( values[ i%values.length ], 'uint8' );
		if ( v.length !== 1 ) {
			b.fail( 'should return a single-element array' );
		}
	}
	b.toc();
	if ( !isCollection ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:dtype=uint8c', pkg ), function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		1,
		2,
		3
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = scalar2array( values[ i%values.length ], 'uint8c' );
		if ( v.length !== 1 ) {
			b.fail( 'should return a single-element array' );
		}
	}
	b.toc();
	if ( !isCollection ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:dtype=bool', pkg ), function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		true,
		false
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = scalar2array( values[ i%values.length ], 'bool' );
		if ( v.length !== 1 ) {
			b.fail( 'should return a single-element array' );
		}
	}
	b.toc();
	if ( !isCollection ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::real:dtype=complex128', pkg ), function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		1,
		2,
		3
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = scalar2array( values[ i%values.length ], 'complex128' );
		if ( v.length !== 1 ) {
			b.fail( 'should return a single-element array' );
		}
	}
	b.toc();
	if ( !isCollection ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::real:dtype=complex64', pkg ), function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		1,
		2,
		3
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = scalar2array( values[ i%values.length ], 'complex64' );
		if ( v.length !== 1 ) {
			b.fail( 'should return a single-element array' );
		}
	}
	b.toc();
	if ( !isCollection ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::complex:dtype=complex128', pkg ), function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		complex( 3.0, 4.0, 'float64' ),
		complex( 1.0, 2.0, 'float32' ),
		{
			're': 0.0,
			'im': 0.0
		}
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = scalar2array( values[ i%values.length ], 'complex128' );
		if ( v.length !== 1 ) {
			b.fail( 'should return a single-element array' );
		}
	}
	b.toc();
	if ( !isCollection ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::complex:dtype=complex64', pkg ), function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		complex( 3.0, 4.0, 'float64' ),
		complex( 1.0, 2.0, 'float32' ),
		{
			're': 0.0,
			'im': 0.0
		}
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = scalar2array( values[ i%values.length ], 'complex64' );
		if ( v.length !== 1 ) {
			b.fail( 'should return a single-element array' );
		}
	}
	b.toc();
	if ( !isCollection ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:dtype=generic', pkg ), function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		1,
		2,
		3,
		true,
		false,
		[],
		{}
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = scalar2array( values[ i%values.length ], 'generic' );
		if ( v.length !== 1 ) {
			b.fail( 'should return a single-element array' );
		}
	}
	b.toc();
	if ( !isCollection ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
