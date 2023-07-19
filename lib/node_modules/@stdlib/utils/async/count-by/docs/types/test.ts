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

import countByAsync = require( './index' );

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
	countByAsync( [ 3000, 2500, 1000 ], indicator, done ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	countByAsync( 2, indicator, done ); // $ExpectError
	countByAsync( false, indicator, done ); // $ExpectError
	countByAsync( true, indicator, done ); // $ExpectError
	countByAsync( {}, indicator, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an indicator function...
{
	countByAsync( [ 3000, 2500, 1000 ], 2, done ); // $ExpectError
	countByAsync( [ 3000, 2500, 1000 ], false, done ); // $ExpectError
	countByAsync( [ 3000, 2500, 1000 ], true, done ); // $ExpectError
	countByAsync( [ 3000, 2500, 1000 ], 'abc', done ); // $ExpectError
	countByAsync( [ 3000, 2500, 1000 ], {}, done ); // $ExpectError
	countByAsync( [ 3000, 2500, 1000 ], [], done ); // $ExpectError
}

// The compiler throws an error if the function is provided a done callback argument which is not a function having a supported signature...
{
	countByAsync( [ 3000, 2500, 1000 ], indicator, 2 ); // $ExpectError
	countByAsync( [ 3000, 2500, 1000 ], indicator, false ); // $ExpectError
	countByAsync( [ 3000, 2500, 1000 ], indicator, true ); // $ExpectError
	countByAsync( [ 3000, 2500, 1000 ], indicator, 'abc' ); // $ExpectError
	countByAsync( [ 3000, 2500, 1000 ], indicator, {} ); // $ExpectError
	countByAsync( [ 3000, 2500, 1000 ], indicator, [] ); // $ExpectError
	countByAsync( [ 3000, 2500, 1000 ], indicator, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	countByAsync( [ 3000, 2500, 1000 ], [], indicator, done ); // $ExpectError
	countByAsync( [ 3000, 2500, 1000 ], 123, indicator, done ); // $ExpectError
	countByAsync( [ 3000, 2500, 1000 ], 'abc', indicator, done ); // $ExpectError
	countByAsync( [ 3000, 2500, 1000 ], false, indicator, done ); // $ExpectError
	countByAsync( [ 3000, 2500, 1000 ], true, indicator, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a `limit` option which is not a number...
{
	countByAsync( [ 3000, 2500, 1000 ], { 'limit': '12' }, indicator, done ); // $ExpectError
	countByAsync( [ 3000, 2500, 1000 ], { 'limit': true }, indicator, done ); // $ExpectError
	countByAsync( [ 3000, 2500, 1000 ], { 'limit': false }, indicator, done ); // $ExpectError
	countByAsync( [ 3000, 2500, 1000 ], { 'limit': {} }, indicator, done ); // $ExpectError
	countByAsync( [ 3000, 2500, 1000 ], { 'limit': [] }, indicator, done ); // $ExpectError
	countByAsync( [ 3000, 2500, 1000 ], { 'limit': ( x: number ): number => x }, indicator, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a `series` option which is not a boolean...
{
	countByAsync( [ 3000, 2500, 1000 ], { 'series': '12' }, indicator, done ); // $ExpectError
	countByAsync( [ 3000, 2500, 1000 ], { 'series': 12 }, indicator, done ); // $ExpectError
	countByAsync( [ 3000, 2500, 1000 ], { 'series': {} }, indicator, done ); // $ExpectError
	countByAsync( [ 3000, 2500, 1000 ], { 'series': [] }, indicator, done ); // $ExpectError
	countByAsync( [ 3000, 2500, 1000 ], { 'series': ( x: number ): number => x }, indicator, done ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	countByAsync(); // $ExpectError
	countByAsync( [ 3000, 2500, 1000 ] ); // $ExpectError
	countByAsync( [ 3000, 2500, 1000 ], indicator ); // $ExpectError
	countByAsync( [ 3000, 2500, 1000 ], {}, indicator, done, {} ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	countByAsync.factory( indicator ); // $ExpectType FactoryFunction
	countByAsync.factory( { 'series': true }, indicator ); // $ExpectType FactoryFunction
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	countByAsync.factory( [], indicator ); // $ExpectError
	countByAsync.factory( 123, indicator ); // $ExpectError
	countByAsync.factory( 'abc', indicator ); // $ExpectError
	countByAsync.factory( false, indicator ); // $ExpectError
	countByAsync.factory( true, indicator ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a last argument which is not an indicator function...
{
	countByAsync.factory( {} ); // $ExpectError
	countByAsync.factory( true ); // $ExpectError
	countByAsync.factory( false ); // $ExpectError
	countByAsync.factory( {}, 123 ); // $ExpectError
	countByAsync.factory( {}, 'abc' ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = countByAsync.factory( indicator );
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
	const fcn1 = countByAsync.factory( indicator );
	fcn1(); // $ExpectError
	fcn1( [ 3000, 2500, 1000 ] ); // $ExpectError
	fcn1( [ 3000, 2500, 1000 ], done, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `limit` option which is not a number...
{
	countByAsync.factory( { 'limit': '12' }, indicator ); // $ExpectError
	countByAsync.factory( { 'limit': true }, indicator ); // $ExpectError
	countByAsync.factory( { 'limit': false }, indicator ); // $ExpectError
	countByAsync.factory( { 'limit': {} }, indicator ); // $ExpectError
	countByAsync.factory( { 'limit': [] }, indicator ); // $ExpectError
	countByAsync.factory( { 'limit': ( x: number ): number => x }, indicator ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `series` option which is not a boolean...
{
	countByAsync.factory( { 'series': '12' }, indicator ); // $ExpectError
	countByAsync.factory( { 'series': 12 }, indicator ); // $ExpectError
	countByAsync.factory( { 'series': {} }, indicator ); // $ExpectError
	countByAsync.factory( { 'series': [] }, indicator ); // $ExpectError
	countByAsync.factory( { 'series': ( x: number ): number => x }, indicator ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an invalid number of arguments...
{
	countByAsync.factory(); // $ExpectError
	countByAsync.factory( {}, indicator, {} ); // $ExpectError
}
