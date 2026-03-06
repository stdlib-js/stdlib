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
var isTypedArrayLike = require( '@stdlib/assert/is-typed-array-like' );
var isArray = require( '@stdlib/assert/is-array' );
var constantFunction = require( '@stdlib/utils/constant-function' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;
var filledarrayBy = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var clbk;
	var arr;
	var i;

	clbk = constantFunction( 0.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = filledarrayBy( 0, clbk );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isTypedArrayLike( arr ) ) {
		b.fail( 'should return a typed array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:dtype=float64', pkg ), function benchmark( b ) {
	var clbk;
	var arr;
	var i;

	clbk = constantFunction( 0.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = filledarrayBy( 0, 'float64', clbk );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isTypedArrayLike( arr ) ) {
		b.fail( 'should return a typed array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:dtype=float32', pkg ), function benchmark( b ) {
	var clbk;
	var arr;
	var i;

	clbk = constantFunction( 0.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = filledarrayBy( 0, 'float32', clbk );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isTypedArrayLike( arr ) ) {
		b.fail( 'should return a typed array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:dtype=bool', pkg ), function benchmark( b ) {
	var clbk;
	var arr;
	var i;

	clbk = constantFunction( true );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = filledarrayBy( 0, 'bool', clbk );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isTypedArrayLike( arr ) ) {
		b.fail( 'should return a typed array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:dtype=complex128', pkg ), function benchmark( b ) {
	var clbk;
	var arr;
	var i;

	clbk = constantFunction( new Complex128( 3.0, 5.0 ) );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = filledarrayBy( 0, 'complex128', clbk );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isTypedArrayLike( arr ) ) {
		b.fail( 'should return a typed array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:dtype=complex64', pkg ), function benchmark( b ) {
	var clbk;
	var arr;
	var i;

	clbk = constantFunction( new Complex64( 3.0, 5.0 ) );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = filledarrayBy( 0, 'complex64', clbk );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isTypedArrayLike( arr ) ) {
		b.fail( 'should return a typed array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:dtype=int32', pkg ), function benchmark( b ) {
	var clbk;
	var arr;
	var i;

	clbk = constantFunction( 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = filledarrayBy( 0, 'int32', clbk );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isTypedArrayLike( arr ) ) {
		b.fail( 'should return a typed array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:dtype=uint32', pkg ), function benchmark( b ) {
	var clbk;
	var arr;
	var i;

	clbk = constantFunction( 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = filledarrayBy( 0, 'uint32', clbk );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isTypedArrayLike( arr ) ) {
		b.fail( 'should return a typed array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:dtype=int16', pkg ), function benchmark( b ) {
	var clbk;
	var arr;
	var i;

	clbk = constantFunction( 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = filledarrayBy( 0, 'int16', clbk );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isTypedArrayLike( arr ) ) {
		b.fail( 'should return a typed array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:dtype=uint16', pkg ), function benchmark( b ) {
	var clbk;
	var arr;
	var i;

	clbk = constantFunction( 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = filledarrayBy( 0, 'uint16', clbk );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isTypedArrayLike( arr ) ) {
		b.fail( 'should return a typed array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:dtype=int8', pkg ), function benchmark( b ) {
	var clbk;
	var arr;
	var i;

	clbk = constantFunction( 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = filledarrayBy( 0, 'int8', clbk );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isTypedArrayLike( arr ) ) {
		b.fail( 'should return a typed array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:dtype=uint8', pkg ), function benchmark( b ) {
	var clbk;
	var arr;
	var i;

	clbk = constantFunction( 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = filledarrayBy( 0, 'uint8', clbk );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isTypedArrayLike( arr ) ) {
		b.fail( 'should return a typed array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:dtype=uint8c', pkg ), function benchmark( b ) {
	var clbk;
	var arr;
	var i;

	clbk = constantFunction( 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = filledarrayBy( 0, 'uint8c', clbk );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isTypedArrayLike( arr ) ) {
		b.fail( 'should return a typed array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:dtype=generic', pkg ), function benchmark( b ) {
	var clbk;
	var arr;
	var i;

	clbk = constantFunction( 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = filledarrayBy( 0, 'generic', clbk );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isArray( arr ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
