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

/* tslint:disable:no-unused-expression */

import CircularBuffer = require( './index' );


// TESTS //

// The function returns a circular buffer instance...
{
	new CircularBuffer( 3 ); // $ExpectType CircularBuffer
}

// The compiler throws an error if the constructor function is provided an invalid number of arguments...
{
	new CircularBuffer(); // $ExpectError
	new CircularBuffer( 3, 4 ); // $ExpectError
}
