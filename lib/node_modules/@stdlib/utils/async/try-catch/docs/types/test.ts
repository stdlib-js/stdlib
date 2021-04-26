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
import trycatchAsync = require( './index' );

const x = ( clbk: Function ) => {
	if ( randu() > 0.5 ) {
		return clbk( null, 1.0 );
	}
	clbk( new Error( 'oops' ) );
};

const done = ( error: Error | null, result: any ) => {
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
	trycatchAsync( x, -1, done ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a function having a supported signature...
{
	trycatchAsync( 2, -1, done ); // $ExpectError
	trycatchAsync( false, -1, done ); // $ExpectError
	trycatchAsync( true, -1, done ); // $ExpectError
	trycatchAsync( 'abc', -1, done ); // $ExpectError
	trycatchAsync( {}, -1, done ); // $ExpectError
	trycatchAsync( [], -1, done ); // $ExpectError
	trycatchAsync( ( x: number ): number => x, -1, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a callback function...
{
	trycatchAsync( x, -1, 2 ); // $ExpectError
	trycatchAsync( x, -1, false ); // $ExpectError
	trycatchAsync( x, -1, true ); // $ExpectError
	trycatchAsync( x, -1, 'abc' ); // $ExpectError
	trycatchAsync( x, -1, {} ); // $ExpectError
	trycatchAsync( x, -1, [] ); // $ExpectError
	trycatchAsync( x, -1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	trycatchAsync(); // $ExpectError
	trycatchAsync( x ); // $ExpectError
	trycatchAsync( x, -1 ); // $ExpectError
	trycatchAsync( x, -1, done, {} ); // $ExpectError
}
