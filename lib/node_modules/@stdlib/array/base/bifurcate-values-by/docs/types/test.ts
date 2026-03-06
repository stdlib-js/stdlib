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

import bifurcateValuesBy = require( './index' );

/**
* Predicate function.
*
* @param v - value
* @returns result
*/
function predicate( v: string ): boolean {
	return v[ 0 ] === 'b';
}


// TESTS //

// The function returns group results...
{
	const x = [ 'foo', 'bar' ];

	bifurcateValuesBy( x, predicate ); // $ExpectType ValuesResults<string>
}

// The compiler throws an error if the function is provided a first argument which is not an array...
{
	bifurcateValuesBy( 5, predicate ); // $ExpectError
	bifurcateValuesBy( true, predicate ); // $ExpectError
	bifurcateValuesBy( false, predicate ); // $ExpectError
	bifurcateValuesBy( null, predicate ); // $ExpectError
	bifurcateValuesBy( void 0, predicate ); // $ExpectError
	bifurcateValuesBy( {}, predicate ); // $ExpectError
	bifurcateValuesBy( ( x: number ): number => x, predicate ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a valid function...
{
	const x = [ 'foo', 'bar' ];

	bifurcateValuesBy( x, '5' ); // $ExpectError
	bifurcateValuesBy( x, 5 ); // $ExpectError
	bifurcateValuesBy( x, true ); // $ExpectError
	bifurcateValuesBy( x, false ); // $ExpectError
	bifurcateValuesBy( x, null ); // $ExpectError
	bifurcateValuesBy( x, void 0 ); // $ExpectError
	bifurcateValuesBy( x, {} ); // $ExpectError
	bifurcateValuesBy( x, [] ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 'foo', 'bar' ];

	bifurcateValuesBy(); // $ExpectError
	bifurcateValuesBy( x ); // $ExpectError
	bifurcateValuesBy( x, predicate, {}, {} ); // $ExpectError
}
