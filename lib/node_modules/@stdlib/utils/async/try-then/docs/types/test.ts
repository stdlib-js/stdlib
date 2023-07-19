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
import trythenAsync = require( './index' );

const x = ( clbk: Function ) => {
	if ( randu() > 0.5 ) {
		return clbk( null, 1.0 );
	}
	clbk( new Error( 'oops' ) );
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
	trythenAsync( x, y, done ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a function having a supported signature...
{
	trythenAsync( 2, y, done ); // $ExpectError
	trythenAsync( false, y, done ); // $ExpectError
	trythenAsync( true, y, done ); // $ExpectError
	trythenAsync( 'abc', y, done ); // $ExpectError
	trythenAsync( {}, y, done ); // $ExpectError
	trythenAsync( [], y, done ); // $ExpectError
	trythenAsync( ( x: number ): number => x, y, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function having a supported signature...
{
	trythenAsync( x, 2, done ); // $ExpectError
	trythenAsync( x, false, done ); // $ExpectError
	trythenAsync( x, true, done ); // $ExpectError
	trythenAsync( x, 'abc', done ); // $ExpectError
	trythenAsync( x, {}, done ); // $ExpectError
	trythenAsync( x, [], done ); // $ExpectError
	trythenAsync( x, ( x: number ): number => x, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a callback function...
{
	trythenAsync( x, y, 2 ); // $ExpectError
	trythenAsync( x, y, false ); // $ExpectError
	trythenAsync( x, y, true ); // $ExpectError
	trythenAsync( x, y, 'abc' ); // $ExpectError
	trythenAsync( x, y, {} ); // $ExpectError
	trythenAsync( x, y, [] ); // $ExpectError
	trythenAsync( x, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	trythenAsync(); // $ExpectError
	trythenAsync( x ); // $ExpectError
	trythenAsync( x, y ); // $ExpectError
	trythenAsync( x, y, done, {} ); // $ExpectError
}
