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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Iterator as Iter, IterableIterator } from '@stdlib/types/iter';

// Define a union type representing both iterable and non-iterable iterators:
type Iterator = Iter | IterableIterator;

/**
* Pipeline function.
*
* @param iterator - source iterator
* @throws must provide an iterator
* @throws each iterator function, except the last iterator function, within an iterator pipeline must return an iterator
* @returns an iterator or pipeline result
*/
type PipelineFunction = ( iterator: Iterator ) => any;

/**
* Returns an iterator pipeline.
*
* @param iterFcn0 - iterator function or an array of iterator functions
* @param ...iterFcn - iterator function(s)
* @throws must provide at least one iterator function
* @returns iterator pipeline
*
* @example
* var randu = require( '@stdlib/random/iter/randu' );
* var iterSomeBy = require( '@stdlib/iter/some-by' );
* var iterHead = require( '@stdlib/iter/head' );
* var iterThunk = require( '@stdlib/iter/pipeline-thunk' );
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
declare function iterPipeline( iterFcn0: Function | Array<Function>, ...iterFcn: Array<Function> ): PipelineFunction;


// EXPORTS //

export = iterPipeline;
