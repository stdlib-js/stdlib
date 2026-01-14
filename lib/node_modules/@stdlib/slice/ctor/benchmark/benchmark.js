/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var isNull = require( '@stdlib/assert/is-null' );
var pkg = require( './../package.json' ).name;
var Slice = require( './../lib' );


// MAIN //

bench( pkg+'::instantiation:nargs=1', function benchmark( b ) {
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = Slice( i ); // eslint-disable-line new-cap
		if ( !( out instanceof Slice ) ) {
			b.fail( 'should return an instance' );
		}
	}
	b.toc();
	if ( typeof out !== 'object' || !( out instanceof Slice ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,new:nargs=1', function benchmark( b ) {
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = new Slice( i );
		if ( !( out instanceof Slice ) ) {
			b.fail( 'should return an instance' );
		}
	}
	b.toc();
	if ( typeof out !== 'object' || !( out instanceof Slice ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation:nargs=2', function benchmark( b ) {
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = Slice( 0, i ); // eslint-disable-line new-cap
		if ( !( out instanceof Slice ) ) {
			b.fail( 'should return an instance' );
		}
	}
	b.toc();
	if ( typeof out !== 'object' || !( out instanceof Slice ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,new:nargs=2', function benchmark( b ) {
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = new Slice( 0, i );
		if ( !( out instanceof Slice ) ) {
			b.fail( 'should return an instance' );
		}
	}
	b.toc();
	if ( typeof out !== 'object' || !( out instanceof Slice ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation:nargs=3', function benchmark( b ) {
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = Slice( 0, i, 1 ); // eslint-disable-line new-cap
		if ( !( out instanceof Slice ) ) {
			b.fail( 'should return an instance' );
		}
	}
	b.toc();
	if ( typeof out !== 'object' || !( out instanceof Slice ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,new:nargs=3', function benchmark( b ) {
	var out;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = new Slice( 0, i, 1 );
		if ( !( out instanceof Slice ) ) {
			b.fail( 'should return an instance' );
		}
	}
	b.toc();
	if ( typeof out !== 'object' || !( out instanceof Slice ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:start', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		new Slice( 10 ),
		new Slice( 15 ),
		new Slice( 0, 10 ),
		new Slice( null, 10 ),
		new Slice( null, 10, null ),
		new Slice( 0, 10, 1 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = values[ i%values.length ].start;
		if ( typeof out !== 'number' && out !== null ) {
			b.fail( 'should return an integer or null' );
		}
	}
	b.toc();
	if ( !isInteger( out ) && !isNull( out ) ) {
		b.fail( 'should return an integer or null' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:stop', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		new Slice( 10 ),
		new Slice( 15 ),
		new Slice( 0, 10 ),
		new Slice( null, 10 ),
		new Slice( null, 10, null ),
		new Slice( 0, 10, 1 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = values[ i%values.length ].stop;
		if ( typeof out !== 'number' && out !== null ) {
			b.fail( 'should return an integer or null' );
		}
	}
	b.toc();
	if ( !isInteger( out ) && !isNull( out ) ) {
		b.fail( 'should return an integer or null' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:step', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		new Slice( 10 ),
		new Slice( 15 ),
		new Slice( 0, 10 ),
		new Slice( null, 10 ),
		new Slice( null, 10, null ),
		new Slice( 0, 10, 1 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = values[ i%values.length ].step;
		if ( typeof out !== 'number' && out !== null ) {
			b.fail( 'should return an integer or null' );
		}
	}
	b.toc();
	if ( !isInteger( out ) && !isNull( out ) ) {
		b.fail( 'should return an integer or null' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':toString', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		new Slice( 10 ),
		new Slice( 15 ),
		new Slice( 0, 10 ),
		new Slice( null, 10 ),
		new Slice( null, 10, null ),
		new Slice( 0, 10, 1 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = values[ i%values.length ].toString();
		if ( typeof out !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( out ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':toJSON', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		new Slice( 10 ),
		new Slice( 15 ),
		new Slice( 0, 10 ),
		new Slice( null, 10 ),
		new Slice( null, 10, null ),
		new Slice( 0, 10, 1 )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = values[ i%values.length ].toJSON();
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isPlainObject( out ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
