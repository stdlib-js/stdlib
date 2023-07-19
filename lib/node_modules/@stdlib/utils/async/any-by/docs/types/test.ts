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

import anyByAsync = require( './index' );

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
	anyByAsync( [ 0, 1, 1 ], isPositive, done ); // $ExpectType void
	anyByAsync( [ -1, 1, 2 ], isPositive, done ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	anyByAsync( 2, isPositive, done ); // $ExpectError
	anyByAsync( false, isPositive, done ); // $ExpectError
	anyByAsync( true, isPositive, done ); // $ExpectError
	anyByAsync( {}, isPositive, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a predicate argument which is not a predicate function...
{
	anyByAsync( [ 1, 2, 3 ], 2, done ); // $ExpectError
	anyByAsync( [ 1, 2, 3 ], false, done ); // $ExpectError
	anyByAsync( [ 1, 2, 3 ], true, done ); // $ExpectError
	anyByAsync( [ 1, 2, 3 ], 'abc', done ); // $ExpectError
	anyByAsync( [ 1, 2, 3 ], {}, done ); // $ExpectError
	anyByAsync( [ 1, 2, 3 ], [], done ); // $ExpectError
}

// The compiler throws an error if the function is provided a done callback argument which is not a function having a supported signature...
{
	anyByAsync( [ 1, 2, 3 ], isPositive, 2 ); // $ExpectError
	anyByAsync( [ 1, 2, 3 ], isPositive, false ); // $ExpectError
	anyByAsync( [ 1, 2, 3 ], isPositive, true ); // $ExpectError
	anyByAsync( [ 1, 2, 3 ], isPositive, 'abc' ); // $ExpectError
	anyByAsync( [ 1, 2, 3 ], isPositive, {} ); // $ExpectError
	anyByAsync( [ 1, 2, 3 ], isPositive, [] ); // $ExpectError
	anyByAsync( [ 1, 2, 3 ], isPositive, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	anyByAsync(); // $ExpectError
	anyByAsync( [ 1, 2, 3 ] ); // $ExpectError
	anyByAsync( [ 1, 2, 3 ], isPositive ); // $ExpectError
	anyByAsync( [ 1, 2, 3 ], {}, isPositive, done, {} ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	anyByAsync.factory( isPositive ); // $ExpectType FactoryFunction
	anyByAsync.factory( { 'series': true }, isPositive ); // $ExpectType FactoryFunction
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	anyByAsync.factory( [], isPositive ); // $ExpectError
	anyByAsync.factory( 123, isPositive ); // $ExpectError
	anyByAsync.factory( 'abc', isPositive ); // $ExpectError
	anyByAsync.factory( false, isPositive ); // $ExpectError
	anyByAsync.factory( true, isPositive ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a last argument which is not a predicate function...
{
	anyByAsync.factory( {} ); // $ExpectError
	anyByAsync.factory( true ); // $ExpectError
	anyByAsync.factory( false ); // $ExpectError
	anyByAsync.factory( {}, 123 ); // $ExpectError
	anyByAsync.factory( {}, 'abc' ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = anyByAsync.factory( isPositive );
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
	const fcn1 = anyByAsync.factory( isPositive );
	fcn1(); // $ExpectError
	fcn1( [ 1, 2, 3 ] ); // $ExpectError
	fcn1( [ 1, 2, 3 ], done, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `limit` option which is not a number...
{
	anyByAsync.factory( { 'limit': '12' }, isPositive ); // $ExpectError
	anyByAsync.factory( { 'limit': true }, isPositive ); // $ExpectError
	anyByAsync.factory( { 'limit': false }, isPositive ); // $ExpectError
	anyByAsync.factory( { 'limit': {} }, isPositive ); // $ExpectError
	anyByAsync.factory( { 'limit': [] }, isPositive ); // $ExpectError
	anyByAsync.factory( { 'limit': ( x: number ): number => x }, isPositive ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `series` option which is not a boolean...
{
	anyByAsync.factory( { 'series': '12' }, isPositive ); // $ExpectError
	anyByAsync.factory( { 'series': 12 }, isPositive ); // $ExpectError
	anyByAsync.factory( { 'series': {} }, isPositive ); // $ExpectError
	anyByAsync.factory( { 'series': [] }, isPositive ); // $ExpectError
	anyByAsync.factory( { 'series': ( x: number ): number => x }, isPositive ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an invalid number of arguments...
{
	anyByAsync.factory(); // $ExpectError
	anyByAsync.factory( {}, isPositive, {} ); // $ExpectError
}
