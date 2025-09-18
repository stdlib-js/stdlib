/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var pkg = require( './../package.json' ).name;
var DataType = require( './../lib' );


// MAIN //

bench( pkg+'::constructor,new', function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		'float64',
		'float32',
		'generic'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = new DataType( values[ i%values.length ] );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return a DataType instance' );
		}
	}
	b.toc();
	if ( !( v instanceof DataType ) ) {
		b.fail( 'should return a DataType instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::constructor,no_new', function benchmark( b ) {
	var values;
	var dt;
	var v;
	var i;

	values = [
		'float64',
		'float32',
		'generic'
	];
	dt = DataType;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = dt( values[ i%values.length ] );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return a DataType instance' );
		}
	}
	b.toc();
	if ( !( v instanceof DataType ) ) {
		b.fail( 'should return a DataType instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:alignment', function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		new DataType( 'float64' ),
		new DataType( 'float32' ),
		new DataType( 'generic' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = values[ i%values.length ].alignment;
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

bench( pkg+'::get:byteLength', function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		new DataType( 'float64' ),
		new DataType( 'float32' ),
		new DataType( 'generic' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = values[ i%values.length ].byteLength;
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

bench( pkg+'::get:byteOrder', function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		new DataType( 'float64' ),
		new DataType( 'float32' ),
		new DataType( 'generic' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = values[ i%values.length ].byteOrder;
		if ( typeof v !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( typeof v !== 'string' ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:char', function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		new DataType( 'float64' ),
		new DataType( 'float32' ),
		new DataType( 'generic' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = values[ i%values.length ].char;
		if ( typeof v !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( typeof v !== 'string' ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:description', function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		new DataType( 'float64' ),
		new DataType( 'float32' ),
		new DataType( 'generic' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = values[ i%values.length ].description;
		if ( typeof v !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( typeof v !== 'string' ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:enum', function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		new DataType( 'float64' ),
		new DataType( 'float32' ),
		new DataType( 'generic' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = values[ i%values.length ].enum;
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

bench( pkg+'::get:value', function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		new DataType( 'float64' ),
		new DataType( 'float32' ),
		new DataType( 'generic' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = values[ i%values.length ].value;
		if ( typeof v !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( typeof v !== 'string' ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':toJSON', function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		new DataType( 'float64' ),
		new DataType( 'float32' ),
		new DataType( 'generic' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = values[ i%values.length ].toJSON();
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof v !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':toString', function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		new DataType( 'float64' ),
		new DataType( 'float32' ),
		new DataType( 'generic' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = values[ i%values.length ].toString();
		if ( typeof v !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( typeof v !== 'string' ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
