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

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import repl = require( './index' );

/**
* Callback invoked after creating a REPL environment..
*
* @param error - error object or null
* @param server - server object
*/
function done( error: Error | null, server: any ) {
	if ( error ) {
		throw error;
	}
	server.close();
}


// TESTS //

// The function returns a function to create a REPL environment....
{
	repl( done ); // $ExpectType void
	repl( {}, done ); // $ExpectType void
}

// The compiler throws an error if the function is provided a last argument which is not a callback function...
{
	repl( false ); // $ExpectError
	repl( true ); // $ExpectError
	repl( 123 ); // $ExpectError
	repl( null ); // $ExpectError
	repl( 'abc' ); // $ExpectError
	repl( [] ); // $ExpectError
	repl( {} ); // $ExpectError

	repl( {}, false ); // $ExpectError
	repl( {}, true ); // $ExpectError
	repl( {}, 123 ); // $ExpectError
	repl( {}, null ); // $ExpectError
	repl( {}, 'abc' ); // $ExpectError
	repl( {}, [] ); // $ExpectError
	repl( {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	repl( {}, done, {} ); // $ExpectError
	repl(); // $ExpectError
}
