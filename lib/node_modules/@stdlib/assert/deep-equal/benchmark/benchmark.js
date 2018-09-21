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
var Buffer = require( '@stdlib/buffer/ctor' );
var Number = require( '@stdlib/number/ctor' );
var isBoolean = require( '@stdlib/assert/is-boolean' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var pkg = require( './../package.json' ).name;
var deepEqual = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var out;
	var xi;
	var yi;
	var x;
	var y;
	var i;

	values = [
		'beep',
		'boop',
		'baz',
		1,
		'1',
		2.3,
		'2.3',
		0,
		-2.0,
		true,
		false,
		'true',
		'false',
		null,
		NaN,
		void 0,
		new Error( 'beep' ),
		new Error( 'boop' ),
		new TypeError( 'baz' ),
		new RangeError( 'baz' ),
		new SyntaxError(),
		new Date( '2018-09-20T01:23:28.936Z' ),
		new Date( 1537406608936 ),
		new Buffer( 'xyz' ), // eslint-disable-line no-buffer-constructor
		new Number( 0 ), // eslint-disable-line no-new-wrappers,
		[ 1, 2, 3 ],
		[ 1, 2 ],
		{
			'0': 0,
			'1': 1,
			'length': 2
		},
		[ null, null, null ],
		[ NaN, NaN, NaN ],
		[ void 0, void 0, void 0 ]
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		xi = discreteUniform( 0, values.length );
		yi = discreteUniform( 0, values.length );
		x = values[ xi ];
		y = values[ yi ];
		out = deepEqual( x, y );
		if ( !isBoolean( out ) ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( out ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
