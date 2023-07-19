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

// TypeScript Version: 2.0

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Dirichlet hyper-parameter of topic vector theta (default: `50/K`).
	*/
	alpha?: number;

	/**
	*  Dirichlet hyper-parameter for word vector phi (default: `0.1`).
	*/
	beta?: number;
}

/**
* Term probabilities.
*/
interface Term {
	/**
	* Word.
	*/
	word: string;

	/**
	* Probability.
	*/
	prob: number;
}

/**
* Model output.
*/
interface Model {
	/**
	* Fits model for the given corpus.
	*
	* @param iter - number of sampling iterations
	* @param burnin - number of estimates that are thrown away at the beginning
	* @param thin - number of estimates discarded in-between iterations
	*/
	fit( iter: number, burnin: number, thin: number ): void;

	/**
	* Returns the `no` terms with the highest probabilities for chosen topic `k`.
	*
	* @param k - topic index
	* @param no - number of terms to retrieve (default: 10)
	*/
	getTerms( k: number, no?: number ): Array<Term>;
}

/**
* Latent Dirichlet Allocation via collapsed Gibbs sampling.
*
* @param documents - document corpus
* @param K - number of topics
* @param options - options object
* @param options.alpha - Dirichlet hyper-parameter of topic vector theta:
* @param options.beta - Dirichlet hyper-parameter for word vector phi
* @throws second argument must be a positive integer
* @throws must provide valid options
* @returns model object
*/
declare function lda( documents: Array<string>, K: number, options?: Options ): Model; // tslint-disable-line max-line-length


// EXPORTS //

export = lda;
