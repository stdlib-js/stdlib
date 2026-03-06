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
var noop = require( '@stdlib/utils/noop' );
var randu = require( '@stdlib/random/base/randu' );
var isArray = require( '@stdlib/assert/is-array' );
var pkg = require( './../package.json' ).name;
var TristateChart = require( './../lib' );


// MAIN //

bench( pkg+'::instantiation', function benchmark( b ) {
	var v;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = new TristateChart();
		if ( !( v instanceof TristateChart ) ) {
			b.fail( 'should return an instance' );
		}
	}
	b.toc();
	if ( !( v instanceof TristateChart ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,no_new', function benchmark( b ) {
	var ctor;
	var v;
	var i;

	ctor = TristateChart;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = ctor();
		if ( !( v instanceof TristateChart ) ) {
			b.fail( 'should return an instance' );
		}
	}
	b.toc();
	if ( !( v instanceof TristateChart ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,options', function benchmark( b ) {
	var opts;
	var v;
	var i;

	opts = {
		'autoRender': false,
		'bufferSize': 10,
		'data': [ 1, 2, 3 ],
		'description': 'foo',
		'label': 'beep',
		'isDefined': noop
	};
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = new TristateChart( opts );
		if ( !( v instanceof TristateChart ) ) {
			b.fail( 'should return an instance' );
		}
	}
	b.toc();
	if ( !( v instanceof TristateChart ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,data', function benchmark( b ) {
	var v;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = new TristateChart( [ 1, 2, 3 ] );
		if ( !( v instanceof TristateChart ) ) {
			b.fail( 'should return an instance' );
		}
	}
	b.toc();
	if ( !( v instanceof TristateChart ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,data,options', function benchmark( b ) {
	var opts;
	var v;
	var i;

	opts = {
		'autoRender': false,
		'bufferSize': 10,
		'description': 'foo',
		'label': 'beep',
		'isDefined': noop
	};
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = new TristateChart( [ 1, 2, 3 ], opts );
		if ( !( v instanceof TristateChart ) ) {
			b.fail( 'should return an instance' );
		}
	}
	b.toc();
	if ( !( v instanceof TristateChart ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::set,get:autoRender', function benchmark( b ) {
	var bool;
	var v;
	var i;

	v = new TristateChart();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v.autoRender = !bool;
		if ( typeof v.autoRender !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( typeof v.autoRender !== 'boolean' ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::set,get:bufferSize', function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		10,
		20,
		30
	];
	v = new TristateChart();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v.bufferSize = values[ i % values.length ];
		if ( typeof v.bufferSize !== 'number' ) {
			b.fail( 'should return a number' );
		}
	}
	b.toc();
	if ( typeof v.bufferSize !== 'number' ) {
		b.fail( 'should return a number' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::set,get:data', function benchmark( b ) {
	var v;
	var i;

	v = new TristateChart();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v.data = [ randu(), randu(), randu() ];
		if ( typeof v.data !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isArray( v.data ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::set,get:description', function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		'beep',
		'boop'
	];
	v = new TristateChart();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v.description = values[ i % values.length ];
		if ( typeof v.description !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( typeof v.description !== 'string' ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::set,get:isDefined', function benchmark( b ) {
	var v;
	var i;

	v = new TristateChart();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v.isDefined = createFcn();
		if ( typeof v.isDefined !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( typeof v.isDefined !== 'function' ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function createFcn() {
		return beep;
		function beep() {
			// No-op...
		}
	}
});

bench( pkg+'::set,get:label', function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		'beep',
		'boop'
	];
	v = new TristateChart();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v.label = values[ i % values.length ];
		if ( typeof v.label !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( typeof v.label !== 'string' ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
