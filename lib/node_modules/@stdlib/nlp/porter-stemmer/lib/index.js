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
* Extract the stem of a given word.
*
* @module @stdlib/nlp/porter-stemmer
*
* @example
* var porterStemmer = require( '@stdlib/nlp/porter-stemmer' );
*
* var out = porterStemmer( 'walking' );
* // returns 'walk'
*
* out = porterStemmer( 'walked' );
* // returns 'walk'
*
* out = porterStemmer( 'walks' );
* // returns 'walk'
*/

// MODULES //

var porterStemmer = require( './main.js' );


// EXPORTS //

module.exports = porterStemmer;
