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

import fliplr5d = require( './index' );


// TESTS //

// The function returns a nested array...
{
	const x = [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ];

	fliplr5d( x ); // $ExpectType Array5D<number>
}

// The compiler throws an error if the function is provided a first argument which is not a nested array...
{
	fliplr5d( 'abc' ); // $ExpectError
	fliplr5d( 1 ); // $ExpectError
	fliplr5d( true ); // $ExpectError
	fliplr5d( false ); // $ExpectError
	fliplr5d( null ); // $ExpectError
	fliplr5d( {} ); // $ExpectError
	fliplr5d( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ];

	fliplr5d(); // $ExpectError
	fliplr5d( x, 2 ); // $ExpectError
}
