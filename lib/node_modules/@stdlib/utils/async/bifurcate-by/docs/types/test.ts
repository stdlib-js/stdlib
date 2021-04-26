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

import bifurcateByAsync = require( './index' );

const isPositive = ( v: number ): boolean => {
	return ( v > 0 );
};

const done = ( error: Error | null, result: Array<Array<any>> ) => {
	if ( error ) {
		throw error;
	}
	if ( result === void 0 ) {
		throw new Error( '`result` is missing.' );
	}
};


// TESTS //

// The function returns void...
{
	bifurcateByAsync( [ 0, 1, 1 ], isPositive, done ); // $ExpectType void
	bifurcateByAsync( [ -1, 1, 2 ], isPositive, done ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	bifurcateByAsync( 2, isPositive, done ); // $ExpectError
	bifurcateByAsync( false, isPositive, done ); // $ExpectError
	bifurcateByAsync( true, isPositive, done ); // $ExpectError
	bifurcateByAsync( {}, isPositive, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a predicate argument which is not a predicate function...
{
	bifurcateByAsync( [ 1, -2, 3 ], 2, done ); // $ExpectError
	bifurcateByAsync( [ 1, -2, 3 ], false, done ); // $ExpectError
	bifurcateByAsync( [ 1, -2, 3 ], true, done ); // $ExpectError
	bifurcateByAsync( [ 1, -2, 3 ], 'abc', done ); // $ExpectError
	bifurcateByAsync( [ 1, -2, 3 ], {}, done ); // $ExpectError
	bifurcateByAsync( [ 1, -2, 3 ], [], done ); // $ExpectError
}

// The compiler throws an error if the function is provided a done callback argument which is not a function having a supported signature...
{
	bifurcateByAsync( [ 1, -2, 3 ], isPositive, 2 ); // $ExpectError
	bifurcateByAsync( [ 1, -2, 3 ], isPositive, false ); // $ExpectError
	bifurcateByAsync( [ 1, -2, 3 ], isPositive, true ); // $ExpectError
	bifurcateByAsync( [ 1, -2, 3 ], isPositive, 'abc' ); // $ExpectError
	bifurcateByAsync( [ 1, -2, 3 ], isPositive, {} ); // $ExpectError
	bifurcateByAsync( [ 1, -2, 3 ], isPositive, [] ); // $ExpectError
	bifurcateByAsync( [ 1, -2, 3 ], isPositive, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	bifurcateByAsync(); // $ExpectError
	bifurcateByAsync( [ 1, -2, 3 ] ); // $ExpectError
	bifurcateByAsync( [ 1, -2, 3 ], isPositive ); // $ExpectError
	bifurcateByAsync( [ 1, -2, 3 ], {}, isPositive, done, {} ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	bifurcateByAsync.factory( isPositive ); // $ExpectType FactoryFunction
	bifurcateByAsync.factory( { 'series': true }, isPositive ); // $ExpectType FactoryFunction
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	bifurcateByAsync.factory( [], isPositive ); // $ExpectError
	bifurcateByAsync.factory( 123, isPositive ); // $ExpectError
	bifurcateByAsync.factory( 'abc', isPositive ); // $ExpectError
	bifurcateByAsync.factory( false, isPositive ); // $ExpectError
	bifurcateByAsync.factory( true, isPositive ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a last argument which is not a predicate function...
{
	bifurcateByAsync.factory( {} ); // $ExpectError
	bifurcateByAsync.factory( true ); // $ExpectError
	bifurcateByAsync.factory( false ); // $ExpectError
	bifurcateByAsync.factory( {}, 123 ); // $ExpectError
	bifurcateByAsync.factory( {}, 'abc' ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = bifurcateByAsync.factory( isPositive );
	fcn1( 12, done ); // $ExpectError
	fcn1( true, done ); // $ExpectError
	fcn1( false, done ); // $ExpectError
	fcn1( {}, done ); // $ExpectError

	fcn1( [ 1, -2, 3 ], 12 ); // $ExpectError
	fcn1( [ 1, -2, 3 ], true ); // $ExpectError
	fcn1( [ 1, -2, 3 ], false ); // $ExpectError
	fcn1( [ 1, -2, 3 ], '5' ); // $ExpectError
	fcn1( [ 1, -2, 3 ], {} ); // $ExpectError
	fcn1( [ 1, -2, 3 ], [] ); // $ExpectError
	fcn1( [ 1, -2, 3 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn1 = bifurcateByAsync.factory( isPositive );
	fcn1(); // $ExpectError
	fcn1( [ 1, -2, 3 ] ); // $ExpectError
	fcn1( [ 1, -2, 3 ], done, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `limit` option which is not a number...
{
	bifurcateByAsync.factory( { 'limit': '12' }, isPositive ); // $ExpectError
	bifurcateByAsync.factory( { 'limit': true }, isPositive ); // $ExpectError
	bifurcateByAsync.factory( { 'limit': false }, isPositive ); // $ExpectError
	bifurcateByAsync.factory( { 'limit': {} }, isPositive ); // $ExpectError
	bifurcateByAsync.factory( { 'limit': [] }, isPositive ); // $ExpectError
	bifurcateByAsync.factory( { 'limit': ( x: number ): number => x }, isPositive ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `series` option which is not a boolean...
{
	bifurcateByAsync.factory( { 'series': '12' }, isPositive ); // $ExpectError
	bifurcateByAsync.factory( { 'series': 12 }, isPositive ); // $ExpectError
	bifurcateByAsync.factory( { 'series': {} }, isPositive ); // $ExpectError
	bifurcateByAsync.factory( { 'series': [] }, isPositive ); // $ExpectError
	bifurcateByAsync.factory( { 'series': ( x: number ): number => x }, isPositive ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `returns` option which is not `*`, `values`, or `indices`...
{
	bifurcateByAsync.factory( { 'returns': '12' }, isPositive ); // $ExpectError
	bifurcateByAsync.factory( { 'returns': 12 }, isPositive ); // $ExpectError
	bifurcateByAsync.factory( { 'returns': true }, isPositive ); // $ExpectError
	bifurcateByAsync.factory( { 'returns': false }, isPositive ); // $ExpectError
	bifurcateByAsync.factory( { 'returns': {} }, isPositive ); // $ExpectError
	bifurcateByAsync.factory( { 'returns': [] }, isPositive ); // $ExpectError
	bifurcateByAsync.factory( { 'returns': ( x: number ): number => x }, isPositive ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an invalid number of arguments...
{
	bifurcateByAsync.factory(); // $ExpectError
	bifurcateByAsync.factory( {}, isPositive, {} ); // $ExpectError
}
