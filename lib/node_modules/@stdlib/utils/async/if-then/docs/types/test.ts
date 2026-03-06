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
import ifthenAsync = require( './index' );

const predicate = ( clbk: Function ) => {
	clbk( null, randu() > 0.5 );
};

const x = ( clbk: Function ) => {
	clbk( null, 1.0 );
};

const y = ( clbk: Function ) => {
	clbk( null, -1.0 );
};

const done = ( error: Error | null, result: number ) => {
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
	ifthenAsync( predicate, x, y, done ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a predicate function...
{
	ifthenAsync( 2, x, y, done ); // $ExpectError
	ifthenAsync( false, x, y, done ); // $ExpectError
	ifthenAsync( true, x, y, done ); // $ExpectError
	ifthenAsync( 'abc', x, y, done ); // $ExpectError
	ifthenAsync( {}, x, y, done ); // $ExpectError
	ifthenAsync( [], x, y, done ); // $ExpectError
	ifthenAsync( ( x: number ): number => x, x, y, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function having a supported signature...
{
	ifthenAsync( predicate, 2, y, done ); // $ExpectError
	ifthenAsync( predicate, false, y, done ); // $ExpectError
	ifthenAsync( predicate, true, y, done ); // $ExpectError
	ifthenAsync( predicate, 'abc', y, done ); // $ExpectError
	ifthenAsync( predicate, {}, y, done ); // $ExpectError
	ifthenAsync( predicate, [], y, done ); // $ExpectError
	ifthenAsync( predicate, ( x: number ): number => x, y, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a function having a supported signature...
{
	ifthenAsync( predicate, x, 2, done ); // $ExpectError
	ifthenAsync( predicate, x, false, done ); // $ExpectError
	ifthenAsync( predicate, x, true, done ); // $ExpectError
	ifthenAsync( predicate, x, 'abc', done ); // $ExpectError
	ifthenAsync( predicate, x, {}, done ); // $ExpectError
	ifthenAsync( predicate, x, [], done ); // $ExpectError
	ifthenAsync( predicate, x, ( x: number ): number => x, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a callback function...
{
	ifthenAsync( predicate, x, y, 2 ); // $ExpectError
	ifthenAsync( predicate, x, y, false ); // $ExpectError
	ifthenAsync( predicate, x, y, true ); // $ExpectError
	ifthenAsync( predicate, x, y, 'abc' ); // $ExpectError
	ifthenAsync( predicate, x, y, {} ); // $ExpectError
	ifthenAsync( predicate, x, y, [] ); // $ExpectError
	ifthenAsync( predicate, x, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	ifthenAsync(); // $ExpectError
	ifthenAsync( predicate ); // $ExpectError
	ifthenAsync( predicate, x ); // $ExpectError
	ifthenAsync( predicate, x, y ); // $ExpectError
	ifthenAsync( predicate, x, y, done, {} ); // $ExpectError
}
