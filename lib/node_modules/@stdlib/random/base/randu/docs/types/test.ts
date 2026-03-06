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

import randu = require( './index' );


// TESTS //

// The function returns a number...
{
	randu(); // $ExpectType number
}

// The compiler throws an error if the function is provided any arguments...
{
	randu( true ); // $ExpectError
	randu( 2, 3 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	randu.factory(); // $ExpectType NullaryFunction
	randu.factory( { 'copy': false } ); // $ExpectType NullaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn = randu.factory();
	fcn(); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided any number of arguments...
{
	const fcn = randu.factory();
	fcn( 1 ); // $ExpectError
	fcn( 2, 1 ); // $ExpectError
	fcn( 2, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	randu.factory( null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `name` option not matching the name of a supported normal PRNG...
{
	randu.factory( { 'name': 123 } ); // $ExpectError
	randu.factory( { 'name': 'abc' } ); // $ExpectError
	randu.factory( { 'name': null } ); // $ExpectError
	randu.factory( { 'name': [] } ); // $ExpectError
	randu.factory( { 'name': {} } ); // $ExpectError
	randu.factory( { 'name': true ); // $ExpectError
	randu.factory( { 'name': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	randu.factory( { 'seed': true } ); // $ExpectError
	randu.factory( { 'seed': 'abc' } ); // $ExpectError
	randu.factory( { 'seed': null } ); // $ExpectError
	randu.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	randu.factory( { 'seed': {} } ); // $ExpectError
	randu.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	randu.factory( { 'state': 123 } ); // $ExpectError
	randu.factory( { 'state': 'abc' } ); // $ExpectError
	randu.factory( { 'state': null } ); // $ExpectError
	randu.factory( { 'state': [] } ); // $ExpectError
	randu.factory( { 'state': {} } ); // $ExpectError
	randu.factory( { 'state': true ); // $ExpectError
	randu.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	randu.factory( { 'copy': 123 } ); // $ExpectError
	randu.factory( { 'copy': 'abc' } ); // $ExpectError
	randu.factory( { 'copy': null } ); // $ExpectError
	randu.factory( { 'copy': [] } ); // $ExpectError
	randu.factory( { 'copy': {} } ); // $ExpectError
	randu.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than one argument...
{
	randu.factory( {}, 2 ); // $ExpectError
}
