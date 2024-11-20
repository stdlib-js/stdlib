/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

import f = require( './index' );


// TESTS //

// The function returns a number...
{
	f( 2, 3 ); // $ExpectType number
	f( 1, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	f( true, 3 ); // $ExpectError
	f( false, 2 ); // $ExpectError
	f( '5', 1 ); // $ExpectError
	f( [], 1 ); // $ExpectError
	f( {}, 2 ); // $ExpectError
	f( ( x: number ): number => x, 2 ); // $ExpectError

	f( 9, true ); // $ExpectError
	f( 9, false ); // $ExpectError
	f( 5, '5' ); // $ExpectError
	f( 8, [] ); // $ExpectError
	f( 9, {} ); // $ExpectError
	f( 8, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	f(); // $ExpectError
	f( 2 ); // $ExpectError
	f( 2, 2, 4 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	f.factory( 2, 2 ); // $ExpectType NullaryFunction
	f.factory(); // $ExpectType BinaryFunction
	f.factory( { 'copy': false } ); // $ExpectType BinaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn1 = f.factory( 2, 2 );
	fcn1(); // $ExpectType number

	const fcn2 = f.factory();
	fcn2( 2, 2 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = f.factory( 2, 4 );
	fcn1( 12 ); // $ExpectError
	fcn1( true ); // $ExpectError
	fcn1( false ); // $ExpectError
	fcn1( '5' ); // $ExpectError
	fcn1( [] ); // $ExpectError
	fcn1( {} ); // $ExpectError
	fcn1( ( x: number ): number => x ); // $ExpectError

	const fcn2 = f.factory();
	fcn2( true, 2 ); // $ExpectError
	fcn2( false, 2 ); // $ExpectError
	fcn2( '5', 2 ); // $ExpectError
	fcn2( [], 2 ); // $ExpectError
	fcn2( {}, 2 ); // $ExpectError
	fcn2( ( x: number ): number => x, 2 ); // $ExpectError

	fcn2( 1, true ); // $ExpectError
	fcn2( 1, false ); // $ExpectError
	fcn2( 1, '5' ); // $ExpectError
	fcn2( 1, [] ); // $ExpectError
	fcn2( 1, {} ); // $ExpectError
	fcn2( 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn1 = f.factory( 2, 2 );
	fcn1( 1 ); // $ExpectError
	fcn1( 2, 1 ); // $ExpectError
	fcn1( 2, 1, 1 ); // $ExpectError

	const fcn2 = f.factory();
	fcn2(); // $ExpectError
	fcn2( 1 ); // $ExpectError
	fcn2( 2, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided values other than two numbers aside from an options object...
{
	f.factory( true, 3 ); // $ExpectError
	f.factory( false, 2 ); // $ExpectError
	f.factory( '5', 1 ); // $ExpectError
	f.factory( [], 1 ); // $ExpectError
	f.factory( {}, 2 ); // $ExpectError
	f.factory( ( x: number ): number => x, 2 ); // $ExpectError

	f.factory( 9, true ); // $ExpectError
	f.factory( 9, false ); // $ExpectError
	f.factory( 5, '5' ); // $ExpectError
	f.factory( 8, [] ); // $ExpectError
	f.factory( 9, {} ); // $ExpectError
	f.factory( 8, ( x: number ): number => x ); // $ExpectError

	f.factory( true, 3, {} ); // $ExpectError
	f.factory( false, 2, {} ); // $ExpectError
	f.factory( '5', 1, {} ); // $ExpectError
	f.factory( [], 1, {} ); // $ExpectError
	f.factory( {}, 2, {} ); // $ExpectError
	f.factory( ( x: number ): number => x, 2, {} ); // $ExpectError

	f.factory( 9, true, {} ); // $ExpectError
	f.factory( 9, false, {} ); // $ExpectError
	f.factory( 5, '5', {} ); // $ExpectError
	f.factory( 8, [], {} ); // $ExpectError
	f.factory( 9, {}, {} ); // $ExpectError
	f.factory( 8, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	f.factory( null ); // $ExpectError
	f.factory( 2, 2, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	f.factory( 2, 2, { 'prng': 123 } ); // $ExpectError
	f.factory( 2, 2, { 'prng': 'abc' } ); // $ExpectError
	f.factory( 2, 2, { 'prng': null } ); // $ExpectError
	f.factory( 2, 2, { 'prng': [] } ); // $ExpectError
	f.factory( 2, 2, { 'prng': {} } ); // $ExpectError
	f.factory( 2, 2, { 'prng': true ); // $ExpectError

	f.factory( { 'prng': 123 } ); // $ExpectError
	f.factory( { 'prng': 'abc' } ); // $ExpectError
	f.factory( { 'prng': null } ); // $ExpectError
	f.factory( { 'prng': [] } ); // $ExpectError
	f.factory( { 'prng': {} } ); // $ExpectError
	f.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	f.factory( 2, 2, { 'seed': true } ); // $ExpectError
	f.factory( 2, 2, { 'seed': 'abc' } ); // $ExpectError
	f.factory( 2, 2, { 'seed': null } ); // $ExpectError
	f.factory( 2, 2, { 'seed': [ 'a' ] } ); // $ExpectError
	f.factory( 2, 2, { 'seed': {} } ); // $ExpectError
	f.factory( 2, 2, { 'seed': ( x: number ): number => x } ); // $ExpectError

	f.factory( { 'seed': true } ); // $ExpectError
	f.factory( { 'seed': 'abc' } ); // $ExpectError
	f.factory( { 'seed': null } ); // $ExpectError
	f.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	f.factory( { 'seed': {} } ); // $ExpectError
	f.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	f.factory( 2, 2, { 'state': 123 } ); // $ExpectError
	f.factory( 2, 2, { 'state': 'abc' } ); // $ExpectError
	f.factory( 2, 2, { 'state': null } ); // $ExpectError
	f.factory( 2, 2, { 'state': [] } ); // $ExpectError
	f.factory( 2, 2, { 'state': {} } ); // $ExpectError
	f.factory( 2, 2, { 'state': true ); // $ExpectError
	f.factory( 2, 2, { 'state': ( x: number ): number => x } ); // $ExpectError

	f.factory( { 'state': 123 } ); // $ExpectError
	f.factory( { 'state': 'abc' } ); // $ExpectError
	f.factory( { 'state': null } ); // $ExpectError
	f.factory( { 'state': [] } ); // $ExpectError
	f.factory( { 'state': {} } ); // $ExpectError
	f.factory( { 'state': true ); // $ExpectError
	f.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	f.factory( 2, 2, { 'copy': 123 } ); // $ExpectError
	f.factory( 2, 2, { 'copy': 'abc' } ); // $ExpectError
	f.factory( 2, 2, { 'copy': null } ); // $ExpectError
	f.factory( 2, 2, { 'copy': [] } ); // $ExpectError
	f.factory( 2, 2, { 'copy': {} } ); // $ExpectError
	f.factory( 2, 2, { 'copy': ( x: number ): number => x } ); // $ExpectError

	f.factory( { 'copy': 123 } ); // $ExpectError
	f.factory( { 'copy': 'abc' } ); // $ExpectError
	f.factory( { 'copy': null } ); // $ExpectError
	f.factory( { 'copy': [] } ); // $ExpectError
	f.factory( { 'copy': {} } ); // $ExpectError
	f.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than three arguments...
{
	f.factory( 2, 4, {}, 2 ); // $ExpectError
}
