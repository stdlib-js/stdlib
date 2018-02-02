/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
* Latent Dirichlet Allocation via collapsed Gibbs sampling.
*
* @module @stdlib/nlp/lda
*
* @example
* var lda = require( '@stdlib/nlp/lda' );
*
* var words;
* var model;
* var docs;
*
* docs = [
*     'I loved you first',
*     'For one is both and both are one in love',
*     'You never see my pain',
*     'My love is such that rivers cannot quench',
*     'See a lot of pain, a lot of tears'
* ];
*
* model = lda( docs, 2 );
* // returns {}
*
* model.fit( 1000, 100, 10 );
*
* words = getTerms( 0, 3 );
* // e.g., returns [ { word: 'both', prob: ~0.0632 }, { word: 'pain', prob: ~0.0552 }, ... ]
*/

// MODULES //

var lda = require( './lda.js' );


// EXPORTS //

module.exports = lda;
