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

import someByRightAsync = require( './index' );

const isPositive = ( v: number ): boolean => {
	return ( v > 0 );
};

const done = ( error: Error | null, bool: boolean ) => {
	if ( error ) {
		throw error;
	}
	if ( bool === void 0 ) {
		throw new Error( '`bool` is not a boolean.' );
	}
};


// TESTS //

// The function returns void...
{
	someByRightAsync( [ 0, 1, 1 ], 2, isPositive, done ); // $ExpectType void
	someByRightAsync( [ -1, -1, 2 ], 2, isPositive, done ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	someByRightAsync( 2, 2, isPositive, done ); // $ExpectError
	someByRightAsync( false, 2, isPositive, done ); // $ExpectError
	someByRightAsync( true, 2, isPositive, done ); // $ExpectError
	someByRightAsync( {}, 2, isPositive, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	someByRightAsync( [ 0, 1, 1 ], 'abc', isPositive, done ); // $ExpectError
	someByRightAsync( [ 0, 1, 1 ], true, isPositive, done ); // $ExpectError
	someByRightAsync( [ 0, 1, 1 ], false, isPositive, done ); // $ExpectError
	someByRightAsync( [ 0, 1, 1 ], [], isPositive, done ); // $ExpectError
	someByRightAsync( [ 0, 1, 1 ], {}, isPositive, done ); // $ExpectError
	someByRightAsync( [ 0, 1, 1 ], null, isPositive, done ); // $ExpectError
	someByRightAsync( [ 0, 1, 1 ], ( x: number ): number => x, isPositive, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a predicate argument which is not a predicate function...
{
	someByRightAsync( [ 1, 2, 3 ], 2, 2, done ); // $ExpectError
	someByRightAsync( [ 1, 2, 3 ], 2, false, done ); // $ExpectError
	someByRightAsync( [ 1, 2, 3 ], 2, true, done ); // $ExpectError
	someByRightAsync( [ 1, 2, 3 ], 2, 'abc', done ); // $ExpectError
	someByRightAsync( [ 1, 2, 3 ], 2, {}, done ); // $ExpectError
	someByRightAsync( [ 1, 2, 3 ], 2, [], done ); // $ExpectError
}

// The compiler throws an error if the function is provided a done callback argument which is not a function having a supported signature...
{
	someByRightAsync( [ 1, 2, 3 ], 2, isPositive, 2 ); // $ExpectError
	someByRightAsync( [ 1, 2, 3 ], 2, isPositive, false ); // $ExpectError
	someByRightAsync( [ 1, 2, 3 ], 2, isPositive, true ); // $ExpectError
	someByRightAsync( [ 1, 2, 3 ], 2, isPositive, 'abc' ); // $ExpectError
	someByRightAsync( [ 1, 2, 3 ], 2, isPositive, {} ); // $ExpectError
	someByRightAsync( [ 1, 2, 3 ], 2, isPositive, [] ); // $ExpectError
	someByRightAsync( [ 1, 2, 3 ], 2, isPositive, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	someByRightAsync(); // $ExpectError
	someByRightAsync( [ 1, 2, 3 ] ); // $ExpectError
	someByRightAsync( [ 1, 2, 3 ], 2 ); // $ExpectError
	someByRightAsync( [ 1, 2, 3 ], 2, isPositive ); // $ExpectError
	someByRightAsync( [ 1, 2, 3 ], 2, {}, isPositive, done, {} ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	someByRightAsync.factory( isPositive ); // $ExpectType FactoryFunction
	someByRightAsync.factory( { 'series': true }, isPositive ); // $ExpectType FactoryFunction
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	someByRightAsync.factory( [], isPositive ); // $ExpectError
	someByRightAsync.factory( 123, isPositive ); // $ExpectError
	someByRightAsync.factory( 'abc', isPositive ); // $ExpectError
	someByRightAsync.factory( false, isPositive ); // $ExpectError
	someByRightAsync.factory( true, isPositive ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a last argument which is not a predicate function...
{
	someByRightAsync.factory( {} ); // $ExpectError
	someByRightAsync.factory( true ); // $ExpectError
	someByRightAsync.factory( false ); // $ExpectError
	someByRightAsync.factory( {}, 123 ); // $ExpectError
	someByRightAsync.factory( {}, 'abc' ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = someByRightAsync.factory( isPositive );
	fcn1( 12, 2, done ); // $ExpectError
	fcn1( true, 2, done ); // $ExpectError
	fcn1( false, 2, done ); // $ExpectError
	fcn1( {}, 2, done ); // $ExpectError

	fcn1( [ 1, 2, 3 ], true, done ); // $ExpectError
	fcn1( [ 1, 2, 3 ], false, done ); // $ExpectError
	fcn1( [ 1, 2, 3 ], '5', done ); // $ExpectError
	fcn1( [ 1, 2, 3 ], {}, done ); // $ExpectError
	fcn1( [ 1, 2, 3 ], [], done ); // $ExpectError
	fcn1( [ 1, 2, 3 ], ( x: number ): number => x, done ); // $ExpectError

	fcn1( [ 1, 2, 3 ], 2, 12 ); // $ExpectError
	fcn1( [ 1, 2, 3 ], 2, true ); // $ExpectError
	fcn1( [ 1, 2, 3 ], 2, false ); // $ExpectError
	fcn1( [ 1, 2, 3 ], 2, '5' ); // $ExpectError
	fcn1( [ 1, 2, 3 ], 2, {} ); // $ExpectError
	fcn1( [ 1, 2, 3 ], 2, [] ); // $ExpectError
	fcn1( [ 1, 2, 3 ], 2, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn1 = someByRightAsync.factory( isPositive );
	fcn1(); // $ExpectError
	fcn1( [ 1, 2, 3 ] ); // $ExpectError
	fcn1( [ 1, 2, 3 ], 2 ); // $ExpectError
	fcn1( [ 1, 2, 3 ], 2, done, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `limit` option which is not a number...
{
	someByRightAsync.factory( { 'limit': '12' }, isPositive ); // $ExpectError
	someByRightAsync.factory( { 'limit': true }, isPositive ); // $ExpectError
	someByRightAsync.factory( { 'limit': false }, isPositive ); // $ExpectError
	someByRightAsync.factory( { 'limit': {} }, isPositive ); // $ExpectError
	someByRightAsync.factory( { 'limit': [] }, isPositive ); // $ExpectError
	someByRightAsync.factory( { 'limit': ( x: number ): number => x }, isPositive ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `series` option which is not a boolean...
{
	someByRightAsync.factory( { 'series': '12' }, isPositive ); // $ExpectError
	someByRightAsync.factory( { 'series': 12 }, isPositive ); // $ExpectError
	someByRightAsync.factory( { 'series': {} }, isPositive ); // $ExpectError
	someByRightAsync.factory( { 'series': [] }, isPositive ); // $ExpectError
	someByRightAsync.factory( { 'series': ( x: number ): number => x }, isPositive ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an invalid number of arguments...
{
	someByRightAsync.factory(); // $ExpectError
	someByRightAsync.factory( {}, isPositive, {} ); // $ExpectError
}
