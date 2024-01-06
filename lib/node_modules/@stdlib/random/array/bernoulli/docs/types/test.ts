/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import zeros = require( '@stdlib/array/zeros' );
import random = require( './index' );


// TESTS //

// The function returns an array...
{
	random( 10, 0.5 ); // $ExpectType RandomArray
	random( 10, 0.5, {} ); // $ExpectType RandomArray
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	random( '5', 0.5 ); // $ExpectError
	random( true, 0.5 ); // $ExpectError
	random( false, 0.5 ); // $ExpectError
	random( null, 0.5 ); // $ExpectError
	random( [], 0.5 ); // $ExpectError
	random( {}, 0.5 ); // $ExpectError
	random( ( x: number ): number => x, 0.5 ); // $ExpectError

	random( '5', 0.5, {} ); // $ExpectError
	random( true, 0.5, {} ); // $ExpectError
	random( false, 0.5, {} ); // $ExpectError
	random( null, 0.5, {} ); // $ExpectError
	random( [], 0.5, {} ); // $ExpectError
	random( {}, 0.5, {} ); // $ExpectError
	random( ( x: number ): number => x, 0.5, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	random( 10, '5' ); // $ExpectError
	random( 10, true ); // $ExpectError
	random( 10, false ); // $ExpectError
	random( 10, null ); // $ExpectError
	random( 10, [] ); // $ExpectError
	random( 10, {} ); // $ExpectError
	random( 10, ( x: number ): number => x ); // $ExpectError

	random( 10, '5', {} ); // $ExpectError
	random( 10, true, {} ); // $ExpectError
	random( 10, false, {} ); // $ExpectError
	random( 10, null, {} ); // $ExpectError
	random( 10, [], {} ); // $ExpectError
	random( 10, {}, {} ); // $ExpectError
	random( 10, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not a valid object...
{
	random( 10, 0.5, '5' ); // $ExpectError
	random( 10, 0.5, 5 ); // $ExpectError
	random( 10, 0.5, true ); // $ExpectError
	random( 10, 0.5, false ); // $ExpectError
	random( 10, 0.5, [] ); // $ExpectError
	random( 10, 0.5, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dtype` option which is not a supported data type...
{
	random( 10, 0.5, { 'dtype': 123 } ); // $ExpectError
	random( 10, 0.5, { 'dtype': 'abc' } ); // $ExpectError
	random( 10, 0.5, { 'dtype': null } ); // $ExpectError
	random( 10, 0.5, { 'dtype': [] } ); // $ExpectError
	random( 10, 0.5, { 'dtype': {} } ); // $ExpectError
	random( 10, 0.5, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	random(); // $ExpectError
	random( 10 ); // $ExpectError
	random( 10, 0.5, {}, {} ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns an array...
{
	const x = zeros( 10, 'float64' );

	random.assign( 0.5, x ); // $ExpectType RandomArray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not a number...
{
	const x = zeros( 10, 'float64' );

	random.assign( '5', x ); // $ExpectError
	random.assign( true, x ); // $ExpectError
	random.assign( false, x ); // $ExpectError
	random.assign( null, x ); // $ExpectError
	random.assign( [], x ); // $ExpectError
	random.assign( {}, x ); // $ExpectError
	random.assign( ( x: number ): number => x, x ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a valid output array...
{
	random.assign( 0.5, '5' ); // $ExpectError
	random.assign( 0.5, 5 ); // $ExpectError
	random.assign( 0.5, true ); // $ExpectError
	random.assign( 0.5, false ); // $ExpectError
	random.assign( 0.5, null ); // $ExpectError
	random.assign( 0.5, {} ); // $ExpectError
	random.assign( 0.5, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( 10, 'float64' );

	random.assign(); // $ExpectError
	random.assign( x ); // $ExpectError
	random.assign( x, 0.5, {} ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	random.factory( 0.5 ); // $ExpectType UnaryFunction
	random.factory( 0.5, { 'copy': false } ); // $ExpectType UnaryFunction

	random.factory(); // $ExpectType BinaryFunction
	random.factory( { 'copy': false } ); // $ExpectType BinaryFunction
}

// The `factory` method returns a function which returns an array...
{
	const fcn1 = random.factory( 0.5 );
	fcn1( 10 ); // $ExpectType RandomArray

	const fcn2 = random.factory();
	fcn2( 10, 0.5 ); // $ExpectType RandomArray
}

// The compiler throws an error if the `factory` method is provided invalid arguments...
{
	random.factory( '5' ); // $ExpectError
	random.factory( true ); // $ExpectError
	random.factory( false ); // $ExpectError
	random.factory( [] ); // $ExpectError
	random.factory( null ); // $ExpectError
	random.factory( ( x: number ): number => x ); // $ExpectError

	random.factory( '5', {} ); // $ExpectError
	random.factory( true, {} ); // $ExpectError
	random.factory( false, {} ); // $ExpectError
	random.factory( [], {} ); // $ExpectError
	random.factory( {}, {} ); // $ExpectError
	random.factory( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not a valid object...
{
	random.factory( null ); // $ExpectError
	random.factory( 0.5, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	random.factory( 0.5, { 'prng': 123 } ); // $ExpectError
	random.factory( 0.5, { 'prng': 'abc' } ); // $ExpectError
	random.factory( 0.5, { 'prng': null } ); // $ExpectError
	random.factory( 0.5, { 'prng': [] } ); // $ExpectError
	random.factory( 0.5, { 'prng': {} } ); // $ExpectError
	random.factory( 0.5, { 'prng': true } ); // $ExpectError

	random.factory( { 'prng': 123 } ); // $ExpectError
	random.factory( { 'prng': 'abc' } ); // $ExpectError
	random.factory( { 'prng': null } ); // $ExpectError
	random.factory( { 'prng': [] } ); // $ExpectError
	random.factory( { 'prng': {} } ); // $ExpectError
	random.factory( { 'prng': true } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	random.factory( 0.5, { 'seed': true } ); // $ExpectError
	random.factory( 0.5, { 'seed': 'abc' } ); // $ExpectError
	random.factory( 0.5, { 'seed': null } ); // $ExpectError
	random.factory( 0.5, { 'seed': [ 'a' ] } ); // $ExpectError
	random.factory( 0.5, { 'seed': {} } ); // $ExpectError
	random.factory( 0.5, { 'seed': ( x: number ): number => x } ); // $ExpectError

	random.factory( { 'seed': true } ); // $ExpectError
	random.factory( { 'seed': 'abc' } ); // $ExpectError
	random.factory( { 'seed': null } ); // $ExpectError
	random.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	random.factory( { 'seed': {} } ); // $ExpectError
	random.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	random.factory( 0.5, { 'state': 123 } ); // $ExpectError
	random.factory( 0.5, { 'state': 'abc' } ); // $ExpectError
	random.factory( 0.5, { 'state': null } ); // $ExpectError
	random.factory( 0.5, { 'state': [] } ); // $ExpectError
	random.factory( 0.5, { 'state': {} } ); // $ExpectError
	random.factory( 0.5, { 'state': true } ); // $ExpectError
	random.factory( 0.5, { 'state': ( x: number ): number => x } ); // $ExpectError

	random.factory( { 'state': 123 } ); // $ExpectError
	random.factory( { 'state': 'abc' } ); // $ExpectError
	random.factory( { 'state': null } ); // $ExpectError
	random.factory( { 'state': [] } ); // $ExpectError
	random.factory( { 'state': {} } ); // $ExpectError
	random.factory( { 'state': true } ); // $ExpectError
	random.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	random.factory( 0.5, { 'copy': 123 } ); // $ExpectError
	random.factory( 0.5, { 'copy': 'abc' } ); // $ExpectError
	random.factory( 0.5, { 'copy': null } ); // $ExpectError
	random.factory( 0.5, { 'copy': [] } ); // $ExpectError
	random.factory( 0.5, { 'copy': {} } ); // $ExpectError
	random.factory( 0.5, { 'copy': ( x: number ): number => x } ); // $ExpectError

	random.factory( { 'copy': 123 } ); // $ExpectError
	random.factory( { 'copy': 'abc' } ); // $ExpectError
	random.factory( { 'copy': null } ); // $ExpectError
	random.factory( { 'copy': [] } ); // $ExpectError
	random.factory( { 'copy': {} } ); // $ExpectError
	random.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `dtype` option which is not a supported data type...
{
	random.factory( 0.5, { 'dtype': 123 } ); // $ExpectError
	random.factory( 0.5, { 'dtype': 'abc' } ); // $ExpectError
	random.factory( 0.5, { 'dtype': null } ); // $ExpectError
	random.factory( 0.5, { 'dtype': [] } ); // $ExpectError
	random.factory( 0.5, { 'dtype': {} } ); // $ExpectError
	random.factory( 0.5, { 'dtype': ( x: number ): number => x } ); // $ExpectError

	random.factory( { 'dtype': 123 } ); // $ExpectError
	random.factory( { 'dtype': 'abc' } ); // $ExpectError
	random.factory( { 'dtype': null } ); // $ExpectError
	random.factory( { 'dtype': [] } ); // $ExpectError
	random.factory( { 'dtype': {} } ); // $ExpectError
	random.factory( { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than three arguments...
{
	random.factory( 0.5, {}, {} ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = random.factory( 0.5 );
	fcn1( '5' ); // $ExpectError
	fcn1( true ); // $ExpectError
	fcn1( false ); // $ExpectError
	fcn1( null ); // $ExpectError
	fcn1( [] ); // $ExpectError
	fcn1( {} ); // $ExpectError
	fcn1( ( x: number ): number => x ); // $ExpectError

	fcn1( '5', {} ); // $ExpectError
	fcn1( true, {} ); // $ExpectError
	fcn1( false, {} ); // $ExpectError
	fcn1( null, {} ); // $ExpectError
	fcn1( [], {} ); // $ExpectError
	fcn1( {}, {} ); // $ExpectError
	fcn1( ( x: number ): number => x, {} ); // $ExpectError

	const fcn2 = random.factory();
	fcn2( true, 0.5 ); // $ExpectError
	fcn2( false, 0.5 ); // $ExpectError
	fcn2( '5', 0.5 ); // $ExpectError
	fcn2( [], 0.5 ); // $ExpectError
	fcn2( {}, 0.5 ); // $ExpectError
	fcn2( ( x: number ): number => x, 0.5 ); // $ExpectError

	fcn2( true, 0.5, {} ); // $ExpectError
	fcn2( false, 0.5, {} ); // $ExpectError
	fcn2( '5', 0.5, {} ); // $ExpectError
	fcn2( [], 0.5, {} ); // $ExpectError
	fcn2( {}, 0.5, {} ); // $ExpectError
	fcn2( ( x: number ): number => x, 0.5, {} ); // $ExpectError

	fcn2( 10, true ); // $ExpectError
	fcn2( 10, false ); // $ExpectError
	fcn2( 10, '5' ); // $ExpectError
	fcn2( 10, [] ); // $ExpectError
	fcn2( 10, {} ); // $ExpectError
	fcn2( 10, ( x: number ): number => x ); // $ExpectError

	fcn2( 10, true, {} ); // $ExpectError
	fcn2( 10, false, {} ); // $ExpectError
	fcn2( 10, '5', {} ); // $ExpectError
	fcn2( 10, [], {} ); // $ExpectError
	fcn2( 10, {}, {} ); // $ExpectError
	fcn2( 10, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided a `dtype` option which is not a supported data type...
{
	const fcn1 = random.factory();
	fcn1( 0.5, { 'dtype': 123 } ); // $ExpectError
	fcn1( 0.5, { 'dtype': 'abc' } ); // $ExpectError
	fcn1( 0.5, { 'dtype': null } ); // $ExpectError
	fcn1( 0.5, { 'dtype': [] } ); // $ExpectError
	fcn1( 0.5, { 'dtype': {} } ); // $ExpectError
	fcn1( 0.5, { 'dtype': ( x: number ): number => x } ); // $ExpectError

	const fcn2 = random.factory( 0.5 );
	fcn2( { 'dtype': 123 } ); // $ExpectError
	fcn2( { 'dtype': 'abc' } ); // $ExpectError
	fcn2( { 'dtype': null } ); // $ExpectError
	fcn2( { 'dtype': [] } ); // $ExpectError
	fcn2( { 'dtype': {} } ); // $ExpectError
	fcn2( { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn1 = random.factory( 0.5 );
	fcn1(); // $ExpectError
	fcn1( 1, 1, 1 ); // $ExpectError

	const fcn2 = random.factory();
	fcn2(); // $ExpectError
	fcn2( 1 ); // $ExpectError
	fcn2( 1, 1, 1, 1 ); // $ExpectError
}
