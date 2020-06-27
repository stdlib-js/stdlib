<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# padjust

> Adjust supplied p-values for multiple comparisons.

<section class="usage">

## Usage

```javascript
var padjust = require( '@stdlib/stats/padjust' );
```

#### padjust( pvals, method\[, comparisons] )

Adjusts supplied p-values for multiple comparisons via a specified method.

```javascript
var out = padjust( [ 0.1496, 0.0275, 0.3053, 0.1599, 0.2061 ], 'bonferroni' );
// returns [ 0.748, ~0.138, ..., ~0.799, 1 ]
```

The `method` parameter can be one of the following values:

-   **bh**: Benjamini-Hochberg procedure controlling the False Discovery Rate (FDR).
-   **bonferroni**: Bonferroni correction fixing the family-wise error rate by multiplying the p-values with the number of comparisons. The Bonferroni correction is usually a too conservative adjustment compared to the others.
-   **by**: Procedure by Benjamini & Yekutieli for controlling the False Discovery Rate (FDR) under dependence.
-   **holm**: Hommel's method controlling family-wise error rate. It is uniformly more powerful than the Bonferroni correction.
-   **hommel**: Hommel's method, which is valid when hypothesis tests are independent. It is more expensive to compute than the other methods.

```javascript
var pvalues = [ 0.319, 0.201, 0.4, 0.374, 0.113 ];
var out = padjust( pvalues, 'holm' );
// returns [ ~0.957, 0.804, ..., ~0.957, ~0.565 ]

out = padjust( pvalues, 'bh' );
// returns [ 0.4, 0.4, ..., 0.4, 0.4 ]
```

By default, the number of comparisons for which the p-values should be
corrected is equal to the number of provided p-values. Alternatively, it is
possible to set `comparisons` to a number greater than the length of
`pvals`. In that case, the methods assume `comparisons - pvals.length`
unobserved p-values that are greater than all observed p-values (for Holm's
method and the Bonferroni correction) or equal to `1` for the remaining methods.

```javascript
var pvalues = [ 0.319, 0.201, 0.4, 0.374, 0.113 ];
var out = padjust( pvalues, 'bh', 10 );
// returns [ 0.8, 0.8, ..., 0.8, 0.8 ]
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var padjust = require( '@stdlib/stats/padjust' );

var pvalues = [ 0.008, 0.03, 0.123, 0.6, 0.2 ];

var out = padjust( pvalues, 'bh' );
// returns [ 0.04, 0.075, ~0.205, 0.6, 0.25 ]

out = padjust( pvalues, 'bonferroni' );
// returns [ 0.04, 0.15, 0.615, 1.0, 1.0 ]

out = padjust( pvalues, 'by' );
// returns [ ~0.457, ~0.856, 1.0, 1.0, 1.0 ]

out = padjust( pvalues, 'holm' );
// returns [ 0.2, 0.6, 1.0, 1.0, 1.0 ]

out = padjust( pvalues, 'hommel' );
// returns [ 0.16, 0.6, 1.0, 1.0, 1.0 ]
```

</section>

<!-- /.examples -->

<section class="references">

</section>

<!-- /.references -->

<section class="links">

</section>

<!-- /.links -->
