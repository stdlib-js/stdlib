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

import someByAsync = require( './index' );

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
	someByAsync( [ 0, 1, 1 ], 2, isPositive, done ); // $ExpectType void
	someByAsync( [ -1, -1, 2 ], 2, isPositive, done ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	someByAsync( 2, 2, isPositive, done ); // $ExpectError
	someByAsync( false, 2, isPositive, done ); // $ExpectError
	someByAsync( true, 2, isPositive, done ); // $ExpectError
	someByAsync( {}, 2, isPositive, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	someByAsync( [ 0, 1, 1 ], 'abc', isPositive, done ); // $ExpectError
	someByAsync( [ 0, 1, 1 ], true, isPositive, done ); // $ExpectError
	someByAsync( [ 0, 1, 1 ], false, isPositive, done ); // $ExpectError
	someByAsync( [ 0, 1, 1 ], [], isPositive, done ); // $ExpectError
	someByAsync( [ 0, 1, 1 ], {}, isPositive, done ); // $ExpectError
	someByAsync( [ 0, 1, 1 ], null, isPositive, done ); // $ExpectError
	someByAsync( [ 0, 1, 1 ], ( x: number ): number => x, isPositive, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a predicate argument which is not a predicate function...
{
	someByAsync( [ 1, 2, 3 ], 2, 2, done ); // $ExpectError
	someByAsync( [ 1, 2, 3 ], 2, false, done ); // $ExpectError
	someByAsync( [ 1, 2, 3 ], 2, true, done ); // $ExpectError
	someByAsync( [ 1, 2, 3 ], 2, 'abc', done ); // $ExpectError
	someByAsync( [ 1, 2, 3 ], 2, {}, done ); // $ExpectError
	someByAsync( [ 1, 2, 3 ], 2, [], done ); // $ExpectError
}

// The compiler throws an error if the function is provided a done callback argument which is not a function having a supported signature...
{
	someByAsync( [ 1, 2, 3 ], 2, isPositive, 2 ); // $ExpectError
	someByAsync( [ 1, 2, 3 ], 2, isPositive, false ); // $ExpectError
	someByAsync( [ 1, 2, 3 ], 2, isPositive, true ); // $ExpectError
	someByAsync( [ 1, 2, 3 ], 2, isPositive, 'abc' ); // $ExpectError
	someByAsync( [ 1, 2, 3 ], 2, isPositive, {} ); // $ExpectError
	someByAsync( [ 1, 2, 3 ], 2, isPositive, [] ); // $ExpectError
	someByAsync( [ 1, 2, 3 ], 2, isPositive, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	someByAsync(); // $ExpectError
	someByAsync( [ 1, 2, 3 ] ); // $ExpectError
	someByAsync( [ 1, 2, 3 ], 2 ); // $ExpectError
	someByAsync( [ 1, 2, 3 ], 2, isPositive ); // $ExpectError
	someByAsync( [ 1, 2, 3 ], 2, {}, isPositive, done, {} ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	someByAsync.factory( isPositive ); // $ExpectType FactoryFunction
	someByAsync.factory( { 'series': true }, isPositive ); // $ExpectType FactoryFunction
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	someByAsync.factory( [], isPositive ); // $ExpectError
	someByAsync.factory( 123, isPositive ); // $ExpectError
	someByAsync.factory( 'abc', isPositive ); // $ExpectError
	someByAsync.factory( false, isPositive ); // $ExpectError
	someByAsync.factory( true, isPositive ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a last argument which is not a predicate function...
{
	someByAsync.factory( {} ); // $ExpectError
	someByAsync.factory( true ); // $ExpectError
	someByAsync.factory( false ); // $ExpectError
	someByAsync.factory( {}, 123 ); // $ExpectError
	someByAsync.factory( {}, 'abc' ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = someByAsync.factory( isPositive );
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
	const fcn1 = someByAsync.factory( isPositive );
	fcn1(); // $ExpectError
	fcn1( [ 1, 2, 3 ] ); // $ExpectError
	fcn1( [ 1, 2, 3 ], 2 ); // $ExpectError
	fcn1( [ 1, 2, 3 ], 2, done, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `limit` option which is not a number...
{
	someByAsync.factory( { 'limit': '12' }, isPositive ); // $ExpectError
	someByAsync.factory( { 'limit': true }, isPositive ); // $ExpectError
	someByAsync.factory( { 'limit': false }, isPositive ); // $ExpectError
	someByAsync.factory( { 'limit': {} }, isPositive ); // $ExpectError
	someByAsync.factory( { 'limit': [] }, isPositive ); // $ExpectError
	someByAsync.factory( { 'limit': ( x: number ): number => x }, isPositive ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `series` option which is not a boolean...
{
	someByAsync.factory( { 'series': '12' }, isPositive ); // $ExpectError
	someByAsync.factory( { 'series': 12 }, isPositive ); // $ExpectError
	someByAsync.factory( { 'series': {} }, isPositive ); // $ExpectError
	someByAsync.factory( { 'series': [] }, isPositive ); // $ExpectError
	someByAsync.factory( { 'series': ( x: number ): number => x }, isPositive ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an invalid number of arguments...
{
	someByAsync.factory(); // $ExpectError
	someByAsync.factory( {}, isPositive, {} ); // $ExpectError
}
