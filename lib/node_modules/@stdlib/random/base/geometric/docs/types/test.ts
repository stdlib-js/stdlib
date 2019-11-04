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

import geometric = require( './index' );


// TESTS //

// The function returns a number...
{
	geometric( 0.3 ); // $ExpectType number
	geometric( 0.5 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a value other than a number...
{
	geometric( true ); // $ExpectError
	geometric( false ); // $ExpectError
	geometric( '5' ); // $ExpectError
	geometric( [] ); // $ExpectError
	geometric( {} ); // $ExpectError
	geometric( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	geometric(); // $ExpectError
	geometric( 0.3, 3.1 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	geometric.factory( 0.3 ); // $ExpectType NullaryFunction
	geometric.factory(); // $ExpectType BinaryFunction
	geometric.factory( { 'copy': false } ); // $ExpectType BinaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn1 = geometric.factory( 0.3 );
	fcn1(); // $ExpectType number

	const fcn2 = geometric.factory();
	fcn2( 0.3 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = geometric.factory( 0.3 );
	fcn1( 12 ); // $ExpectError
	fcn1( true ); // $ExpectError
	fcn1( false ); // $ExpectError
	fcn1( '5' ); // $ExpectError
	fcn1( [] ); // $ExpectError
	fcn1( {} ); // $ExpectError
	fcn1( ( x: number ): number => x ); // $ExpectError

	const fcn2 = geometric.factory();
	fcn2( true ); // $ExpectError
	fcn2( false ); // $ExpectError
	fcn2( '5' ); // $ExpectError
	fcn2( [] ); // $ExpectError
	fcn2( {} ); // $ExpectError
	fcn2( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn1 = geometric.factory( 0.3 );
	fcn1( 1 ); // $ExpectError
	fcn1( 2, 1 ); // $ExpectError
	fcn1( 2, 1, 1 ); // $ExpectError

	const fcn2 = geometric.factory();
	fcn2(); // $ExpectError
	fcn2( 1, 2 ); // $ExpectError
	fcn2( 2, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an argument other than a number aside from an options object...
{
	geometric.factory( true, {} ); // $ExpectError
	geometric.factory( false, {} ); // $ExpectError
	geometric.factory( '5', {} ); // $ExpectError
	geometric.factory( [], {} ); // $ExpectError
	geometric.factory( {}, {} ); // $ExpectError
	geometric.factory( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	geometric.factory( null ); // $ExpectError
	geometric.factory( 0.3, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	geometric.factory( 0.3, { 'prng': 123 } ); // $ExpectError
	geometric.factory( 0.3, { 'prng': 'abc' } ); // $ExpectError
	geometric.factory( 0.3, { 'prng': null } ); // $ExpectError
	geometric.factory( 0.3, { 'prng': [] } ); // $ExpectError
	geometric.factory( 0.3, { 'prng': {} } ); // $ExpectError
	geometric.factory( 0.3, { 'prng': true ); // $ExpectError

	geometric.factory( { 'prng': 123 } ); // $ExpectError
	geometric.factory( { 'prng': 'abc' } ); // $ExpectError
	geometric.factory( { 'prng': null } ); // $ExpectError
	geometric.factory( { 'prng': [] } ); // $ExpectError
	geometric.factory( { 'prng': {} } ); // $ExpectError
	geometric.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	geometric.factory( 0.3, { 'seed': true } ); // $ExpectError
	geometric.factory( 0.3, { 'seed': 'abc' } ); // $ExpectError
	geometric.factory( 0.3, { 'seed': null } ); // $ExpectError
	geometric.factory( 0.3, { 'seed': [ 'a' ] } ); // $ExpectError
	geometric.factory( 0.3, { 'seed': {} } ); // $ExpectError
	geometric.factory( 0.3, { 'seed': ( x: number ): number => x } ); // $ExpectError

	geometric.factory( { 'seed': true } ); // $ExpectError
	geometric.factory( { 'seed': 'abc' } ); // $ExpectError
	geometric.factory( { 'seed': null } ); // $ExpectError
	geometric.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	geometric.factory( { 'seed': {} } ); // $ExpectError
	geometric.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	geometric.factory( 0.3, { 'state': 123 } ); // $ExpectError
	geometric.factory( 0.3, { 'state': 'abc' } ); // $ExpectError
	geometric.factory( 0.3, { 'state': null } ); // $ExpectError
	geometric.factory( 0.3, { 'state': [] } ); // $ExpectError
	geometric.factory( 0.3, { 'state': {} } ); // $ExpectError
	geometric.factory( 0.3, { 'state': true ); // $ExpectError
	geometric.factory( 0.3, { 'state': ( x: number ): number => x } ); // $ExpectError

	geometric.factory( { 'state': 123 } ); // $ExpectError
	geometric.factory( { 'state': 'abc' } ); // $ExpectError
	geometric.factory( { 'state': null } ); // $ExpectError
	geometric.factory( { 'state': [] } ); // $ExpectError
	geometric.factory( { 'state': {} } ); // $ExpectError
	geometric.factory( { 'state': true ); // $ExpectError
	geometric.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	geometric.factory( 0.3, { 'copy': 123 } ); // $ExpectError
	geometric.factory( 0.3, { 'copy': 'abc' } ); // $ExpectError
	geometric.factory( 0.3, { 'copy': null } ); // $ExpectError
	geometric.factory( 0.3, { 'copy': [] } ); // $ExpectError
	geometric.factory( 0.3, { 'copy': {} } ); // $ExpectError
	geometric.factory( 0.3, { 'copy': ( x: number ): number => x } ); // $ExpectError

	geometric.factory( { 'copy': 123 } ); // $ExpectError
	geometric.factory( { 'copy': 'abc' } ); // $ExpectError
	geometric.factory( { 'copy': null } ); // $ExpectError
	geometric.factory( { 'copy': [] } ); // $ExpectError
	geometric.factory( { 'copy': {} } ); // $ExpectError
	geometric.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than two arguments...
{
	geometric.factory( 0.2, {}, 2 ); // $ExpectError
}
