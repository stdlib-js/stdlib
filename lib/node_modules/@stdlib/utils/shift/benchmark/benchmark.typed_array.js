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
var Int8Array = require( '@stdlib/array/int8' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var Int16Array = require( '@stdlib/array/int16' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Int32Array = require( '@stdlib/array/int32' );
var Uint32Array = require( '@stdlib/array/uint32' );
var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;
var shift = require( './../lib' );


// MAIN //

bench( format( '%s::float64array', pkg ), function benchmark( b ) {
	var arr;
	var len;
	var v;
	var i;

	arr = new Float64Array( b.iterations );
	len = b.iterations;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = shift( arr );
		arr = v[ 0 ];
		len -= 1;
		if ( arr.length !== len ) {
			b.fail( 'should have removed an element' );
		}
	}
	b.toc();
	if ( arr.length !== 0 ) {
		b.fail( 'should have removed elements' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::float32array', pkg ), function benchmark( b ) {
	var arr;
	var len;
	var v;
	var i;

	arr = new Float32Array( b.iterations );
	len = b.iterations;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = shift( arr );
		arr = v[ 0 ];
		len -= 1;
		if ( arr.length !== len ) {
			b.fail( 'should have removed an element' );
		}
	}
	b.toc();
	if ( arr.length !== 0 ) {
		b.fail( 'should have removed elements' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::int32array', pkg ), function benchmark( b ) {
	var arr;
	var len;
	var v;
	var i;

	arr = new Int32Array( b.iterations );
	len = b.iterations;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = shift( arr );
		arr = v[ 0 ];
		len -= 1;
		if ( arr.length !== len ) {
			b.fail( 'should have removed an element' );
		}
	}
	b.toc();
	if ( arr.length !== 0 ) {
		b.fail( 'should have removed elements' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::uint32array', pkg ), function benchmark( b ) {
	var arr;
	var len;
	var v;
	var i;

	arr = new Uint32Array( b.iterations );
	len = b.iterations;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = shift( arr );
		arr = v[ 0 ];
		len -= 1;
		if ( arr.length !== len ) {
			b.fail( 'should have removed an element' );
		}
	}
	b.toc();
	if ( arr.length !== 0 ) {
		b.fail( 'should have removed elements' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::int16array', pkg ), function benchmark( b ) {
	var arr;
	var len;
	var v;
	var i;

	arr = new Int16Array( b.iterations );
	len = b.iterations;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = shift( arr );
		arr = v[ 0 ];
		len -= 1;
		if ( arr.length !== len ) {
			b.fail( 'should have removed an element' );
		}
	}
	b.toc();
	if ( arr.length !== 0 ) {
		b.fail( 'should have removed elements' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::uint16array', pkg ), function benchmark( b ) {
	var arr;
	var len;
	var v;
	var i;

	arr = new Uint16Array( b.iterations );
	len = b.iterations;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = shift( arr );
		arr = v[ 0 ];
		len -= 1;
		if ( arr.length !== len ) {
			b.fail( 'should have removed an element' );
		}
	}
	b.toc();
	if ( arr.length !== 0 ) {
		b.fail( 'should have removed elements' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::int8array', pkg ), function benchmark( b ) {
	var arr;
	var len;
	var v;
	var i;

	arr = new Int8Array( b.iterations );
	len = b.iterations;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = shift( arr );
		arr = v[ 0 ];
		len -= 1;
		if ( arr.length !== len ) {
			b.fail( 'should have removed an element' );
		}
	}
	b.toc();
	if ( arr.length !== 0 ) {
		b.fail( 'should have removed elements' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::uint8array', pkg ), function benchmark( b ) {
	var arr;
	var len;
	var v;
	var i;

	arr = new Uint8Array( b.iterations );
	len = b.iterations;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = shift( arr );
		arr = v[ 0 ];
		len -= 1;
		if ( arr.length !== len ) {
			b.fail( 'should have removed an element' );
		}
	}
	b.toc();
	if ( arr.length !== 0 ) {
		b.fail( 'should have removed elements' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::uint8clampedarray', pkg ), function benchmark( b ) {
	var arr;
	var len;
	var v;
	var i;

	arr = new Uint8ClampedArray( b.iterations );
	len = b.iterations;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = shift( arr );
		arr = v[ 0 ];
		len -= 1;
		if ( arr.length !== len ) {
			b.fail( 'should have removed an element' );
		}
	}
	b.toc();
	if ( arr.length !== 0 ) {
		b.fail( 'should have removed elements' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
