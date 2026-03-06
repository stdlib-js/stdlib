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

import random = require( './index' );


// TESTS //

// The function returns an array...
{
	random( 10 ); // $ExpectType RandomArray
	random( 10, {} ); // $ExpectType RandomArray
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	random( '5' ); // $ExpectError
	random( true ); // $ExpectError
	random( false ); // $ExpectError
	random( null ); // $ExpectError
	random( [] ); // $ExpectError
	random( {} ); // $ExpectError
	random( ( x: number ): number => x ); // $ExpectError

	random( '5', {} ); // $ExpectError
	random( true, {} ); // $ExpectError
	random( false, {} ); // $ExpectError
	random( null, {} ); // $ExpectError
	random( [], {} ); // $ExpectError
	random( {}, {} ); // $ExpectError
	random( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not a valid object...
{
	random( 10, '5' ); // $ExpectError
	random( 10, 5 ); // $ExpectError
	random( 10, true ); // $ExpectError
	random( 10, false ); // $ExpectError
	random( 10, [] ); // $ExpectError
	random( 10, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dtype` option which is not a supported data type...
{
	random( 10, { 'dtype': 123 } ); // $ExpectError
	random( 10, { 'dtype': 'abc' } ); // $ExpectError
	random( 10, { 'dtype': null } ); // $ExpectError
	random( 10, { 'dtype': [] } ); // $ExpectError
	random( 10, { 'dtype': {} } ); // $ExpectError
	random( 10, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	random(); // $ExpectError
	random( 10, 2.0 ); // $ExpectError
	random( 10, 2.0, {}, {} ); // $ExpectError
}

// Attached to the main export is a `normalized` method which returns an array...
{
	random.normalized( 10 ); // $ExpectType NormalizedRandomArray
	random.normalized( 10, {} ); // $ExpectType NormalizedRandomArray
}

// The compiler throws an error if the `normalized` method is provided a first argument which is not a number...
{
	random.normalized( '5' ); // $ExpectError
	random.normalized( true ); // $ExpectError
	random.normalized( false ); // $ExpectError
	random.normalized( null ); // $ExpectError
	random.normalized( [] ); // $ExpectError
	random.normalized( {} ); // $ExpectError
	random.normalized( ( x: number ): number => x ); // $ExpectError

	random.normalized( '5', {} ); // $ExpectError
	random.normalized( true, {} ); // $ExpectError
	random.normalized( false, {} ); // $ExpectError
	random.normalized( null, {} ); // $ExpectError
	random.normalized( [], {} ); // $ExpectError
	random.normalized( {}, {} ); // $ExpectError
	random.normalized( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `normalized` method is provided an options argument which is not a valid object...
{
	random.normalized( 10, '5' ); // $ExpectError
	random.normalized( 10, 5 ); // $ExpectError
	random.normalized( 10, true ); // $ExpectError
	random.normalized( 10, false ); // $ExpectError
	random.normalized( 10, [] ); // $ExpectError
	random.normalized( 10, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `normalized` method is provided a `dtype` option which is not a supported data type...
{
	random.normalized( 10, { 'dtype': 123 } ); // $ExpectError
	random.normalized( 10, { 'dtype': 'abc' } ); // $ExpectError
	random.normalized( 10, { 'dtype': null } ); // $ExpectError
	random.normalized( 10, { 'dtype': [] } ); // $ExpectError
	random.normalized( 10, { 'dtype': {} } ); // $ExpectError
	random.normalized( 10, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `normalized` method is provided an unsupported number of arguments...
{
	random.normalized(); // $ExpectError
	random.normalized( 10, 2.0 ); // $ExpectError
	random.normalized( 10, 2.0, {}, {} ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	random.factory(); // $ExpectType UnaryFunction
	random.factory( { 'copy': false } ); // $ExpectType UnaryFunction
}

// The `factory` method returns a function which returns an array...
{
	const fcn1 = random.factory();
	fcn1( 10 ); // $ExpectType RandomArray
}

// The `factory` method returns a function which has a `normalized` method which returns an array...
{
	const fcn1 = random.factory();
	fcn1.normalized( 10 ); // $ExpectType NormalizedRandomArray
}

// The compiler throws an error if the `factory` method is provided an options argument which is not a valid object...
{
	random.factory( null ); // $ExpectError
	random.factory( 2.0 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `name` option which is not a pseudorandom number generator name...
{
	random.factory( { 'name': 123 } ); // $ExpectError
	random.factory( { 'name': 'abc' } ); // $ExpectError
	random.factory( { 'name': null } ); // $ExpectError
	random.factory( { 'name': [] } ); // $ExpectError
	random.factory( { 'name': {} } ); // $ExpectError
	random.factory( { 'name': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	random.factory( { 'seed': true } ); // $ExpectError
	random.factory( { 'seed': 'abc' } ); // $ExpectError
	random.factory( { 'seed': null } ); // $ExpectError
	random.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	random.factory( { 'seed': {} } ); // $ExpectError
	random.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	random.factory( { 'state': 123 } ); // $ExpectError
	random.factory( { 'state': 'abc' } ); // $ExpectError
	random.factory( { 'state': null } ); // $ExpectError
	random.factory( { 'state': [] } ); // $ExpectError
	random.factory( { 'state': {} } ); // $ExpectError
	random.factory( { 'state': true ); // $ExpectError
	random.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	random.factory( { 'copy': 123 } ); // $ExpectError
	random.factory( { 'copy': 'abc' } ); // $ExpectError
	random.factory( { 'copy': null } ); // $ExpectError
	random.factory( { 'copy': [] } ); // $ExpectError
	random.factory( { 'copy': {} } ); // $ExpectError
	random.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `dtype` option which is not a supported data type...
{
	random.factory( { 'dtype': 123 } ); // $ExpectError
	random.factory( { 'dtype': 'abc' } ); // $ExpectError
	random.factory( { 'dtype': null } ); // $ExpectError
	random.factory( { 'dtype': [] } ); // $ExpectError
	random.factory( { 'dtype': {} } ); // $ExpectError
	random.factory( { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than two arguments...
{
	random.factory( {}, {}, {} ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = random.factory();
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
}

// The compiler throws an error if the function returned by the `factory` method is provided a `dtype` option which is not a supported data type...
{
	const fcn1 = random.factory();
	fcn1( { 'dtype': 123 } ); // $ExpectError
	fcn1( { 'dtype': 'abc' } ); // $ExpectError
	fcn1( { 'dtype': null } ); // $ExpectError
	fcn1( { 'dtype': [] } ); // $ExpectError
	fcn1( { 'dtype': {} } ); // $ExpectError
	fcn1( { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn1 = random.factory();
	fcn1(); // $ExpectError
	fcn1( 1, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the` normalized` method of the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = random.factory();
	fcn1.normalized( '5' ); // $ExpectError
	fcn1.normalized( true ); // $ExpectError
	fcn1.normalized( false ); // $ExpectError
	fcn1.normalized( null ); // $ExpectError
	fcn1.normalized( [] ); // $ExpectError
	fcn1.normalized( {} ); // $ExpectError
	fcn1.normalized( ( x: number ): number => x ); // $ExpectError

	fcn1.normalized( '5', {} ); // $ExpectError
	fcn1.normalized( true, {} ); // $ExpectError
	fcn1.normalized( false, {} ); // $ExpectError
	fcn1.normalized( null, {} ); // $ExpectError
	fcn1.normalized( [], {} ); // $ExpectError
	fcn1.normalized( {}, {} ); // $ExpectError
	fcn1.normalized( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `normalized` method of the function returned by the `factory` method is provided a `dtype` option which is not a supported data type...
{
	const fcn1 = random.factory();
	fcn1.normalized( { 'dtype': 123 } ); // $ExpectError
	fcn1.normalized( { 'dtype': 'abc' } ); // $ExpectError
	fcn1.normalized( { 'dtype': null } ); // $ExpectError
	fcn1.normalized( { 'dtype': [] } ); // $ExpectError
	fcn1.normalized( { 'dtype': {} } ); // $ExpectError
	fcn1.normalized( { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `normalized` method of the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn1 = random.factory();
	fcn1.normalized(); // $ExpectError
	fcn1.normalized( 1, 1, 1 ); // $ExpectError
}
