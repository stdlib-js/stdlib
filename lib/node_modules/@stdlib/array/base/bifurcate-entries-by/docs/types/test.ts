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

import bifurcateEntriesBy = require( './index' );

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

	bifurcateEntriesBy( x, predicate ); // $ExpectType EntriesResults<string>
}

// The compiler throws an error if the function is provided a first argument which is not an array...
{
	bifurcateEntriesBy( 5, predicate ); // $ExpectError
	bifurcateEntriesBy( true, predicate ); // $ExpectError
	bifurcateEntriesBy( false, predicate ); // $ExpectError
	bifurcateEntriesBy( null, predicate ); // $ExpectError
	bifurcateEntriesBy( void 0, predicate ); // $ExpectError
	bifurcateEntriesBy( {}, predicate ); // $ExpectError
	bifurcateEntriesBy( ( x: number ): number => x, predicate ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a valid function...
{
	const x = [ 'foo', 'bar' ];

	bifurcateEntriesBy( x, '5' ); // $ExpectError
	bifurcateEntriesBy( x, 5 ); // $ExpectError
	bifurcateEntriesBy( x, true ); // $ExpectError
	bifurcateEntriesBy( x, false ); // $ExpectError
	bifurcateEntriesBy( x, null ); // $ExpectError
	bifurcateEntriesBy( x, void 0 ); // $ExpectError
	bifurcateEntriesBy( x, {} ); // $ExpectError
	bifurcateEntriesBy( x, [] ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 'foo', 'bar' ];

	bifurcateEntriesBy(); // $ExpectError
	bifurcateEntriesBy( x ); // $ExpectError
	bifurcateEntriesBy( x, predicate, {}, {} ); // $ExpectError
}
