/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import takeMap = require( './index' );

// TESTS //

// The function returns an array...
{
	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	const transform = ( v: number ) => v * 2;

	takeMap( [ 1, 2, 3, 4 ], [ 1, 3 ], 'throw', transform ); // $ExpectType number[]
	takeMap( [ 1, 2, 3, 4 ], [ 1, 3 ], 'normalize', transform ); // $ExpectType any[]
	takeMap( [ 1, 2, 3, 4 ], [ 1, 3 ], 'clamp', transform ); // $ExpectType number[]
	takeMap<string>( [ '1', '2', '3', '4' ], [ 1, 3 ], 'wrap', transform ); // $ExpectType string[]
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object...
{
	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	const transform = ( v: number ) => v * 2;

	takeMap( 1, [ 1, 3 ], 'throw', transform ); // $ExpectError
	takeMap( true, [ 1, 3 ], 'throw', transform ); // $ExpectError
	takeMap( false, [ 1, 3 ], 'throw', transform ); // $ExpectError
	takeMap( null, [ 1, 3 ], 'throw', transform ); // $ExpectError
	takeMap( void 0, [ 1, 3 ], 'throw', transform ); // $ExpectError
	takeMap( {}, [ 1, 3 ], 'throw', transform ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object containing numbers...
{
	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	const transform = ( v: number ) => v * 2;

	takeMap( [], 1, 'throw', transform ); // $ExpectError
	takeMap( [], true, 'throw', transform ); // $ExpectError
	takeMap( [], false, 'throw', transform ); // $ExpectError
	takeMap( [], null, 'throw', transform ); // $ExpectError
	takeMap( [], void 0, 'throw', transform ); // $ExpectError
	takeMap( [], {}, 'throw', transform ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid index mode...
{
	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	const transform = ( v: number ) => v * 2;

	takeMap( [], [ 1, 3 ], '1', transform ); // $ExpectError
	takeMap( [], [ 1, 3 ], 1, transform ); // $ExpectError
	takeMap( [], [ 1, 3 ], true, transform ); // $ExpectError
	takeMap( [], [ 1, 3 ], false, transform ); // $ExpectError
	takeMap( [], [ 1, 3 ], null, transform ); // $ExpectError
	takeMap( [], [ 1, 3 ], void 0, transform ); // $ExpectError
	takeMap( [], [ 1, 3 ], {}, transform ); // $ExpectError
	takeMap( [], [ 1, 3 ], [], transform ); // $ExpectError
	takeMap( [], [ 1, 3 ], ( x: number ): number => x, transform ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	const transform = ( v: number ) => v * 2;

	takeMap(); // $ExpectError
	takeMap( [], [] ); // $ExpectError
	takeMap( [], [], 'throw' ); // $ExpectError
	takeMap( [], [], 'throw', transform, {} ); // $ExpectError
}
