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

import everyByAsync = require( './index' );

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
	everyByAsync( [ 0, 1, 1 ], isPositive, done ); // $ExpectType void
	everyByAsync( [ -1, 1, 2 ], isPositive, done ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	everyByAsync( 2, isPositive, done ); // $ExpectError
	everyByAsync( false, isPositive, done ); // $ExpectError
	everyByAsync( true, isPositive, done ); // $ExpectError
	everyByAsync( {}, isPositive, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a predicate argument which is not a predicate function...
{
	everyByAsync( [ 1, 2, 3 ], 2, done ); // $ExpectError
	everyByAsync( [ 1, 2, 3 ], false, done ); // $ExpectError
	everyByAsync( [ 1, 2, 3 ], true, done ); // $ExpectError
	everyByAsync( [ 1, 2, 3 ], 'abc', done ); // $ExpectError
	everyByAsync( [ 1, 2, 3 ], {}, done ); // $ExpectError
	everyByAsync( [ 1, 2, 3 ], [], done ); // $ExpectError
}

// The compiler throws an error if the function is provided a done callback argument which is not a function having a supported signature...
{
	everyByAsync( [ 1, 2, 3 ], isPositive, 2 ); // $ExpectError
	everyByAsync( [ 1, 2, 3 ], isPositive, false ); // $ExpectError
	everyByAsync( [ 1, 2, 3 ], isPositive, true ); // $ExpectError
	everyByAsync( [ 1, 2, 3 ], isPositive, 'abc' ); // $ExpectError
	everyByAsync( [ 1, 2, 3 ], isPositive, {} ); // $ExpectError
	everyByAsync( [ 1, 2, 3 ], isPositive, [] ); // $ExpectError
	everyByAsync( [ 1, 2, 3 ], isPositive, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	everyByAsync(); // $ExpectError
	everyByAsync( [ 1, 2, 3 ] ); // $ExpectError
	everyByAsync( [ 1, 2, 3 ], isPositive ); // $ExpectError
	everyByAsync( [ 1, 2, 3 ], {}, isPositive, done, {} ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	everyByAsync.factory( isPositive ); // $ExpectType FactoryFunction
	everyByAsync.factory( { 'series': true }, isPositive ); // $ExpectType FactoryFunction
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	everyByAsync.factory( [], isPositive ); // $ExpectError
	everyByAsync.factory( 123, isPositive ); // $ExpectError
	everyByAsync.factory( 'abc', isPositive ); // $ExpectError
	everyByAsync.factory( false, isPositive ); // $ExpectError
	everyByAsync.factory( true, isPositive ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a last argument which is not a predicate function...
{
	everyByAsync.factory( {} ); // $ExpectError
	everyByAsync.factory( true ); // $ExpectError
	everyByAsync.factory( false ); // $ExpectError
	everyByAsync.factory( {}, 123 ); // $ExpectError
	everyByAsync.factory( {}, 'abc' ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = everyByAsync.factory( isPositive );
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
	const fcn1 = everyByAsync.factory( isPositive );
	fcn1(); // $ExpectError
	fcn1( [ 1, 2, 3 ] ); // $ExpectError
	fcn1( [ 1, 2, 3 ], done, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `limit` option which is not a number...
{
	everyByAsync.factory( { 'limit': '12' }, isPositive ); // $ExpectError
	everyByAsync.factory( { 'limit': true }, isPositive ); // $ExpectError
	everyByAsync.factory( { 'limit': false }, isPositive ); // $ExpectError
	everyByAsync.factory( { 'limit': {} }, isPositive ); // $ExpectError
	everyByAsync.factory( { 'limit': [] }, isPositive ); // $ExpectError
	everyByAsync.factory( { 'limit': ( x: number ): number => x }, isPositive ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `series` option which is not a boolean...
{
	everyByAsync.factory( { 'series': '12' }, isPositive ); // $ExpectError
	everyByAsync.factory( { 'series': 12 }, isPositive ); // $ExpectError
	everyByAsync.factory( { 'series': {} }, isPositive ); // $ExpectError
	everyByAsync.factory( { 'series': [] }, isPositive ); // $ExpectError
	everyByAsync.factory( { 'series': ( x: number ): number => x }, isPositive ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an invalid number of arguments...
{
	everyByAsync.factory(); // $ExpectError
	everyByAsync.factory( {}, isPositive, {} ); // $ExpectError
}
