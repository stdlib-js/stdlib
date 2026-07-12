/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import groupValuesOnKey = require( './index' );


// TESTS //

// The function returns group results...
{
	const x = [
		{
			'x': 1,
			'y': 2
		}
	];

	groupValuesOnKey( x, 'y' ); // $ExpectType Record<string, { x: number; y: number; }[]>
}

// The compiler throws an error if the function is provided a first argument which is not an array...
{
	groupValuesOnKey( 5, 'y' ); // $ExpectError
	groupValuesOnKey( true, 'y' ); // $ExpectError
	groupValuesOnKey( false, 'y' ); // $ExpectError
	groupValuesOnKey( null, 'y' ); // $ExpectError
	groupValuesOnKey( void 0, 'y' ); // $ExpectError
	groupValuesOnKey( {}, 'y' ); // $ExpectError
	groupValuesOnKey( ( x: number ): number => x, 'y' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a valid key...
{
	const x = [
		{
			'x': 1,
			'y': 2
		}
	];

	groupValuesOnKey( x, true ); // $ExpectError
	groupValuesOnKey( x, false ); // $ExpectError
	groupValuesOnKey( x, null ); // $ExpectError
	groupValuesOnKey( x, void 0 ); // $ExpectError
	groupValuesOnKey( x, {} ); // $ExpectError
	groupValuesOnKey( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [
		{
			'x': 1,
			'y': 2
		}
	];

	groupValuesOnKey(); // $ExpectError
	groupValuesOnKey( x ); // $ExpectError
	groupValuesOnKey( x, 'y', {} ); // $ExpectError
}
