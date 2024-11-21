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

import iterFirst = require( '@stdlib/iter/first' );
import iterNone = require( '@stdlib/iter/none' );
import iterPipeline = require( './index' );


// TESTS //

// The function returns a pipeline function...
{
	iterPipeline( iterFirst, iterNone ); // $ExpectType PipelineFunction
	iterPipeline( [ iterFirst, iterNone ] ); // $ExpectType PipelineFunction
}

// The compiler throws an error if the function is provided a first argument which is not a function or an array of functions...
{
	iterPipeline( '5' ); // $ExpectError
	iterPipeline( 5 ); // $ExpectError
	iterPipeline( true ); // $ExpectError
	iterPipeline( false ); // $ExpectError
	iterPipeline( null ); // $ExpectError
	iterPipeline( undefined ); // $ExpectError
	iterPipeline( [ 1, 2, 3 ] ); // $ExpectError
	iterPipeline( {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an argument which is not a function...
{
	iterPipeline( iterFirst, '5' ); // $ExpectError
	iterPipeline( iterFirst, true ); // $ExpectError
	iterPipeline( iterFirst, false ); // $ExpectError
	iterPipeline( iterFirst, null ); // $ExpectError
	iterPipeline( iterFirst, [] ); // $ExpectError
	iterPipeline( iterFirst, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterPipeline(); // $ExpectError
}
