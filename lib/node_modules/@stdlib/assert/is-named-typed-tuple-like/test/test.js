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

var tape = require( 'tape' );
var namedtypedtuple = require( '@stdlib/utils/named-typed-tuple' );
var Float64Array = require( '@stdlib/array/float64' );
var noop = require( '@stdlib/utils/noop' );
var isNamedTypedTuple = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isNamedTypedTuple, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a named typed tuple', function test( t ) {
	var Point;
	var p;

	Point = namedtypedtuple( [ 'x', 'y' ] );
	p = new Point();

	t.equal( isNamedTypedTuple( p ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `true` if provided a named typed tuple-like object', function test( t ) {
	var tuple;

	tuple = new Float64Array( [ 1.0, 2.0 ] );
	tuple.fieldOf = noop;
	tuple.findField = noop;
	tuple.ind2key = noop;
	tuple.key2ind = noop;
	tuple.lastFieldOf = noop;
	tuple.subtuple = noop;
	tuple.fields = [ 'x', 'y' ];
	tuple.orderedFields = [ 'x', 'y' ];

	t.equal( isNamedTypedTuple( tuple ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if not provided a named typed tuple-like object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isNamedTypedTuple( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});
