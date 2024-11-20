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

import randu = require( '@stdlib/random/base/randu' );
import ifelseAsync = require( './index' );

const predicate = ( clbk: Function ): void => {
	clbk( null, randu() > 0.5 );
};

const done = ( error: Error | null, result: number ): void => {
	if ( error ) {
		throw error;
	}
	if ( result === void 0 ) {
		throw new Error( '`result` is missing.' );
	}
};


// TESTS //

// The function does not return a value...
{
	ifelseAsync( predicate, 1, -1, done ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a predicate function...
{
	ifelseAsync( 2, 1, -1, done ); // $ExpectError
	ifelseAsync( false, 1, -1, done ); // $ExpectError
	ifelseAsync( true, 1, -1, done ); // $ExpectError
	ifelseAsync( 'abc', 1, -1, done ); // $ExpectError
	ifelseAsync( {}, 1, -1, done ); // $ExpectError
	ifelseAsync( [], 1, -1, done ); // $ExpectError
	ifelseAsync( ( x: number ): number => x, 1, -1, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a callback function...
{
	ifelseAsync( predicate, 1, -1, 2 ); // $ExpectError
	ifelseAsync( predicate, 1, -1, false ); // $ExpectError
	ifelseAsync( predicate, 1, -1, true ); // $ExpectError
	ifelseAsync( predicate, 1, -1, 'abc' ); // $ExpectError
	ifelseAsync( predicate, 1, -1, {} ); // $ExpectError
	ifelseAsync( predicate, 1, -1, [] ); // $ExpectError
	ifelseAsync( predicate, 1, -1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	ifelseAsync(); // $ExpectError
	ifelseAsync( predicate ); // $ExpectError
	ifelseAsync( predicate, 1 ); // $ExpectError
	ifelseAsync( predicate, 1, -1 ); // $ExpectError
	ifelseAsync( predicate, 1, -1, done, {} ); // $ExpectError
}
