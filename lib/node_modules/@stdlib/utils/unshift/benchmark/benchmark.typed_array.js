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
var MAX_INT32 = require( '@stdlib/constants/int32/max' );
var MAX_UINT32 = require( '@stdlib/constants/uint32/max' );
var MAX_INT16 = require( '@stdlib/constants/int16/max' );
var MAX_UINT16 = require( '@stdlib/constants/uint16/max' );
var MAX_INT8 = require( '@stdlib/constants/int8/max' );
var MAX_UINT8 = require( '@stdlib/constants/uint8/max' );
var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );
var Int8Array = require( '@stdlib/array/int8' );
var Int16Array = require( '@stdlib/array/int16' );
var Int32Array = require( '@stdlib/array/int32' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Uint32Array = require( '@stdlib/array/uint32' );
var pkg = require( './../package.json' ).name;
var unshift = require( './../lib' );


// MAIN //

bench( pkg+'::float64array', function benchmark( b ) {
	var arr;
	var i;

	arr = new Float64Array();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = unshift( arr, i );
		if ( arr.length !== i+1 ) {
			b.fail( 'should have added an element' );
		}
	}
	b.toc();
	if ( arr.length !== b.iterations ) {
		b.fail( 'should have added elements' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::float32array', function benchmark( b ) {
	var arr;
	var i;

	arr = new Float32Array();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = unshift( arr, i );
		if ( arr.length !== i+1 ) {
			b.fail( 'should have added an element' );
		}
	}
	b.toc();
	if ( arr.length !== b.iterations ) {
		b.fail( 'should have added elements' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::int32array', function benchmark( b ) {
	var arr;
	var max;
	var i;

	max = MAX_INT32 + 1;
	arr = new Int32Array();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = unshift( arr, i%max );
		if ( arr.length !== i+1 ) {
			b.fail( 'should have added an element' );
		}
	}
	b.toc();
	if ( arr.length !== b.iterations ) {
		b.fail( 'should have added elements' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::uint32array', function benchmark( b ) {
	var arr;
	var max;
	var i;

	max = MAX_UINT32 + 1;
	arr = new Uint32Array();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = unshift( arr, i%max );
		if ( arr.length !== i+1 ) {
			b.fail( 'should have added an element' );
		}
	}
	b.toc();
	if ( arr.length !== b.iterations ) {
		b.fail( 'should have added elements' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::int16array', function benchmark( b ) {
	var arr;
	var max;
	var i;

	max = MAX_INT16 + 1;
	arr = new Int16Array();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = unshift( arr, i%max );
		if ( arr.length !== i+1 ) {
			b.fail( 'should have added an element' );
		}
	}
	b.toc();
	if ( arr.length !== b.iterations ) {
		b.fail( 'should have added elements' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::uint16array', function benchmark( b ) {
	var arr;
	var max;
	var i;

	max = MAX_UINT16 + 1;
	arr = new Uint16Array();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = unshift( arr, i%max );
		if ( arr.length !== i+1 ) {
			b.fail( 'should have added an element' );
		}
	}
	b.toc();
	if ( arr.length !== b.iterations ) {
		b.fail( 'should have added elements' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::int8array', function benchmark( b ) {
	var arr;
	var max;
	var i;

	max = MAX_INT8 + 1;
	arr = new Int8Array();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = unshift( arr, i%max );
		if ( arr.length !== i+1 ) {
			b.fail( 'should have added an element' );
		}
	}
	b.toc();
	if ( arr.length !== b.iterations ) {
		b.fail( 'should have added elements' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::uint8array', function benchmark( b ) {
	var arr;
	var max;
	var i;

	max = MAX_UINT8 + 1;
	arr = new Uint8Array();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = unshift( arr, i%max );
		if ( arr.length !== i+1 ) {
			b.fail( 'should have added an element' );
		}
	}
	b.toc();
	if ( arr.length !== b.iterations ) {
		b.fail( 'should have added elements' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::uint8clampedarray', function benchmark( b ) {
	var arr;
	var max;
	var i;

	max = MAX_UINT8 + 1;
	arr = new Uint8ClampedArray();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = unshift( arr, i%max );
		if ( arr.length !== i+1 ) {
			b.fail( 'should have added an element' );
		}
	}
	b.toc();
	if ( arr.length !== b.iterations ) {
		b.fail( 'should have added elements' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
