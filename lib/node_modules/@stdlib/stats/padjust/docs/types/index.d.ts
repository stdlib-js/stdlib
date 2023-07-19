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
* Correction method.
*/
type Method = 'bh' | 'bonferroni' | 'by' | 'holm' | 'hommel';

/**
* Adjusts supplied p-values for multiple comparisons via a specified method.
*
* ## Notes
*
* -   The `method` parameter can be one of the following values:
*
*     -   **bh**: Benjamini-Hochberg procedure controlling the False Discovery Rate (FDR).
*     -   **bonferroni**: Bonferroni correction fixing the family-wise error rate by multiplying the p-values with the number of comparisons. The Bonferroni correction is usually a too conservative adjustment compared to the others.
*     -   **by**: Procedure by Benjamini & Yekutieli for controlling the False Discovery Rate (FDR) under dependence.
*     -   **holm**: Hommel's method controlling family-wise error rate. It is uniformly more powerful than the Bonferroni correction.
*     -   **hommel**: Hommel's method, which is valid when hypothesis tests are independent. It is more expensive to compute than the other methods.
*
* -   By default, the number of comparisons for which the p-values should be corrected is equal to the number of provided p-values. Alternatively, it is possible to set `comparisons` to a number greater than the length of `pvals`. In that case, the methods assume `comparisons - pvals.length` unobserved p-values that are greater than all observed p-values (for Holm's method and the Bonferroni correction) or equal to `1` for the remaining methods.
*
* @param pvals - p-values to be adjusted
* @param method - correction method
* @param comparisons - number of comparisons (default: pvals.length)
* @throws comparisons must be greater or equal to the number of elements in `pvals`
* @returns array containing the corrected p-values
*
* @example
* var pvalues = [ 0.008, 0.03, 0.123, 0.6, 0.2 ];
* var out = padjust( pvalues, 'bonferroni' );
* // returns [ 0.04, 0.15, ..., 1, 1 ]
*
* @example
* var pvalues = [ 0.008, 0.03, 0.123, 0.6, 0.2 ];
* var out = padjust( pvalues, 'by' );
* // returns [ ~0.091, ~0.171, ..., 1, ~0.571 ]
*
* @example
* var pvalues = [ 0.008, 0.03, 0.123, 0.6, 0.2 ];
* var out = padjust( pvalues, 'bh' );
* // returns [ 0.04, 0.075, ..., 0.6, 0.25 ]
*
* @example
* var pvalues = [ 0.008, 0.03, 0.123, 0.6, 0.2 ];
* var out = padjust( pvalues, 'holm' );
* // returns [ 0.04, 0.12, ..., 0.6, 0.4 ]
*
* @example
* var pvalues = [ 0.008, 0.03, 0.123, 0.6, 0.2 ];
* var out = padjust( pvalues, 'hommel' );
* // returns [ 0.032, 0.12, ..., 0.6, 0.4 ]
*/
declare function padjust( x: Array<number>, method: Method, comparisons?: number ): Array<number>; // tslint-disable-line max-line-length


// EXPORTS //

export = padjust;
