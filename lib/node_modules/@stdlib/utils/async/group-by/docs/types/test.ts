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

import groupByAsync = require( './index' );

const indicator = ( value: number, next: Function ) => {
	next( null, ( value > 2000 ) );
};

const done = ( error: Error | null, result: any ) => {
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
	groupByAsync( [ 3000, 2500, 1000 ], indicator, done ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	groupByAsync( 2, indicator, done ); // $ExpectError
	groupByAsync( false, indicator, done ); // $ExpectError
	groupByAsync( true, indicator, done ); // $ExpectError
	groupByAsync( {}, indicator, done ); // $ExpectError
}

// The compiler throws an error if the function is provided an indicator argument which is not an indicator function...
{
	groupByAsync( [ 3000, 2500, 1000 ], 2, done ); // $ExpectError
	groupByAsync( [ 3000, 2500, 1000 ], false, done ); // $ExpectError
	groupByAsync( [ 3000, 2500, 1000 ], true, done ); // $ExpectError
	groupByAsync( [ 3000, 2500, 1000 ], 'abc', done ); // $ExpectError
	groupByAsync( [ 3000, 2500, 1000 ], {}, done ); // $ExpectError
	groupByAsync( [ 3000, 2500, 1000 ], [], done ); // $ExpectError
}

// The compiler throws an error if the function is provided a done callback argument which is not a function having a supported signature...
{
	groupByAsync( [ 3000, 2500, 1000 ], indicator, 2 ); // $ExpectError
	groupByAsync( [ 3000, 2500, 1000 ], indicator, false ); // $ExpectError
	groupByAsync( [ 3000, 2500, 1000 ], indicator, true ); // $ExpectError
	groupByAsync( [ 3000, 2500, 1000 ], indicator, 'abc' ); // $ExpectError
	groupByAsync( [ 3000, 2500, 1000 ], indicator, {} ); // $ExpectError
	groupByAsync( [ 3000, 2500, 1000 ], indicator, [] ); // $ExpectError
	groupByAsync( [ 3000, 2500, 1000 ], indicator, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	groupByAsync( [ 3000, 2500, 1000 ], [], indicator, done ); // $ExpectError
	groupByAsync( [ 3000, 2500, 1000 ], 123, indicator, done ); // $ExpectError
	groupByAsync( [ 3000, 2500, 1000 ], 'abc', indicator, done ); // $ExpectError
	groupByAsync( [ 3000, 2500, 1000 ], false, indicator, done ); // $ExpectError
	groupByAsync( [ 3000, 2500, 1000 ], true, indicator, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a `limit` option which is not a number...
{
	groupByAsync( [ 3000, 2500, 1000 ], { 'limit': '12' }, indicator, done ); // $ExpectError
	groupByAsync( [ 3000, 2500, 1000 ], { 'limit': true }, indicator, done ); // $ExpectError
	groupByAsync( [ 3000, 2500, 1000 ], { 'limit': false }, indicator, done ); // $ExpectError
	groupByAsync( [ 3000, 2500, 1000 ], { 'limit': {} }, indicator, done ); // $ExpectError
	groupByAsync( [ 3000, 2500, 1000 ], { 'limit': [] }, indicator, done ); // $ExpectError
	groupByAsync( [ 3000, 2500, 1000 ], { 'limit': ( x: number ): number => x }, indicator, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a `series` option which is not a boolean...
{
	groupByAsync( [ 3000, 2500, 1000 ], { 'series': '12' }, indicator, done ); // $ExpectError
	groupByAsync( [ 3000, 2500, 1000 ], { 'series': 12 }, indicator, done ); // $ExpectError
	groupByAsync( [ 3000, 2500, 1000 ], { 'series': {} }, indicator, done ); // $ExpectError
	groupByAsync( [ 3000, 2500, 1000 ], { 'series': [] }, indicator, done ); // $ExpectError
	groupByAsync( [ 3000, 2500, 1000 ], { 'series': ( x: number ): number => x }, indicator, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a `returns` option which is not `values`, `indices`, or `*`...
{
	groupByAsync( [ 3000, 2500, 1000 ], { 'returns': 'abc' }, indicator, done ); // $ExpectError
	groupByAsync( [ 3000, 2500, 1000 ], { 'returns': 12 }, indicator, done ); // $ExpectError
	groupByAsync( [ 3000, 2500, 1000 ], { 'returns': true }, indicator, done ); // $ExpectError
	groupByAsync( [ 3000, 2500, 1000 ], { 'returns': false }, indicator, done ); // $ExpectError
	groupByAsync( [ 3000, 2500, 1000 ], { 'returns': {} }, indicator, done ); // $ExpectError
	groupByAsync( [ 3000, 2500, 1000 ], { 'returns': [] }, indicator, done ); // $ExpectError
	groupByAsync( [ 3000, 2500, 1000 ], { 'returns': ( x: number ): number => x }, indicator, done ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	groupByAsync(); // $ExpectError
	groupByAsync( [ 3000, 2500, 1000 ] ); // $ExpectError
	groupByAsync( [ 3000, 2500, 1000 ], indicator ); // $ExpectError
	groupByAsync( [ 3000, 2500, 1000 ], {}, indicator, done, {} ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	groupByAsync.factory( indicator ); // $ExpectType FactoryFunction
	groupByAsync.factory( { 'series': true }, indicator ); // $ExpectType FactoryFunction
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	groupByAsync.factory( [], indicator ); // $ExpectError
	groupByAsync.factory( 123, indicator ); // $ExpectError
	groupByAsync.factory( 'abc', indicator ); // $ExpectError
	groupByAsync.factory( false, indicator ); // $ExpectError
	groupByAsync.factory( true, indicator ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a last argument which is not an indicator function...
{
	groupByAsync.factory( {} ); // $ExpectError
	groupByAsync.factory( true ); // $ExpectError
	groupByAsync.factory( false ); // $ExpectError
	groupByAsync.factory( {}, 123 ); // $ExpectError
	groupByAsync.factory( {}, 'abc' ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = groupByAsync.factory( indicator );
	fcn1( 12, done ); // $ExpectError
	fcn1( true, done ); // $ExpectError
	fcn1( false, done ); // $ExpectError
	fcn1( {}, done ); // $ExpectError

	fcn1( [ 3000, 2500, 1000 ], 12 ); // $ExpectError
	fcn1( [ 3000, 2500, 1000 ], true ); // $ExpectError
	fcn1( [ 3000, 2500, 1000 ], false ); // $ExpectError
	fcn1( [ 3000, 2500, 1000 ], '5' ); // $ExpectError
	fcn1( [ 3000, 2500, 1000 ], {} ); // $ExpectError
	fcn1( [ 3000, 2500, 1000 ], [] ); // $ExpectError
	fcn1( [ 3000, 2500, 1000 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn1 = groupByAsync.factory( indicator );
	fcn1(); // $ExpectError
	fcn1( [ 3000, 2500, 1000 ] ); // $ExpectError
	fcn1( [ 3000, 2500, 1000 ], done, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `limit` option which is not a number...
{
	groupByAsync.factory( { 'limit': '12' }, indicator ); // $ExpectError
	groupByAsync.factory( { 'limit': true }, indicator ); // $ExpectError
	groupByAsync.factory( { 'limit': false }, indicator ); // $ExpectError
	groupByAsync.factory( { 'limit': {} }, indicator ); // $ExpectError
	groupByAsync.factory( { 'limit': [] }, indicator ); // $ExpectError
	groupByAsync.factory( { 'limit': ( x: number ): number => x }, indicator ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `series` option which is not a boolean...
{
	groupByAsync.factory( { 'series': '12' }, indicator ); // $ExpectError
	groupByAsync.factory( { 'series': 12 }, indicator ); // $ExpectError
	groupByAsync.factory( { 'series': {} }, indicator ); // $ExpectError
	groupByAsync.factory( { 'series': [] }, indicator ); // $ExpectError
	groupByAsync.factory( { 'series': ( x: number ): number => x }, indicator ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `returns` option which is not `values`, `indices`, or `*`...
{
	groupByAsync.factory( { 'returns': 'abc' }, indicator ); // $ExpectError
	groupByAsync.factory( { 'returns': 12 }, indicator ); // $ExpectError
	groupByAsync.factory( { 'returns': true }, indicator ); // $ExpectError
	groupByAsync.factory( { 'returns': false }, indicator ); // $ExpectError
	groupByAsync.factory( { 'returns': {} }, indicator ); // $ExpectError
	groupByAsync.factory( { 'returns': [] }, indicator ); // $ExpectError
	groupByAsync.factory( { 'returns': ( x: number ): number => x }, indicator ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an invalid number of arguments...
{
	groupByAsync.factory(); // $ExpectError
	groupByAsync.factory( {}, indicator, {} ); // $ExpectError
}
