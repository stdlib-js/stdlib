/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

import graphemeClusters2iteratorRight = require( './index' );

/**
* Transforms a string.
*
* @param v - iterated value
* @returns new value
*/
function transform( v: string ): string {
	return v + v;
}


// TESTS //

// The function returns an iterator...
{
	graphemeClusters2iteratorRight( 'beep' ); // $ExpectType Iterator
	graphemeClusters2iteratorRight( 'beep', transform ); // $ExpectType Iterator
	graphemeClusters2iteratorRight( 'beep', transform, {} ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	graphemeClusters2iteratorRight( 123 );  // $ExpectError
	graphemeClusters2iteratorRight( true ); // $ExpectError
	graphemeClusters2iteratorRight( false ); // $ExpectError
	graphemeClusters2iteratorRight( {} ); // $ExpectError
	graphemeClusters2iteratorRight( null ); // $ExpectError
	graphemeClusters2iteratorRight( undefined ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a map function...
{
	graphemeClusters2iteratorRight( 'beep', 'abc' ); // $ExpectError
	graphemeClusters2iteratorRight( 'beep', 123 ); // $ExpectError
	graphemeClusters2iteratorRight( 'beep', [] ); // $ExpectError
	graphemeClusters2iteratorRight( 'beep', {} ); // $ExpectError
	graphemeClusters2iteratorRight( 'beep', true ); // $ExpectError
	graphemeClusters2iteratorRight( 'beep', false ); // $ExpectError
	graphemeClusters2iteratorRight( 'beep', null ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	graphemeClusters2iteratorRight(); // $ExpectError
	graphemeClusters2iteratorRight( 'beep', transform, {}, 123 ); // $ExpectError
}
