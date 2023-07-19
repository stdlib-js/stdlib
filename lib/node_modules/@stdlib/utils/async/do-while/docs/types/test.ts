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

import doWhileAsync = require( './index' );

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
	doWhileAsync( fcn, predicate, done ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a function having a supported signature...
{
	doWhileAsync( 2, predicate, done ); // $ExpectError
	doWhileAsync( false, predicate, done ); // $ExpectError
	doWhileAsync( true, predicate, done ); // $ExpectError
	doWhileAsync( 'abc', predicate, done ); // $ExpectError
	doWhileAsync( {}, predicate, done ); // $ExpectError
	doWhileAsync( [], predicate, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a predicate function...
{
	doWhileAsync( fcn, 2, done ); // $ExpectError
	doWhileAsync( fcn, false, done ); // $ExpectError
	doWhileAsync( fcn, true, done ); // $ExpectError
	doWhileAsync( fcn, 'abc', done ); // $ExpectError
	doWhileAsync( fcn, {}, done ); // $ExpectError
	doWhileAsync( fcn, [], done ); // $ExpectError
}

// The compiler throws an error if the function is provided a done callback argument which is not a function having a supported signature...
{
	doWhileAsync( fcn, predicate, 2 ); // $ExpectError
	doWhileAsync( fcn, predicate, false ); // $ExpectError
	doWhileAsync( fcn, predicate, true ); // $ExpectError
	doWhileAsync( fcn, predicate, 'abc' ); // $ExpectError
	doWhileAsync( fcn, predicate, {} ); // $ExpectError
	doWhileAsync( fcn, predicate, [] ); // $ExpectError
	doWhileAsync( fcn, predicate, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	doWhileAsync(); // $ExpectError
	doWhileAsync( fcn ); // $ExpectError
	doWhileAsync( fcn, predicate ); // $ExpectError
	doWhileAsync( fcn, predicate, done, {}, {} ); // $ExpectError
}
