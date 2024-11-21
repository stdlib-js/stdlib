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

import minstd = require( './index' );


// TESTS //

// The function returns a number...
{
	minstd(); // $ExpectType number
}

// The compiler throws an error if the function is provided any arguments...
{
	minstd( true ); // $ExpectError
	minstd( 2, 3 ); // $ExpectError
}

// Attached to main export is a `normalized` method which returns a number...
{
	minstd.normalized(); // $ExpectType number
}

// The compiler throws an error if the `normalized` method is provided any number of arguments...
{
	minstd.normalized( true ); // $ExpectError
	minstd.normalized( 123 ); // $ExpectError
	minstd.normalized( 'abc' ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	minstd.factory(); // $ExpectType NullaryFunction
	minstd.factory( { 'copy': false } ); // $ExpectType NullaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn = minstd.factory();
	fcn(); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided any number of arguments...
{
	const fcn = minstd.factory();
	fcn( 1 ); // $ExpectError
	fcn( 2, 1 ); // $ExpectError
	fcn( 2, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	minstd.factory( null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	minstd.factory( { 'seed': true } ); // $ExpectError
	minstd.factory( { 'seed': 'abc' } ); // $ExpectError
	minstd.factory( { 'seed': null } ); // $ExpectError
	minstd.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	minstd.factory( { 'seed': {} } ); // $ExpectError
	minstd.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	minstd.factory( { 'state': 123 } ); // $ExpectError
	minstd.factory( { 'state': 'abc' } ); // $ExpectError
	minstd.factory( { 'state': null } ); // $ExpectError
	minstd.factory( { 'state': [] } ); // $ExpectError
	minstd.factory( { 'state': {} } ); // $ExpectError
	minstd.factory( { 'state': true ); // $ExpectError
	minstd.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	minstd.factory( { 'copy': 123 } ); // $ExpectError
	minstd.factory( { 'copy': 'abc' } ); // $ExpectError
	minstd.factory( { 'copy': null } ); // $ExpectError
	minstd.factory( { 'copy': [] } ); // $ExpectError
	minstd.factory( { 'copy': {} } ); // $ExpectError
	minstd.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than one argument...
{
	minstd.factory( {}, 2 ); // $ExpectError
}
