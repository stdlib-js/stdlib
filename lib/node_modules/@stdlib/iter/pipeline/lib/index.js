/**
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

'use strict';

/**
* Create an iterator pipeline.
*
* @module @stdlib/iter/pipeline
*
* @example
* var randu = require( '@stdlib/random/iter/randu' );
* var iterSomeBy = require( '@stdlib/iter/some-by' );
* var iterHead = require( '@stdlib/iter/head' );
* var iterThunk = require( '@stdlib/iter/pipeline-thunk' );
* var iterPipeline = require( '@stdlib/iter/pipeline' );
*
* function threshold( r ) {
*     return ( r > 0.95 );
* }
*
* var it1 = iterThunk( iterHead, 100 );
* var it2 = iterThunk( iterSomeBy, 5, threshold );
*
* var p = iterPipeline( it1, it2 );
*
* var bool = p( randu() );
* // returns <boolean>
*/

// MODULES //

var iterPipeline = require( './main.js' );


// EXPORTS //

module.exports = iterPipeline;
