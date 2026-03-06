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

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name arcsine
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/arcsine}
*/
setReadOnly( ns, 'arcsine', require( '@stdlib/random/streams/arcsine' ) );

/**
* @name bernoulli
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/bernoulli}
*/
setReadOnly( ns, 'bernoulli', require( '@stdlib/random/streams/bernoulli' ) );

/**
* @name beta
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/beta}
*/
setReadOnly( ns, 'beta', require( '@stdlib/random/streams/beta' ) );

/**
* @name betaprime
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/betaprime}
*/
setReadOnly( ns, 'betaprime', require( '@stdlib/random/streams/betaprime' ) );

/**
* @name binomial
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/binomial}
*/
setReadOnly( ns, 'binomial', require( '@stdlib/random/streams/binomial' ) );

/**
* @name boxMuller
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/box-muller}
*/
setReadOnly( ns, 'boxMuller', require( '@stdlib/random/streams/box-muller' ) );

/**
* @name cauchy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/cauchy}
*/
setReadOnly( ns, 'cauchy', require( '@stdlib/random/streams/cauchy' ) );

/**
* @name chi
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/chi}
*/
setReadOnly( ns, 'chi', require( '@stdlib/random/streams/chi' ) );

/**
* @name chisquare
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/chisquare}
*/
setReadOnly( ns, 'chisquare', require( '@stdlib/random/streams/chisquare' ) );

/**
* @name cosine
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/cosine}
*/
setReadOnly( ns, 'cosine', require( '@stdlib/random/streams/cosine' ) );

/**
* @name discreteUniform
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/discrete-uniform}
*/
setReadOnly( ns, 'discreteUniform', require( '@stdlib/random/streams/discrete-uniform' ) );

/**
* @name erlang
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/erlang}
*/
setReadOnly( ns, 'erlang', require( '@stdlib/random/streams/erlang' ) );

/**
* @name exponential
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/exponential}
*/
setReadOnly( ns, 'exponential', require( '@stdlib/random/streams/exponential' ) );

/**
* @name f
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/f}
*/
setReadOnly( ns, 'f', require( '@stdlib/random/streams/f' ) );

/**
* @name frechet
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/frechet}
*/
setReadOnly( ns, 'frechet', require( '@stdlib/random/streams/frechet' ) );

/**
* @name gamma
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/gamma}
*/
setReadOnly( ns, 'gamma', require( '@stdlib/random/streams/gamma' ) );

/**
* @name geometric
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/geometric}
*/
setReadOnly( ns, 'geometric', require( '@stdlib/random/streams/geometric' ) );

/**
* @name gumbel
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/gumbel}
*/
setReadOnly( ns, 'gumbel', require( '@stdlib/random/streams/gumbel' ) );

/**
* @name hypergeometric
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/hypergeometric}
*/
setReadOnly( ns, 'hypergeometric', require( '@stdlib/random/streams/hypergeometric' ) );

/**
* @name improvedZiggurat
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/improved-ziggurat}
*/
setReadOnly( ns, 'improvedZiggurat', require( '@stdlib/random/streams/improved-ziggurat' ) );

/**
* @name invgamma
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/invgamma}
*/
setReadOnly( ns, 'invgamma', require( '@stdlib/random/streams/invgamma' ) );

/**
* @name kumaraswamy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/kumaraswamy}
*/
setReadOnly( ns, 'kumaraswamy', require( '@stdlib/random/streams/kumaraswamy' ) );

/**
* @name laplace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/laplace}
*/
setReadOnly( ns, 'laplace', require( '@stdlib/random/streams/laplace' ) );

/**
* @name levy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/levy}
*/
setReadOnly( ns, 'levy', require( '@stdlib/random/streams/levy' ) );

/**
* @name logistic
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/logistic}
*/
setReadOnly( ns, 'logistic', require( '@stdlib/random/streams/logistic' ) );

/**
* @name lognormal
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/lognormal}
*/
setReadOnly( ns, 'lognormal', require( '@stdlib/random/streams/lognormal' ) );

/**
* @name minstd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/minstd}
*/
setReadOnly( ns, 'minstd', require( '@stdlib/random/streams/minstd' ) );

/**
* @name minstdShuffle
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/minstd-shuffle}
*/
setReadOnly( ns, 'minstdShuffle', require( '@stdlib/random/streams/minstd-shuffle' ) );

/**
* @name mt19937
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/mt19937}
*/
setReadOnly( ns, 'mt19937', require( '@stdlib/random/streams/mt19937' ) );

/**
* @name negativeBinomial
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/negative-binomial}
*/
setReadOnly( ns, 'negativeBinomial', require( '@stdlib/random/streams/negative-binomial' ) );

/**
* @name normal
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/normal}
*/
setReadOnly( ns, 'normal', require( '@stdlib/random/streams/normal' ) );

/**
* @name pareto1
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/pareto-type1}
*/
setReadOnly( ns, 'pareto1', require( '@stdlib/random/streams/pareto-type1' ) );

/**
* @name poisson
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/poisson}
*/
setReadOnly( ns, 'poisson', require( '@stdlib/random/streams/poisson' ) );

/**
* @name randi
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/randi}
*/
setReadOnly( ns, 'randi', require( '@stdlib/random/streams/randi' ) );

/**
* @name randn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/randn}
*/
setReadOnly( ns, 'randn', require( '@stdlib/random/streams/randn' ) );

/**
* @name randu
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/randu}
*/
setReadOnly( ns, 'randu', require( '@stdlib/random/streams/randu' ) );

/**
* @name rayleigh
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/rayleigh}
*/
setReadOnly( ns, 'rayleigh', require( '@stdlib/random/streams/rayleigh' ) );

/**
* @name t
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/t}
*/
setReadOnly( ns, 't', require( '@stdlib/random/streams/t' ) );

/**
* @name triangular
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/triangular}
*/
setReadOnly( ns, 'triangular', require( '@stdlib/random/streams/triangular' ) );

/**
* @name uniform
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/uniform}
*/
setReadOnly( ns, 'uniform', require( '@stdlib/random/streams/uniform' ) );

/**
* @name weibull
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/streams/weibull}
*/
setReadOnly( ns, 'weibull', require( '@stdlib/random/streams/weibull' ) );


// EXPORTS //

module.exports = ns;
