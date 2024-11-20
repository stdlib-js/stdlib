/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import sample = require( './index' );


// TESTS //

// The function returns an array-like object...
{
	sample( [ 1, 2, 3, 4, 5, 6 ] ); // $ExpectType any[]
	sample( [ 1, 2, 3 ], { 'size': 7 } ); // $ExpectType any[]
	sample( [ 1, 2, 3 ], { 'replace': false } ); // $ExpectType any[]
	sample( [ 1, 2, 3 ], { 'probs': [ 0.2, 0.2, 0.6 ] } ); // $ExpectType any[]
}

// The compiler throws an error if the function is provided a value other than an array-like object...
{
	sample( true ); // $ExpectError
	sample( false ); // $ExpectError
	sample( 123 ); // $ExpectError
	sample( {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const arr = [ 1, 2, 3 ];
	sample( arr, 'abc' ); // $ExpectError
	sample( arr, true ); // $ExpectError
	sample( arr, false ); // $ExpectError
	sample( arr, 123 ); // $ExpectError
	sample( arr, [] ); // $ExpectError
	sample( arr, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `size` option which is not a number...
{
	const arr = [ 1, 2, 3 ];
	sample( arr, { 'size': true } ); // $ExpectError
	sample( arr, { 'size': false } ); // $ExpectError
	sample( arr, { 'size': 'abc' } ); // $ExpectError
	sample( arr, { 'size': null } ); // $ExpectError
	sample( arr, { 'size': [] } ); // $ExpectError
	sample( arr, { 'size': {} } ); // $ExpectError
	sample( arr, { 'size': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `replace` option which is not a boolean...
{
	const arr = [ 1, 2, 3 ];
	sample( arr, { 'replace': 123 } ); // $ExpectError
	sample( arr, { 'replace': 'abc' } ); // $ExpectError
	sample( arr, { 'replace': null } ); // $ExpectError
	sample( arr, { 'replace': [] } ); // $ExpectError
	sample( arr, { 'replace': {} } ); // $ExpectError
	sample( arr, { 'replace': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `probs` option which is not an array of numbers...
{
	const arr = [ 1, 2, 3 ];
	sample( arr, { 'probs': true } ); // $ExpectError
	sample( arr, { 'probs': false } ); // $ExpectError
	sample( arr, { 'probs': 123 } ); // $ExpectError
	sample( arr, { 'probs': 'abc' } ); // $ExpectError
	sample( arr, { 'probs': null } ); // $ExpectError
	sample( arr, { 'probs': {} } ); // $ExpectError
	sample( arr, { 'probs': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	sample(); // $ExpectError
	sample( [ 1, 2, 3 ], {}, {} ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	sample.factory(); // $ExpectType SampleFunction
	sample.factory( { 'seed': 23 } ); // $ExpectType SampleFunction
	sample.factory( { 'size': 10 } ); // $ExpectType SampleFunction
	sample.factory( { 'replace': false } ); // $ExpectType SampleFunction
}

// The `factory` method returns a function which returns an array-like object...
{
	const fcn1 = sample.factory( { 'seed': 23 } );
	fcn1( [ 1, 2, 3 ] ); // $ExpectType any[]

	const fcn2 = sample.factory();
	fcn2( [ 1, 2, 3 ] ); // $ExpectType any[]
}

// The `factory` method returns a function which returns an array-like object sampled from the supplied `pool`...
{
	const pool = [ 0, 1 ];
	const fcn1 = sample.factory( pool, { 'seed': 23 } );
	fcn1(); // $ExpectType any[]

	const fcn2 = sample.factory( pool, { 'mutate': false } );
	fcn2( { 'size': 6 } ); // $ExpectType any[]
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const arr = [ 1, 2, 3 ];
	const fcn1 = sample.factory();
	fcn1( 123 ); // $ExpectError
	fcn1( true ); // $ExpectError
	fcn1( false ); // $ExpectError
	fcn1( {} ); // $ExpectError

	fcn1( arr, 123 ); // $ExpectError
	fcn1( arr, true ); // $ExpectError
	fcn1( arr, false ); // $ExpectError
	fcn1( arr, [] ); // $ExpectError
	fcn1( arr, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided a `replace` option which is not a boolean...
{
	const arr = [ 1, 2, 3 ];
	const pool = [ 0, 1 ];

	const fcn1 = sample.factory();
	fcn1( arr, { 'replace': 123 } ); // $ExpectError
	fcn1( arr, { 'replace': 'abc' } ); // $ExpectError
	fcn1( arr, { 'replace': null } ); // $ExpectError
	fcn1( arr, { 'replace': [] } ); // $ExpectError
	fcn1( arr, { 'replace': {} } ); // $ExpectError
	fcn1( arr, { 'replace': ( x: number ): number => x } ); // $ExpectError

	const fcn2 = sample.factory( pool );
	fcn2( { 'replace': 123 } ); // $ExpectError
	fcn2( { 'replace': 'abc' } ); // $ExpectError
	fcn2( { 'replace': null } ); // $ExpectError
	fcn2( { 'replace': [] } ); // $ExpectError
	fcn2( { 'replace': {} } ); // $ExpectError
	fcn2( { 'replace': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided a `size` option which is not a number...
{
	const arr = [ 1, 2, 3 ];
	const pool = [ 0, 1 ];

	const fcn1 = sample.factory();
	fcn1( arr, { 'size': true } ); // $ExpectError
	fcn1( arr, { 'size': false } ); // $ExpectError
	fcn1( arr, { 'size': 'abc' } ); // $ExpectError
	fcn1( arr, { 'size': null } ); // $ExpectError
	fcn1( arr, { 'size': [] } ); // $ExpectError
	fcn1( arr, { 'size': {} } ); // $ExpectError
	fcn1( arr, { 'size': ( x: number ): number => x } ); // $ExpectError

	const fcn2 = sample.factory( pool );
	fcn2( { 'size': true } ); // $ExpectError
	fcn2( { 'size': false } ); // $ExpectError
	fcn2( { 'size': 'abc' } ); // $ExpectError
	fcn2( { 'size': null } ); // $ExpectError
	fcn2( { 'size': [] } ); // $ExpectError
	fcn2( { 'size': {} } ); // $ExpectError
	fcn2( { 'size': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided a `probs` option which is not an array of numbers...
{
	const arr = [ 1, 2, 3 ];
	const fcn1 = sample.factory();
	fcn1( arr, { 'probs': true } ); // $ExpectError
	fcn1( arr, { 'probs': false } ); // $ExpectError
	fcn1( arr, { 'probs': 'abc' } ); // $ExpectError
	fcn1( arr, { 'probs': 123 } ); // $ExpectError
	fcn1( arr, { 'probs': null } ); // $ExpectError
	fcn1( arr, { 'probs': {} } ); // $ExpectError
	fcn1( arr, { 'probs': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided a `mutate` option which is not a boolean (when supplied a `pool`)...
{
	const pool = [ 0, 1 ];
	const fcn1 = sample.factory( pool );
	fcn1( { 'mutate': 'abc' } ); // $ExpectError
	fcn1( { 'mutate': 123 } ); // $ExpectError
	fcn1( { 'mutate': null } ); // $ExpectError
	fcn1( { 'mutate': [] } ); // $ExpectError
	fcn1( { 'mutate': {} } ); // $ExpectError
	fcn1( { 'mutate': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn1 = sample.factory();
	fcn1(); // $ExpectError
	fcn1( [ 1, 2, 3 ], {}, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a first argument which is not an object or array-like object...
{
	sample.factory( 123 ); // $ExpectError
	sample.factory( true ); // $ExpectError
	sample.factory( false ); // $ExpectError
	sample.factory( null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	sample.factory( { 'seed': true } ); // $ExpectError
	sample.factory( { 'seed': 'abc' } ); // $ExpectError
	sample.factory( { 'seed': null } ); // $ExpectError
	sample.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	sample.factory( { 'seed': {} } ); // $ExpectError
	sample.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `size` option which is not a number...
{
	sample.factory( { 'size': true } ); // $ExpectError
	sample.factory( { 'size': 'abc' } ); // $ExpectError
	sample.factory( { 'size': null } ); // $ExpectError
	sample.factory( { 'size': [ 'a' ] } ); // $ExpectError
	sample.factory( { 'size': {} } ); // $ExpectError
	sample.factory( { 'size': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `replace` option which is not a boolean...
{
	sample.factory( { 'replace': 123 } ); // $ExpectError
	sample.factory( { 'replace': 'abc' } ); // $ExpectError
	sample.factory( { 'replace': null } ); // $ExpectError
	sample.factory( { 'replace': [] } ); // $ExpectError
	sample.factory( { 'replace': {} } ); // $ExpectError
	sample.factory( { 'replace': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than two arguments...
{
	sample.factory( [], {}, {} ); // $ExpectError
}
