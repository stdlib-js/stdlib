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

var vm = require( 'vm' ); // TODO: handle in-browser tests
var tape = require( 'tape' );
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var inherit = require( '@stdlib/utils/inherit' );
var isRangeError = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': IS_BROWSER
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isRangeError, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a `RangeError` object', function test( t ) {
	var values;
	var i;

	values = [
		new RangeError( 'range error' )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isRangeError( values[ i ] ), true, 'returns true when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `true` if provided an object inheriting from `RangeError`', function test( t ) {
	function CustomError( msg ) {
		RangeError.call( this );
		this.name = 'CustomError';
		this.message = msg;
		return this;
	}

	inherit( CustomError, RangeError );

	t.strictEqual( isRangeError( new CustomError( 'custom error' ) ), true, 'returns true when provided a value which inherits from RangeError' );
	t.end();
});

tape( 'the function returns `true` if provided a `RangeError` object from a different realm', opts, function test( t ) {
	var error = vm.runInNewContext( 'new RangeError()' );
	t.strictEqual( isRangeError( error ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `true` if provided an object from a different realm which inherits from a `RangeError` object', opts, function test( t ) {
	var error = vm.runInNewContext( 'function Err() { return this; }; Err.prototype = new RangeError(); new Err();' );
	t.strictEqual( isRangeError( error ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if not provided a `RangeError` object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		undefined,
		[],
		{},
		function noop() {},
		function error() {},
		new Date(),
		new RegExp( '.*' ),
		new Error( 'error' ),
		new EvalError( 'eval error' ),
		new ReferenceError( 'reference error' ),
		new SyntaxError( 'syntax error' ),
		new TypeError( 'type error' ),
		new URIError( 'URI error' )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isRangeError( values[ i ] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});
