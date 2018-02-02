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
var isError = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': IS_BROWSER
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isError, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided an `Error` object', function test( t ) {
	var values;
	var i;

	values = [
		new Error( 'error' ),
		new EvalError( 'eval error' ),
		new RangeError( 'range error' ),
		new ReferenceError( 'reference error' ),
		new SyntaxError( 'syntax error' ),
		new TypeError( 'type error' ),
		new URIError( 'URI error' )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isError( values[ i ] ), true, 'returns true when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `true` if provided an object inheriting from `Error`', function test( t ) {
	function CustomError( msg ) {
		Error.call( this );
		this.name = 'CustomError';
		this.message = msg;
		return this;
	}

	inherit( CustomError, Error );

	t.strictEqual( isError( new CustomError( 'custom error' ) ), true, 'returns true when provided a value which inherits from Error' );
	t.end();
});

tape( 'the function returns `true` if provided an `Error` object from a different realm', opts, function test( t ) {
	var error = vm.runInNewContext( 'new Error()' );
	t.strictEqual( isError( error ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `true` if provided an object from a different realm which inherits from an `Error` object', opts, function test( t ) {
	var error = vm.runInNewContext( 'function Err() { return this; }; Err.prototype = new Error(); new Err();' );
	t.strictEqual( isError( error ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if not provided an `Error` object', function test( t ) {
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
		new RegExp( '.*' )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isError( values[ i ] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});
