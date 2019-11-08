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

import hypergeometric = require( './index' );


// TESTS //

// The function returns a number...
{
	hypergeometric( 10, 5, 7 ); // $ExpectType number
	hypergeometric( 5, 3, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than three numbers...
{
	hypergeometric( true, 3, 2 ); // $ExpectError
	hypergeometric( false, 2, 2 ); // $ExpectError
	hypergeometric( '5', 1, 2 ); // $ExpectError
	hypergeometric( [], 1, 2 ); // $ExpectError
	hypergeometric( {}, 2, 2 ); // $ExpectError
	hypergeometric( ( x: number ): number => x, 2, 2 ); // $ExpectError

	hypergeometric( 9, true, 2 ); // $ExpectError
	hypergeometric( 9, false, 2 ); // $ExpectError
	hypergeometric( 5, '5', 2 ); // $ExpectError
	hypergeometric( 8, [], 2 ); // $ExpectError
	hypergeometric( 9, {}, 2 ); // $ExpectError
	hypergeometric( 8, ( x: number ): number => x, 2 ); // $ExpectError

	hypergeometric( 9, 3, true ); // $ExpectError
	hypergeometric( 9, 3, false ); // $ExpectError
	hypergeometric( 5, 5, '5' ); // $ExpectError
	hypergeometric( 8, 8, [] ); // $ExpectError
	hypergeometric( 9, 3, {} ); // $ExpectError
	hypergeometric( 8, 4, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	hypergeometric(); // $ExpectError
	hypergeometric( 4 ); // $ExpectError
	hypergeometric( 4, 2 ); // $ExpectError
	hypergeometric( 4, 2, 2, 4, 8 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	hypergeometric.factory( 4, 2, 2 ); // $ExpectType NullaryFunction
	hypergeometric.factory(); // $ExpectType BinaryFunction
	hypergeometric.factory( { 'copy': false } ); // $ExpectType BinaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn1 = hypergeometric.factory( 4, 2, 2 );
	fcn1(); // $ExpectType number

	const fcn2 = hypergeometric.factory();
	fcn2( 4, 2, 2 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = hypergeometric.factory( 5, 3, 2 );
	fcn1( 12 ); // $ExpectError
	fcn1( true ); // $ExpectError
	fcn1( false ); // $ExpectError
	fcn1( '5' ); // $ExpectError
	fcn1( [] ); // $ExpectError
	fcn1( {} ); // $ExpectError
	fcn1( ( x: number ): number => x ); // $ExpectError

	const fcn2 = hypergeometric.factory();
	fcn2( true, 2, 2 ); // $ExpectError
	fcn2( false, 2, 2 ); // $ExpectError
	fcn2( '5', 2, 2 ); // $ExpectError
	fcn2( [], 2, 2 ); // $ExpectError
	fcn2( {}, 2, 2 ); // $ExpectError
	fcn2( ( x: number ): number => x, 2, 2 ); // $ExpectError

	fcn2( 10, true, 2 ); // $ExpectError
	fcn2( 10, false, 2 ); // $ExpectError
	fcn2( 10, '5', 2 ); // $ExpectError
	fcn2( 10, [], 2 ); // $ExpectError
	fcn2( 10, {}, 2 ); // $ExpectError
	fcn2( 10, ( x: number ): number => x, 2 ); // $ExpectError

	fcn2( 10, 5, true ); // $ExpectError
	fcn2( 10, 5, false ); // $ExpectError
	fcn2( 10, 5, '5' ); // $ExpectError
	fcn2( 10, 5, [] ); // $ExpectError
	fcn2( 10, 5, {} ); // $ExpectError
	fcn2( 10, 5, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn1 = hypergeometric.factory( 20, 10, 5 );
	fcn1( 1 ); // $ExpectError
	fcn1( 2, 1 ); // $ExpectError
	fcn1( 2, 1, 1 ); // $ExpectError

	const fcn2 = hypergeometric.factory();
	fcn2(); // $ExpectError
	fcn2( 1 ); // $ExpectError
	fcn2( 2, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided values other than three numbers aside from an options object...
{
	hypergeometric.factory( true, 3, 1 ); // $ExpectError
	hypergeometric.factory( false, 2, 1 ); // $ExpectError
	hypergeometric.factory( '5', 1, 1 ); // $ExpectError
	hypergeometric.factory( [], 1, 1 ); // $ExpectError
	hypergeometric.factory( {}, 2, 1 ); // $ExpectError
	hypergeometric.factory( ( x: number ): number => x, 2, 1 ); // $ExpectError

	hypergeometric.factory( 9, true, 1 ); // $ExpectError
	hypergeometric.factory( 9, false, 1 ); // $ExpectError
	hypergeometric.factory( 5, '5', 1 ); // $ExpectError
	hypergeometric.factory( 8, [], 1 ); // $ExpectError
	hypergeometric.factory( 9, {}, 1 ); // $ExpectError
	hypergeometric.factory( 8, ( x: number ): number => x, 1 ); // $ExpectError

	hypergeometric.factory( 9, 3, true ); // $ExpectError
	hypergeometric.factory( 9, 3, false ); // $ExpectError
	hypergeometric.factory( 5, 3, '5' ); // $ExpectError
	hypergeometric.factory( 8, 3, [] ); // $ExpectError
	hypergeometric.factory( 9, 3, {} ); // $ExpectError
	hypergeometric.factory( 8, 8, ( x: number ): number => x ); // $ExpectError

	hypergeometric.factory( true, 3, 1, {} ); // $ExpectError
	hypergeometric.factory( false, 2, 1, {} ); // $ExpectError
	hypergeometric.factory( '5', 1, 1, {} ); // $ExpectError
	hypergeometric.factory( [], 1, 1, {} ); // $ExpectError
	hypergeometric.factory( {}, 2, 1, {} ); // $ExpectError
	hypergeometric.factory( ( x: number ): number => x, 2, 1, {} ); // $ExpectError

	hypergeometric.factory( 9, true, 1, {} ); // $ExpectError
	hypergeometric.factory( 9, false, 1, {} ); // $ExpectError
	hypergeometric.factory( 5, '5', 1, {} ); // $ExpectError
	hypergeometric.factory( 8, [], 1, {} ); // $ExpectError
	hypergeometric.factory( 9, {}, 1, {} ); // $ExpectError
	hypergeometric.factory( 8, ( x: number ): number => x, 1, {} ); // $ExpectError

	hypergeometric.factory( 9, 3, true, {} ); // $ExpectError
	hypergeometric.factory( 9, 3, false, {} ); // $ExpectError
	hypergeometric.factory( 5, 3, '5', {} ); // $ExpectError
	hypergeometric.factory( 8, 3, [], {} ); // $ExpectError
	hypergeometric.factory( 9, 3, {}, {} ); // $ExpectError
	hypergeometric.factory( 8, 8, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	hypergeometric.factory( null ); // $ExpectError
	hypergeometric.factory( 4, 2, 1, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	hypergeometric.factory( 5, 3, 2, { 'prng': 123 } ); // $ExpectError
	hypergeometric.factory( 5, 3, 2, { 'prng': 'abc' } ); // $ExpectError
	hypergeometric.factory( 5, 3, 2, { 'prng': null } ); // $ExpectError
	hypergeometric.factory( 5, 3, 2, { 'prng': [] } ); // $ExpectError
	hypergeometric.factory( 5, 3, 2, { 'prng': {} } ); // $ExpectError
	hypergeometric.factory( 5, 3, 2, { 'prng': true ); // $ExpectError

	hypergeometric.factory( { 'prng': 123 } ); // $ExpectError
	hypergeometric.factory( { 'prng': 'abc' } ); // $ExpectError
	hypergeometric.factory( { 'prng': null } ); // $ExpectError
	hypergeometric.factory( { 'prng': [] } ); // $ExpectError
	hypergeometric.factory( { 'prng': {} } ); // $ExpectError
	hypergeometric.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	hypergeometric.factory( 5, 3, 2, { 'seed': true } ); // $ExpectError
	hypergeometric.factory( 5, 3, 2, { 'seed': 'abc' } ); // $ExpectError
	hypergeometric.factory( 5, 3, 2, { 'seed': null } ); // $ExpectError
	hypergeometric.factory( 5, 3, 2, { 'seed': [ 'a' ] } ); // $ExpectError
	hypergeometric.factory( 5, 3, 2, { 'seed': {} } ); // $ExpectError
	hypergeometric.factory( 5, 3, 2, { 'seed': ( x: number ): number => x } ); // $ExpectError

	hypergeometric.factory( { 'seed': true } ); // $ExpectError
	hypergeometric.factory( { 'seed': 'abc' } ); // $ExpectError
	hypergeometric.factory( { 'seed': null } ); // $ExpectError
	hypergeometric.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	hypergeometric.factory( { 'seed': {} } ); // $ExpectError
	hypergeometric.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	hypergeometric.factory( 5, 3, 2, { 'state': 123 } ); // $ExpectError
	hypergeometric.factory( 5, 3, 2, { 'state': 'abc' } ); // $ExpectError
	hypergeometric.factory( 5, 3, 2, { 'state': null } ); // $ExpectError
	hypergeometric.factory( 5, 3, 2, { 'state': [] } ); // $ExpectError
	hypergeometric.factory( 5, 3, 2, { 'state': {} } ); // $ExpectError
	hypergeometric.factory( 5, 3, 2, { 'state': true ); // $ExpectError
	hypergeometric.factory( 5, 3, 2, { 'state': ( x: number ): number => x } ); // $ExpectError

	hypergeometric.factory( { 'state': 123 } ); // $ExpectError
	hypergeometric.factory( { 'state': 'abc' } ); // $ExpectError
	hypergeometric.factory( { 'state': null } ); // $ExpectError
	hypergeometric.factory( { 'state': [] } ); // $ExpectError
	hypergeometric.factory( { 'state': {} } ); // $ExpectError
	hypergeometric.factory( { 'state': true ); // $ExpectError
	hypergeometric.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	hypergeometric.factory( 5, 3, 2, { 'copy': 123 } ); // $ExpectError
	hypergeometric.factory( 5, 3, 2, { 'copy': 'abc' } ); // $ExpectError
	hypergeometric.factory( 5, 3, 2, { 'copy': null } ); // $ExpectError
	hypergeometric.factory( 5, 3, 2, { 'copy': [] } ); // $ExpectError
	hypergeometric.factory( 5, 3, 2, { 'copy': {} } ); // $ExpectError
	hypergeometric.factory( 5, 3, 2, { 'copy': ( x: number ): number => x } ); // $ExpectError

	hypergeometric.factory( { 'copy': 123 } ); // $ExpectError
	hypergeometric.factory( { 'copy': 'abc' } ); // $ExpectError
	hypergeometric.factory( { 'copy': null } ); // $ExpectError
	hypergeometric.factory( { 'copy': [] } ); // $ExpectError
	hypergeometric.factory( { 'copy': {} } ); // $ExpectError
	hypergeometric.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than four arguments...
{
	hypergeometric.factory( 20, 10, 6, {}, 2 ); // $ExpectError
}
