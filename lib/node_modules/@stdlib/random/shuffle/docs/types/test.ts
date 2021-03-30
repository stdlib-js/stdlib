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

import shuffle = require( './index' );


// TESTS //

// The function returns an array-like object...
{
	shuffle( [ 1, 2, 3 ] ); // $ExpectType ArrayLike<any>
	shuffle( [ 1, 2, 3 ], { 'copy': 'none' } ); // $ExpectType ArrayLike<any>
}

// The compiler throws an error if the function is provided a value other than an array-like object...
{
	shuffle( true ); // $ExpectError
	shuffle( false ); // $ExpectError
	shuffle( 123 ); // $ExpectError
	shuffle( {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const arr = [ 1, 2, 3 ];
	shuffle( arr, 'abc' ); // $ExpectError
	shuffle( arr, true ); // $ExpectError
	shuffle( arr, false ); // $ExpectError
	shuffle( arr, 123 ); // $ExpectError
	shuffle( arr, [] ); // $ExpectError
	shuffle( arr, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `copy` option which is not a recognized copy option...
{
	const arr = [ 1, 2, 3 ];
	shuffle( arr, { 'copy': 123 } ); // $ExpectError
	shuffle( arr, { 'copy': 'abc' } ); // $ExpectError
	shuffle( arr, { 'copy': null } ); // $ExpectError
	shuffle( arr, { 'copy': [] } ); // $ExpectError
	shuffle( arr, { 'copy': {} } ); // $ExpectError
	shuffle( arr, { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	shuffle(); // $ExpectError
	shuffle( [ 1, 2, 3 ], {}, {} ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	shuffle.factory(); // $ExpectType ShuffleFunction
	shuffle.factory( { 'seed': 23 } ); // $ExpectType ShuffleFunction
	shuffle.factory( { 'copy': 'deep' } ); // $ExpectType ShuffleFunction
}

// The `factory` method returns a function which returns an array-like object...
{
	const fcn1 = shuffle.factory( { 'seed': 23 } );
	fcn1( [ 1, 2, 3 ] ); // $ExpectType ArrayLike<any>

	const fcn2 = shuffle.factory();
	fcn2( [ 1, 2, 3 ] ); // $ExpectType ArrayLike<any>
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const arr = [ 1, 2, 3 ];
	const fcn1 = shuffle.factory();
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

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn1 = shuffle.factory();
	fcn1(); // $ExpectError
	fcn1( [ 1, 2, 3 ], {}, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	shuffle.factory( true ); // $ExpectError
	shuffle.factory( false ); // $ExpectError
	shuffle.factory( null ); // $ExpectError
	shuffle.factory( 123 ); // $ExpectError
	shuffle.factory( 'abc' ); // $ExpectError
	shuffle.factory( [] ); // $ExpectError
	shuffle.factory( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	shuffle.factory( { 'seed': true } ); // $ExpectError
	shuffle.factory( { 'seed': 'abc' } ); // $ExpectError
	shuffle.factory( { 'seed': null } ); // $ExpectError
	shuffle.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	shuffle.factory( { 'seed': {} } ); // $ExpectError
	shuffle.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a recognized copy option...
{
	shuffle.factory( { 'copy': 123 } ); // $ExpectError
	shuffle.factory( { 'copy': 'abc' } ); // $ExpectError
	shuffle.factory( { 'copy': null } ); // $ExpectError
	shuffle.factory( { 'copy': [] } ); // $ExpectError
	shuffle.factory( { 'copy': {} } ); // $ExpectError
	shuffle.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than one argument...
{
	shuffle.factory( {}, {} ); // $ExpectError
}
