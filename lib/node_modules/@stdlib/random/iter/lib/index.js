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
* @see {@link module:@stdlib/random/iter/arcsine}
*/
setReadOnly( ns, 'arcsine', require( '@stdlib/random/iter/arcsine' ) );

/**
* @name bernoulli
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/bernoulli}
*/
setReadOnly( ns, 'bernoulli', require( '@stdlib/random/iter/bernoulli' ) );

/**
* @name beta
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/beta}
*/
setReadOnly( ns, 'beta', require( '@stdlib/random/iter/beta' ) );

/**
* @name betaprime
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/betaprime}
*/
setReadOnly( ns, 'betaprime', require( '@stdlib/random/iter/betaprime' ) );

/**
* @name binomial
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/binomial}
*/
setReadOnly( ns, 'binomial', require( '@stdlib/random/iter/binomial' ) );

/**
* @name boxMuller
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/box-muller}
*/
setReadOnly( ns, 'boxMuller', require( '@stdlib/random/iter/box-muller' ) );

/**
* @name cauchy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/cauchy}
*/
setReadOnly( ns, 'cauchy', require( '@stdlib/random/iter/cauchy' ) );

/**
* @name chi
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/chi}
*/
setReadOnly( ns, 'chi', require( '@stdlib/random/iter/chi' ) );

/**
* @name chisquare
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/chisquare}
*/
setReadOnly( ns, 'chisquare', require( '@stdlib/random/iter/chisquare' ) );

/**
* @name cosine
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/cosine}
*/
setReadOnly( ns, 'cosine', require( '@stdlib/random/iter/cosine' ) );

/**
* @name discreteUniform
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/discrete-uniform}
*/
setReadOnly( ns, 'discreteUniform', require( '@stdlib/random/iter/discrete-uniform' ) );

/**
* @name erlang
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/erlang}
*/
setReadOnly( ns, 'erlang', require( '@stdlib/random/iter/erlang' ) );

/**
* @name exponential
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/exponential}
*/
setReadOnly( ns, 'exponential', require( '@stdlib/random/iter/exponential' ) );

/**
* @name f
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/f}
*/
setReadOnly( ns, 'f', require( '@stdlib/random/iter/f' ) );

/**
* @name frechet
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/frechet}
*/
setReadOnly( ns, 'frechet', require( '@stdlib/random/iter/frechet' ) );

/**
* @name gamma
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/gamma}
*/
setReadOnly( ns, 'gamma', require( '@stdlib/random/iter/gamma' ) );

/**
* @name geometric
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/geometric}
*/
setReadOnly( ns, 'geometric', require( '@stdlib/random/iter/geometric' ) );

/**
* @name gumbel
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/gumbel}
*/
setReadOnly( ns, 'gumbel', require( '@stdlib/random/iter/gumbel' ) );

/**
* @name hypergeometric
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/hypergeometric}
*/
setReadOnly( ns, 'hypergeometric', require( '@stdlib/random/iter/hypergeometric' ) );

/**
* @name improvedZiggurat
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/improved-ziggurat}
*/
setReadOnly( ns, 'improvedZiggurat', require( '@stdlib/random/iter/improved-ziggurat' ) );

/**
* @name invgamma
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/invgamma}
*/
setReadOnly( ns, 'invgamma', require( '@stdlib/random/iter/invgamma' ) );

/**
* @name kumaraswamy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/kumaraswamy}
*/
setReadOnly( ns, 'kumaraswamy', require( '@stdlib/random/iter/kumaraswamy' ) );

/**
* @name laplace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/laplace}
*/
setReadOnly( ns, 'laplace', require( '@stdlib/random/iter/laplace' ) );

/**
* @name levy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/levy}
*/
setReadOnly( ns, 'levy', require( '@stdlib/random/iter/levy' ) );

/**
* @name logistic
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/logistic}
*/
setReadOnly( ns, 'logistic', require( '@stdlib/random/iter/logistic' ) );

/**
* @name lognormal
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/lognormal}
*/
setReadOnly( ns, 'lognormal', require( '@stdlib/random/iter/lognormal' ) );

/**
* @name minstd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/minstd}
*/
setReadOnly( ns, 'minstd', require( '@stdlib/random/iter/minstd' ) );

/**
* @name minstdShuffle
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/minstd-shuffle}
*/
setReadOnly( ns, 'minstdShuffle', require( '@stdlib/random/iter/minstd-shuffle' ) );

/**
* @name mt19937
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/mt19937}
*/
setReadOnly( ns, 'mt19937', require( '@stdlib/random/iter/mt19937' ) );

/**
* @name negativeBinomial
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/negative-binomial}
*/
setReadOnly( ns, 'negativeBinomial', require( '@stdlib/random/iter/negative-binomial' ) );

/**
* @name normal
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/normal}
*/
setReadOnly( ns, 'normal', require( '@stdlib/random/iter/normal' ) );

/**
* @name pareto1
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/pareto-type1}
*/
setReadOnly( ns, 'pareto1', require( '@stdlib/random/iter/pareto-type1' ) );

/**
* @name poisson
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/poisson}
*/
setReadOnly( ns, 'poisson', require( '@stdlib/random/iter/poisson' ) );

/**
* @name randi
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/randi}
*/
setReadOnly( ns, 'randi', require( '@stdlib/random/iter/randi' ) );

/**
* @name randn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/randn}
*/
setReadOnly( ns, 'randn', require( '@stdlib/random/iter/randn' ) );

/**
* @name randu
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/randu}
*/
setReadOnly( ns, 'randu', require( '@stdlib/random/iter/randu' ) );

/**
* @name rayleigh
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/rayleigh}
*/
setReadOnly( ns, 'rayleigh', require( '@stdlib/random/iter/rayleigh' ) );

/**
* @name t
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/t}
*/
setReadOnly( ns, 't', require( '@stdlib/random/iter/t' ) );

/**
* @name triangular
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/triangular}
*/
setReadOnly( ns, 'triangular', require( '@stdlib/random/iter/triangular' ) );

/**
* @name uniform
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/uniform}
*/
setReadOnly( ns, 'uniform', require( '@stdlib/random/iter/uniform' ) );

/**
* @name weibull
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/random/iter/weibull}
*/
setReadOnly( ns, 'weibull', require( '@stdlib/random/iter/weibull' ) );


// EXPORTS //

module.exports = ns;
