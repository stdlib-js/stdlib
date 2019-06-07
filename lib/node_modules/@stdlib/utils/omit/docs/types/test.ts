/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

import omit = require( './index' );


// TESTS //

// The function returns an object...
{
	omit( { 'a': 1, 'b': 2 }, 'a' ); // $ExpectType Object
	omit( { 'a': 1, 'b': 2 }, [ 'a', 'b' ] ); // $ExpectType Object
}

// The compiler throws an error if the function is provided a second argument which is not a string or string array...
{
	omit( {}, true ); // $ExpectError
	omit( {}, false ); // $ExpectError
	omit( {}, {} ); // $ExpectError
	omit( {}, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an incorrect number of arguments...
{
	omit(); // $ExpectError
	omit( {} ); // $ExpectError
	omit( {}, 'foo', 2 ); // $ExpectError
}
