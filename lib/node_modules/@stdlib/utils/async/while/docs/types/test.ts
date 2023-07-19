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

import whileAsync = require( './index' );

const fcn = ( i: number, next: Function ): void => {
	if ( i === void 0 ) {
		throw new Error( '`i` is missing.' );
	}
	next();
};

const predicate = ( i: number, clbk: Function ): void => {
	clbk( null, i < 5 );
};

const done = ( error: Error | null ): void => {
	if ( error ) {
		throw error;
	}
};


// TESTS //

// The function returns void...
{
	whileAsync( predicate, fcn, done ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a predicate function...
{
	whileAsync( 2, fcn, done ); // $ExpectError
	whileAsync( false, fcn, done ); // $ExpectError
	whileAsync( true, fcn, done ); // $ExpectError
	whileAsync( 'abc', fcn, done ); // $ExpectError
	whileAsync( {}, fcn, done ); // $ExpectError
	whileAsync( [], fcn, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function having a supported signature...
{
	whileAsync( predicate, 2, done ); // $ExpectError
	whileAsync( predicate, false, done ); // $ExpectError
	whileAsync( predicate, true, done ); // $ExpectError
	whileAsync( predicate, 'abc', done ); // $ExpectError
	whileAsync( predicate, {}, done ); // $ExpectError
	whileAsync( predicate, [], done ); // $ExpectError
}

// The compiler throws an error if the function is provided a done callback argument which is not a function having a supported signature...
{
	whileAsync( predicate, fcn, 2 ); // $ExpectError
	whileAsync( predicate, fcn, false ); // $ExpectError
	whileAsync( predicate, fcn, true ); // $ExpectError
	whileAsync( predicate, fcn, 'abc' ); // $ExpectError
	whileAsync( predicate, fcn, {} ); // $ExpectError
	whileAsync( predicate, fcn, [] ); // $ExpectError
	whileAsync( predicate, fcn, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	whileAsync(); // $ExpectError
	whileAsync( predicate ); // $ExpectError
	whileAsync( predicate, fcn ); // $ExpectError
	whileAsync( predicate, fcn, done, {}, {} ); // $ExpectError
}
