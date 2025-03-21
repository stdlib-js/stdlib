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
var Float64Array = require( '@stdlib/array/float64' );
var randu = require( '@stdlib/random/base/randu' );
var pkg = require( './../package.json' ).name;
var Proxy = require( './../lib' );


// MAIN //

bench( pkg+'::instantiation', function benchmark( b ) {
	var handlers;
	var p;
	var i;

	handlers = {
		'get': get
	};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		p = new Proxy( {}, handlers );
		if ( typeof p !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof p !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function get( obj, prop ) {
		return obj[ prop ];
	}
});

bench( pkg+'::array,proxy,get', function benchmark( b ) {
	var handlers;
	var arr;
	var N;
	var v;
	var i;

	handlers = {
		'get': get
	};

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( 0.0 );
	}
	arr = new Proxy( arr, handlers );
	N = arr.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ i%N ] = randu();
		v = arr[ 0 ];
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function get( obj, prop ) {
		return obj[ prop ];
	}
});

bench( pkg+'::typed_array,proxy,get', function benchmark( b ) {
	var handlers;
	var arr;
	var N;
	var v;
	var i;

	handlers = {
		'get': get
	};

	arr = new Float64Array( 10 );
	arr = new Proxy( arr, handlers );
	N = arr.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ i%N ] = randu();
		v = arr[ 0 ];
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function get( obj, prop ) {
		return obj[ prop ];
	}
});

bench( pkg+'::array,proxy,no_handlers,get', function benchmark( b ) {
	var handlers;
	var arr;
	var N;
	var v;
	var i;

	handlers = {};

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( 0.0 );
	}
	arr = new Proxy( arr, handlers );
	N = arr.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ i%N ] = randu();
		v = arr[ 0 ];
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::typed_array,proxy,no_handlers,get', function benchmark( b ) {
	var handlers;
	var arr;
	var N;
	var v;
	var i;

	handlers = {};

	arr = new Float64Array( 10 );
	N = arr.length;

	arr = new Proxy( arr, handlers );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ i%N ] = randu();
		v = arr[ 0 ];
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::array,no_proxy,get', function benchmark( b ) {
	var arr;
	var N;
	var v;
	var i;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( 0.0 );
	}
	N = arr.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ i%N ] = randu();
		v = arr[ 0 ];
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::typed_array,no_proxy,get', function benchmark( b ) {
	var arr;
	var N;
	var v;
	var i;

	arr = new Float64Array( 10 );
	N = arr.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ i%N ] = randu();
		v = arr[ 0 ];
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::array,no_proxy,getter', function benchmark( b ) {
	var arr;
	var N;
	var v;
	var i;

	arr = [];
	arr.get = get;

	for ( i = 0; i < 10; i++ ) {
		arr.push( 0.0 );
	}
	N = arr.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ i%N ] = randu();
		v = arr.get( 0 );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function get( i ) {
		return this[ i ]; // eslint-disable-line no-invalid-this
	}
});

bench( pkg+'::typed_array,no_proxy,getter', function benchmark( b ) {
	var arr;
	var N;
	var v;
	var i;

	arr = new Float64Array( 10 );
	arr.get = get;
	N = arr.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ i%N ] = randu();
		v = arr.get( 0 );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function get( i ) {
		return this[ i ]; // eslint-disable-line no-invalid-this
	}
});

bench( pkg+'::array,proxy,no_handlers,getter', function benchmark( b ) {
	var handlers;
	var arr;
	var N;
	var v;
	var i;

	handlers = {};

	arr = [];
	arr.get = get;

	for ( i = 0; i < 10; i++ ) {
		arr.push( 0.0 );
	}

	arr = new Proxy( arr, handlers );
	N = arr.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ i%N ] = randu();
		v = arr.get( 0 );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function get( i ) {
		return this[ i ]; // eslint-disable-line no-invalid-this
	}
});

bench( pkg+'::typed_array,proxy,no_handlers,getter', function benchmark( b ) {
	var handlers;
	var arr;
	var N;
	var v;
	var i;

	handlers = {};

	arr = new Float64Array( 10 );
	arr.get = get;
	N = arr.length;

	arr = new Proxy( arr, handlers );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ i%N ] = randu();
		v = arr.get( 0 );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function get( i ) {
		return this[ i ]; // eslint-disable-line no-invalid-this
	}
});

bench( pkg+'::array,proxy,getter', function benchmark( b ) {
	var handlers;
	var arr;
	var N;
	var v;
	var i;

	handlers = {
		'get': handler
	};

	arr = [];
	arr.get = get;

	for ( i = 0; i < 10; i++ ) {
		arr.push( 0.0 );
	}

	arr = new Proxy( arr, handlers );
	N = arr.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ i%N ] = randu();
		v = arr.get( 0 );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function handler( obj, prop ) {
		return obj[ prop ];
	}

	function get( i ) {
		return this[ i ]; // eslint-disable-line no-invalid-this
	}
});

bench( pkg+'::typed_array,proxy,getter', function benchmark( b ) {
	var handlers;
	var arr;
	var N;
	var v;
	var i;

	handlers = {
		'get': handler
	};

	arr = new Float64Array( 10 );
	arr.get = get;

	arr = new Proxy( arr, handlers );
	N = arr.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ i%N ] = randu();
		v = arr.get( 0 );
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function handler( obj, prop ) {
		return obj[ prop ];
	}

	function get( i ) {
		return this[ i ]; // eslint-disable-line no-invalid-this
	}
});

