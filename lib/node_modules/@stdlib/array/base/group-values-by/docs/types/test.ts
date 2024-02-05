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

import groupValuesBy = require( './index' );

/**
* Indicator function.
*
* @param v - value
* @returns result
*/
function indicator( v: string ): string {
	return v[ 0 ];
}


// TESTS //

// The function returns group results...
{
	const x = [ 'foo', 'bar' ];

	groupValuesBy( x, indicator ); // $ExpectType ValuesResults<Key, string>
}

// The compiler throws an error if the function is provided a first argument which is not an array...
{
	groupValuesBy( 5, indicator ); // $ExpectError
	groupValuesBy( true, indicator ); // $ExpectError
	groupValuesBy( false, indicator ); // $ExpectError
	groupValuesBy( null, indicator ); // $ExpectError
	groupValuesBy( void 0, indicator ); // $ExpectError
	groupValuesBy( {}, indicator ); // $ExpectError
	groupValuesBy( ( x: number ): number => x, indicator ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a valid function...
{
	const x = [ 'foo', 'bar' ];

	groupValuesBy( x, '5' ); // $ExpectError
	groupValuesBy( x, 5 ); // $ExpectError
	groupValuesBy( x, true ); // $ExpectError
	groupValuesBy( x, false ); // $ExpectError
	groupValuesBy( x, null ); // $ExpectError
	groupValuesBy( x, void 0 ); // $ExpectError
	groupValuesBy( x, {} ); // $ExpectError
	groupValuesBy( x, [] ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 'foo', 'bar' ];

	groupValuesBy(); // $ExpectError
	groupValuesBy( x ); // $ExpectError
	groupValuesBy( x, indicator, {}, {} ); // $ExpectError
}
