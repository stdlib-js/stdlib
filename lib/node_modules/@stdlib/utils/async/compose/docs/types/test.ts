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

import composeAsync = require( './index' );

/**
* Function to compose.
*
* @param x - result
* @param next - invoked upon function completion
*/
const a = ( x: number, next: Function ): void => {
	next( null, x * 2 );
};

/**
* Function to compose.
*
* @param x - result
* @param next - invoked upon function completion
*/
const b = ( x: number, next: Function ): void => {
	next( null, x + 3 );
};

/**
* Function to compose.
*
* @param x - result
* @param next - invoked upon function completion
*/
const c = ( x: number, next: Function ): void => {
	next( null, x / 5 );
};


// TESTS //

// The function returns a composite function...
{
	composeAsync( a, b, c ); // $ExpectType CompositeFunction
}

// The compiler throws an error if the function is provided a first argument which is not a function...
{
	composeAsync( '5' ); // $ExpectError
	composeAsync( 5 ); // $ExpectError
	composeAsync( true ); // $ExpectError
	composeAsync( false ); // $ExpectError
	composeAsync( null ); // $ExpectError
	composeAsync( undefined ); // $ExpectError
	composeAsync( [ 1, 2, 3 ] ); // $ExpectError
	composeAsync( {} ); // $ExpectError
}

// The compiler throws an error if the function is provided another argument which is not a function...
{
	composeAsync( a, '5' ); // $ExpectError
	composeAsync( a, true ); // $ExpectError
	composeAsync( a, false ); // $ExpectError
	composeAsync( a, null ); // $ExpectError
	composeAsync( a, [] ); // $ExpectError
	composeAsync( a, {} ); // $ExpectError

	composeAsync( a, b, '5' ); // $ExpectError
	composeAsync( a, b, true ); // $ExpectError
	composeAsync( a, b, false ); // $ExpectError
	composeAsync( a, b, null ); // $ExpectError
	composeAsync( a, b, [] ); // $ExpectError
	composeAsync( a, b, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	composeAsync(); // $ExpectError
	composeAsync( a ); // $ExpectError
}
