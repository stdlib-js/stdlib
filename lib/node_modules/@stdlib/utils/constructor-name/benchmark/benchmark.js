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
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );
var Int8Array = require( '@stdlib/array/int8' );
var Int16Array = require( '@stdlib/array/int16' );
var Int32Array = require( '@stdlib/array/int32' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Uint32Array = require( '@stdlib/array/uint32' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var string2buffer = require( '@stdlib/buffer/from-string' );
var Number = require( '@stdlib/number/ctor' );
var Boolean = require( '@stdlib/boolean/ctor' );
var pkg = require( './../package.json' ).name;
var constructorName = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var str;
	var i;

	values = [
		'a',
		new String( 'a' ), // eslint-disable-line no-new-wrappers
		5,
		new Number( 5 ), // eslint-disable-line no-new-wrappers
		NaN,
		true,
		new Boolean( true ), // eslint-disable-line no-new-wrappers
		false,
		new Boolean( false ), // eslint-disable-line no-new-wrappers
		void 0,
		null,
		[],
		{},
		function noop() {}, // eslint-disable-line no-empty-function
		/./,
		new Date(),
		Math,
		JSON,
		new Error(),
		new TypeError(),
		new SyntaxError(),
		new URIError(),
		new EvalError(),
		new ReferenceError(),
		new RangeError(),
		new Int8Array(),
		new Uint8Array(),
		new Uint8ClampedArray(),
		new Int16Array(),
		new Uint16Array(),
		new Int32Array(),
		new Uint32Array(),
		new Float32Array(),
		new Float64Array(),
		new ArrayBuffer(),
		string2buffer( 'beep' )
	];
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		str = constructorName( values[ i%values.length ] );
		if ( typeof str !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( str ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::array', function benchmark( b ) {
	var str;
	var v;
	var i;

	v = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		str = constructorName( v );
		if ( typeof str !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( str ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::typed_array', function benchmark( b ) {
	var str;
	var v;
	var i;

	v = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		str = constructorName( v );
		if ( typeof str !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( str ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::buffer', function benchmark( b ) {
	var str;
	var v;
	var i;

	v = string2buffer( 'beep' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		str = constructorName( v );
		if ( typeof str !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( str ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::error', function benchmark( b ) {
	var str;
	var v;
	var i;

	v = new Error( 'beep' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		str = constructorName( v );
		if ( typeof str !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( str ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::date', function benchmark( b ) {
	var str;
	var v;
	var i;

	v = new Date();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		str = constructorName( v );
		if ( typeof str !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( str ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::string', function benchmark( b ) {
	var str;
	var v;
	var i;

	v = 'beep';

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		str = constructorName( v );
		if ( typeof str !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( str ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::number', function benchmark( b ) {
	var str;
	var v;
	var i;

	v = 3.14;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		str = constructorName( v );
		if ( typeof str !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( str ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::boolean', function benchmark( b ) {
	var str;
	var v;
	var i;

	v = true;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		str = constructorName( v );
		if ( typeof str !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( str ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::null', function benchmark( b ) {
	var str;
	var v;
	var i;

	v = null;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		str = constructorName( v );
		if ( typeof str !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( str ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::object', function benchmark( b ) {
	var str;
	var v;
	var i;

	v = {};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		str = constructorName( v );
		if ( typeof str !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( str ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::regexp', function benchmark( b ) {
	var str;
	var v;
	var i;

	v = /.*/;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		str = constructorName( v );
		if ( typeof str !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( str ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::function', function benchmark( b ) {
	var str;
	var v;
	var i;

	v = isString;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		str = constructorName( v );
		if ( typeof str !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( str ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
