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
* One-way analysis of variance.
*
* @module @stdlib/stats/anova1
*
* @example
* var anova1 = require( '@stdlib/stats/anova1' );
* var x = [ 1, 3, 5, 2, 4, 6, 8, 7, 10, 11, 12, 15 ];
* var f = [ 'control', 'treatA', 'treatB', 'treatC', 'control', 'treatA', 'treatB', 'treatC', 'control', 'treatA', 'treatB', 'treatC' ];
*
* var out = anova1( x, f );
* /* returns
*     {
*         'treatment': {
*             'df': 3,
*             'ss': ~20.667,
*             'ms': ~6.889
*          }
*         'error': {
*             'df': 8,
*             'ss': ~185.333,
*             'ms': ~23.1667,
*         },
*         'statistic': ~0.297,
*         'pValue': ~0.826,
*         'means': { 'control': { 'mean': 5.0, 'sampleSize': 3, 'SD': ~4.583 },
*            'treatA': { 'mean': ~6.667, 'sampleSize': 3, 'SD': ~4.041 },
*            'treatB': { 'mean': ~8.333, 'sampleSize': 3, 'SD': ~3.512 },
*            'treatC': { 'mean': 8.0, 'sampleSize': 3, 'SD': ~6.557 }
*         },
*         'method': 'One-Way ANOVA'
*     }
* *\/
*
* var table = out.print();
* /*
* One-Way ANOVA
*
* Null Hypothesis: All Means Equal
* Alternate Hypothesis: At Least one Mean not Equal
*
*               df   SS          MS        F Score  P Value
* Treatment     3    20.6667     6.8889    0.2974   0.8265
* Errors        8    185.3333    23.1667
*
* Fail to Reject Null: 0.8265 >= 0.05
*
* *\/
*/

// MODULES //

var anova1 = require( './anova1.js' );


// EXPORTS //

module.exports = anova1;
