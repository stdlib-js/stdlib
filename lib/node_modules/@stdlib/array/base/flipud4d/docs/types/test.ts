/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import flipud4d = require( './index' );


// TESTS //

// The function returns a nested array...
{
	const x = [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ];

	flipud4d( x ); // $ExpectType Array4D<number>
}

// The compiler throws an error if the function is provided a first argument which is not a nested array...
{
	flipud4d( 'abc' ); // $ExpectError
	flipud4d( 1 ); // $ExpectError
	flipud4d( true ); // $ExpectError
	flipud4d( false ); // $ExpectError
	flipud4d( null ); // $ExpectError
	flipud4d( {} ); // $ExpectError
	flipud4d( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ];

	flipud4d(); // $ExpectError
	flipud4d( x, 2 ); // $ExpectError
}
