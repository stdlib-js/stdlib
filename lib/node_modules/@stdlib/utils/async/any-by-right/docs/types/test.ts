/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

import anyByRightAsync = require( './index' );

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
	anyByRightAsync( [ 0, 1, 1 ], isPositive, done ); // $ExpectType void
	anyByRightAsync( [ -1, 1, 2 ], isPositive, done ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	anyByRightAsync( 2, isPositive, done ); // $ExpectError
	anyByRightAsync( false, isPositive, done ); // $ExpectError
	anyByRightAsync( true, isPositive, done ); // $ExpectError
	anyByRightAsync( {}, isPositive, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a predicate argument which is not a predicate function...
{
	anyByRightAsync( [ 1, 2, 3 ], 2, done ); // $ExpectError
	anyByRightAsync( [ 1, 2, 3 ], false, done ); // $ExpectError
	anyByRightAsync( [ 1, 2, 3 ], true, done ); // $ExpectError
	anyByRightAsync( [ 1, 2, 3 ], 'abc', done ); // $ExpectError
	anyByRightAsync( [ 1, 2, 3 ], {}, done ); // $ExpectError
	anyByRightAsync( [ 1, 2, 3 ], [], done ); // $ExpectError
}

// The compiler throws an error if the function is provided a done callback argument which is not a function having a supported signature...
{
	anyByRightAsync( [ 1, 2, 3 ], isPositive, 2 ); // $ExpectError
	anyByRightAsync( [ 1, 2, 3 ], isPositive, false ); // $ExpectError
	anyByRightAsync( [ 1, 2, 3 ], isPositive, true ); // $ExpectError
	anyByRightAsync( [ 1, 2, 3 ], isPositive, 'abc' ); // $ExpectError
	anyByRightAsync( [ 1, 2, 3 ], isPositive, {} ); // $ExpectError
	anyByRightAsync( [ 1, 2, 3 ], isPositive, [] ); // $ExpectError
	anyByRightAsync( [ 1, 2, 3 ], isPositive, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	anyByRightAsync(); // $ExpectError
	anyByRightAsync( [ 1, 2, 3 ] ); // $ExpectError
	anyByRightAsync( [ 1, 2, 3 ], isPositive ); // $ExpectError
	anyByRightAsync( [ 1, 2, 3 ], {}, isPositive, done, {} ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	anyByRightAsync.factory( isPositive ); // $ExpectType FactoryFunction
	anyByRightAsync.factory( { 'series': true }, isPositive ); // $ExpectType FactoryFunction
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	anyByRightAsync.factory( [], isPositive ); // $ExpectError
	anyByRightAsync.factory( 123, isPositive ); // $ExpectError
	anyByRightAsync.factory( 'abc', isPositive ); // $ExpectError
	anyByRightAsync.factory( false, isPositive ); // $ExpectError
	anyByRightAsync.factory( true, isPositive ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a last argument which is not a predicate function...
{
	anyByRightAsync.factory( {} ); // $ExpectError
	anyByRightAsync.factory( true ); // $ExpectError
	anyByRightAsync.factory( false ); // $ExpectError
	anyByRightAsync.factory( {}, 123 ); // $ExpectError
	anyByRightAsync.factory( {}, 'abc' ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = anyByRightAsync.factory( isPositive );
	fcn1( 12, done ); // $ExpectError
	fcn1( true, done ); // $ExpectError
	fcn1( false, done ); // $ExpectError
	fcn1( {}, done ); // $ExpectError

	fcn1( [ 1, 2, 3 ], 12 ); // $ExpectError
	fcn1( [ 1, 2, 3 ], true ); // $ExpectError
	fcn1( [ 1, 2, 3 ], false ); // $ExpectError
	fcn1( [ 1, 2, 3 ], '5' ); // $ExpectError
	fcn1( [ 1, 2, 3 ], {} ); // $ExpectError
	fcn1( [ 1, 2, 3 ], [] ); // $ExpectError
	fcn1( [ 1, 2, 3 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn1 = anyByRightAsync.factory( isPositive );
	fcn1(); // $ExpectError
	fcn1( [ 1, 2, 3 ] ); // $ExpectError
	fcn1( [ 1, 2, 3 ], done, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `limit` option which is not a number...
{
	anyByRightAsync.factory( { 'limit': '12' }, isPositive ); // $ExpectError
	anyByRightAsync.factory( { 'limit': true }, isPositive ); // $ExpectError
	anyByRightAsync.factory( { 'limit': false }, isPositive ); // $ExpectError
	anyByRightAsync.factory( { 'limit': {} }, isPositive ); // $ExpectError
	anyByRightAsync.factory( { 'limit': [] }, isPositive ); // $ExpectError
	anyByRightAsync.factory( { 'limit': ( x: number ): number => x }, isPositive ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `series` option which is not a boolean...
{
	anyByRightAsync.factory( { 'series': '12' }, isPositive ); // $ExpectError
	anyByRightAsync.factory( { 'series': 12 }, isPositive ); // $ExpectError
	anyByRightAsync.factory( { 'series': {} }, isPositive ); // $ExpectError
	anyByRightAsync.factory( { 'series': [] }, isPositive ); // $ExpectError
	anyByRightAsync.factory( { 'series': ( x: number ): number => x }, isPositive ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an invalid number of arguments...
{
	anyByRightAsync.factory(); // $ExpectError
	anyByRightAsync.factory( {}, isPositive, {} ); // $ExpectError
}