bench( pkg+'::array,proxy,set', function benchmark( b ) {
	var handlers;
	var arr;
	var N;
	var v;
	var i;

	handlers = {
		'set': set
	};

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( 0.0 );
	}
	arr = new Proxy( arr, handlers );
	N = arr.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ i%N ] = randu();
		v = arr[ 0 ];
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function set( obj, prop, value ) {
		obj[ prop ] = value;
		return true;
	}
});

bench( pkg+'::typed_array,proxy,set', function benchmark( b ) {
	var handlers;
	var arr;
	var N;
	var v;
	var i;

	handlers = {
		'set': set
	};

	arr = new Float64Array( 10 );
	N = arr.length;

	arr = new Proxy( arr, handlers );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ i%N ] = randu();
		v = arr[ 0 ];
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function set( obj, prop, value ) {
		obj[ prop ] = value;
		return true;
	}
});

bench( pkg+'::array,proxy,no_handlers,set', function benchmark( b ) {
	var handlers;
	var arr;
	var N;
	var v;
	var i;

	handlers = {};

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( 0.0 );
	}
	N = arr.length;

	arr = new Proxy( arr, handlers );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ i%N ] = randu();
		v = arr[ 0 ];
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::typed_array,proxy,no_handlers,set', function benchmark( b ) {
	var handlers;
	var arr;
	var N;
	var v;
	var i;

	handlers = {};

	arr = new Float64Array( 10 );
	N = arr.length;

	arr = new Proxy( arr, handlers );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ i%N ] = randu();
		v = arr[ 0 ];
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::array,no_proxy,set', function benchmark( b ) {
	var arr;
	var N;
	var v;
	var i;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( 0.0 );
	}
	N = arr.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ i%N ] = randu();
		v = arr[ 0 ];
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::typed_array,no_proxy,set', function benchmark( b ) {
	var arr;
	var N;
	var v;
	var i;

	arr = new Float64Array( 10 );
	N = arr.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr[ i%N ] = randu();
		v = arr[ 0 ];
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::array,no_proxy,setter', function benchmark( b ) {
	var arr;
	var N;
	var v;
	var i;

	arr = [];
	arr.set = set;

	for ( i = 0; i < 10; i++ ) {
		arr.push( 0.0 );
	}
	N = arr.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr.set( i%N, randu() );
		v = arr[ 0 ];
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function set( i, v ) {
		this[ i ] = v; // eslint-disable-line no-invalid-this
	}
});

bench( pkg+'::typed_array,no_proxy,setter', function benchmark( b ) {
	var arr;
	var N;
	var v;
	var i;

	arr = new Float64Array( 10 );
	arr.set = set;
	N = arr.length;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr.set( i%N, randu() );
		v = arr[ 0 ];
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function set( i, v ) {
		this[ i ] = v; // eslint-disable-line no-invalid-this
	}
});

bench( pkg+'::array,proxy,no_handlers,setter', function benchmark( b ) {
	var handlers;
	var arr;
	var N;
	var v;
	var i;

	handlers = {};

	arr = [];
	arr.set = set;

	for ( i = 0; i < 10; i++ ) {
		arr.push( 0.0 );
	}
	N = arr.length;

	arr = new Proxy( arr, handlers );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr.set( i%N, randu() );
		v = arr[ 0 ];
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function set( i, v ) {
		this[ i ] = v; // eslint-disable-line no-invalid-this
	}
});

bench( pkg+'::typed_array,proxy,no_handlers,setter', function benchmark( b ) {
	var handlers;
	var arr;
	var N;
	var v;
	var i;

	handlers = {};

	arr = new Float64Array( 10 );
	arr.set = set;
	N = arr.length;

	arr = new Proxy( arr, handlers );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr.set( i%N, randu() );
		v = arr[ 0 ];
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function set( i, v ) {
		this[ i ] = v; // eslint-disable-line no-invalid-this
	}
});

bench( pkg+'::array,proxy,setter', function benchmark( b ) {
	var handlers;
	var arr;
	var N;
	var v;
	var i;

	handlers = {
		'set': handler
	};

	arr = [];
	arr.set = set;

	for ( i = 0; i < 10; i++ ) {
		arr.push( 0.0 );
	}
	N = arr.length;

	arr = new Proxy( arr, handlers );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr.set( i%N, randu() );
		v = arr[ 0 ];
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function handler( obj, prop, value ) {
		obj[ prop ] = value;
		return true;
	}

	function set( i, v ) {
		this[ i ] = v; // eslint-disable-line no-invalid-this
	}
});

bench( pkg+'::typed_array,proxy,setter', function benchmark( b ) {
	var handlers;
	var arr;
	var N;
	var v;
	var i;

	handlers = {
		'set': handler
	};

	arr = new Float64Array( 10 );
	arr.set = set;
	N = arr.length;

	arr = new Proxy( arr, handlers );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr.set( i%N, randu() );
		v = arr[ 0 ];
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( v !== v ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function handler( obj, prop, value ) {
		obj[ prop ] = value;
		return true;
	}

	function set( i, v ) {
		this[ i ] = v; // eslint-disable-line no-invalid-this
	}
});
