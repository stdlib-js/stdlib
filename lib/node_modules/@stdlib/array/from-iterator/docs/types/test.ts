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

import randu = require( '@stdlib/random/iter/randu' );
import iterator2array = require( './index' );

/**
* Multiplies a value by 10.
*
* @param v - iterated value
* @returns new value
*/
function times10( v: number ): number {
	return v * 10.0;
}


// TESTS //

// The function returns an iterator...
{
	const iter = randu();
	iterator2array( iter ); // $ExpectType Collection
	iterator2array( iter, times10 ); // $ExpectType Collection
	iterator2array( iter, times10, {} ); // $ExpectType Collection
	const out = new Float64Array( 10 );
	iterator2array( iter, out ); // $ExpectType Collection
	iterator2array( iter, out, times10 ); // $ExpectType Collection
	iterator2array( iter, out, times10, {} ); // $ExpectType Collection
}

// The compiler throws an error if the function is provided a first argument which is not an iterator...
{
	iterator2array( 'abc' );  // $ExpectError
	iterator2array( 123 );  // $ExpectError
	iterator2array( true ); // $ExpectError
	iterator2array( false ); // $ExpectError
	iterator2array( {} ); // $ExpectError
	iterator2array( [] ); // $ExpectError
	iterator2array( null ); // $ExpectError
	iterator2array( undefined ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a map function or output array...
{
	const iter = randu();
	iterator2array( iter, 123 ); // $ExpectError
	iterator2array( iter, {} ); // $ExpectError
	iterator2array( iter, true ); // $ExpectError
	iterator2array( iter, false ); // $ExpectError
	iterator2array( iter, null ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a map function (when provided an output array)...
{
	const iter = randu();
	const out = new Float64Array( 10 );
	iterator2array( iter, out, 'abc' ); // $ExpectError
	iterator2array( iter, out, 123 ); // $ExpectError
	iterator2array( iter, out, [] ); // $ExpectError
	iterator2array( iter, out, {} ); // $ExpectError
	iterator2array( iter, out, true ); // $ExpectError
	iterator2array( iter, out, false ); // $ExpectError
	iterator2array( iter, out, null ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const iter = randu();
	iterator2array(); // $ExpectError
	iterator2array( iter, [], times10, {}, {} ); // $ExpectError
}
