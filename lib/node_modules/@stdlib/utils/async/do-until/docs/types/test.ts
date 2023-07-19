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

import doUntilAsync = require( './index' );

const fcn = ( i: number, next: Function ): void => {
	if ( i === void 0 ) {
		throw new Error( '`i` is missing.' );
	}
	next();
};

const predicate = ( i: number, clbk: Function ): void => {
	clbk( null, i >= 5 );
};

const done = ( error: Error | null ): void => {
	if ( error ) {
		throw error;
	}
};


// TESTS //

// The function returns void...
{
	doUntilAsync( fcn, predicate, done ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a function having a supported signature...
{
	doUntilAsync( 2, predicate, done ); // $ExpectError
	doUntilAsync( false, predicate, done ); // $ExpectError
	doUntilAsync( true, predicate, done ); // $ExpectError
	doUntilAsync( 'abc', predicate, done ); // $ExpectError
	doUntilAsync( {}, predicate, done ); // $ExpectError
	doUntilAsync( [], predicate, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a predicate function...
{
	doUntilAsync( fcn, 2, done ); // $ExpectError
	doUntilAsync( fcn, false, done ); // $ExpectError
	doUntilAsync( fcn, true, done ); // $ExpectError
	doUntilAsync( fcn, 'abc', done ); // $ExpectError
	doUntilAsync( fcn, {}, done ); // $ExpectError
	doUntilAsync( fcn, [], done ); // $ExpectError
}

// The compiler throws an error if the function is provided a done callback argument which is not a function having a supported signature...
{
	doUntilAsync( fcn, predicate, 2 ); // $ExpectError
	doUntilAsync( fcn, predicate, false ); // $ExpectError
	doUntilAsync( fcn, predicate, true ); // $ExpectError
	doUntilAsync( fcn, predicate, 'abc' ); // $ExpectError
	doUntilAsync( fcn, predicate, {} ); // $ExpectError
	doUntilAsync( fcn, predicate, [] ); // $ExpectError
	doUntilAsync( fcn, predicate, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	doUntilAsync(); // $ExpectError
	doUntilAsync( fcn ); // $ExpectError
	doUntilAsync( fcn, predicate ); // $ExpectError
	doUntilAsync( fcn, predicate, done, {}, {} ); // $ExpectError
}
