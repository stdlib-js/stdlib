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
var UnicodeSparkline = require( './../lib' );


// MAIN //

bench( pkg+'::instantiation', function benchmark( b ) {
	var v;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = new UnicodeSparkline();
		if ( !( v instanceof UnicodeSparkline ) ) {
			b.fail( 'should return an instance' );
		}
	}
	b.toc();
	if ( !( v instanceof UnicodeSparkline ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,no_new', function benchmark( b ) {
	var ctor;
	var v;
	var i;

	ctor = UnicodeSparkline;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = ctor();
		if ( !( v instanceof UnicodeSparkline ) ) {
			b.fail( 'should return an instance' );
		}
	}
	b.toc();
	if ( !( v instanceof UnicodeSparkline ) ) {
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
		'infinities': true,
		'isDefined': noop,
		'type': 'line',
		'yMax': 0,
		'yMin': 4
	};
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = new UnicodeSparkline( opts );
		if ( !( v instanceof UnicodeSparkline ) ) {
			b.fail( 'should return an instance' );
		}
	}
	b.toc();
	if ( !( v instanceof UnicodeSparkline ) ) {
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
		v = new UnicodeSparkline( [ 1, 2, 3 ] );
		if ( !( v instanceof UnicodeSparkline ) ) {
			b.fail( 'should return an instance' );
		}
	}
	b.toc();
	if ( !( v instanceof UnicodeSparkline ) ) {
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
		'infinities': true,
		'isDefined': noop,
		'type': 'line',
		'yMax': 0,
		'yMin': 4
	};
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = new UnicodeSparkline( [ 1, 2, 3 ], opts );
		if ( !( v instanceof UnicodeSparkline ) ) {
			b.fail( 'should return an instance' );
		}
	}
	b.toc();
	if ( !( v instanceof UnicodeSparkline ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::set,get:autoRender', function benchmark( b ) {
	var bool;
	var v;
	var i;

	v = new UnicodeSparkline();

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
	v = new UnicodeSparkline();

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

	v = new UnicodeSparkline();

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
	v = new UnicodeSparkline();

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

bench( pkg+'::set,get:infinities', function benchmark( b ) {
	var bool;
	var v;
	var i;

	v = new UnicodeSparkline();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v.infinities = !bool;
		if ( typeof v.infinities !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( typeof v.infinities !== 'boolean' ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::set,get:isDefined', function benchmark( b ) {
	var v;
	var i;

	v = new UnicodeSparkline();

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
	v = new UnicodeSparkline();

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

bench( pkg+'::set,get:type', function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		'column',
		'line',
		'tristate',
		'up-down',
		'win-loss'
	];
	v = new UnicodeSparkline();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v.type = values[ i % values.length ];
		if ( typeof v.type !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( typeof v.type !== 'string' ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::set,get:yMax', function benchmark( b ) {
	var v;
	var i;

	v = new UnicodeSparkline();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v.yMax = i;
		if ( v.yMax !== i ) {
			b.fail( 'unexpected value' );
		}
	}
	b.toc();
	if ( v.yMax !== i-1 ) {
		b.fail( 'unexpected value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::set,get:yMin', function benchmark( b ) {
	var v;
	var i;

	v = new UnicodeSparkline();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v.yMin = i;
		if ( v.yMin !== i ) {
			b.fail( 'unexpected value' );
		}
	}
	b.toc();
	if ( v.yMin !== i-1 ) {
		b.fail( 'unexpected value' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
