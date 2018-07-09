<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# LDA

> [Latent Dirichlet Allocation][lda] via collapsed Gibbs sampling.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var lda = require( '@stdlib/nlp/lda' );
```

#### lda( docs, K\[, options] )

[Latent Dirichlet Allocation][lda] via collapsed Gibbs sampling. To create a model, call the `lda` function by passing it an `array` of `strings` and the number of topics `K` that should be identified.

```javascript
var model;
var docs;

docs = [
    'I loved you first',
    'For one is both and both are one in love',
    'You never see my pain',
    'My love is such that rivers cannot quench',
    'See a lot of pain, a lot of tears'
];

model = lda( docs, 2 );
// returns {}
```

After initialization, model parameters are estimated by calling the `.fit()` method, which performs collapsed Gibbs sampling.

The model object contains the following methods:

#### model.fit( iter, burnin, thin )

<!-- run-disable -->

```javascript
model.fit( 1000, 100, 10 );
```

The `iter` parameter denotes the number of sampling iterations. While a common choice, one thousand iterations might not always be appropriate. Empirical diagnostics can be used to assess whether the constructed Markov Chain has converged. `burnin` denotes the number of estimates that are thrown away at the beginning, whereas `thin` controls the number of estimates discarded in-between iterations.

#### model.getTerms( k\[, no = 10] )

Returns the `no` terms with the highest probabilities for chosen topic `k`.

<!-- run-disable -->

```javascript
var words = model.getTerms( 0, 3 );
/* returns
    [
        { 'word': 'both', 'prob': 0.06315008476532499 },
        { 'word': 'pain', 'prob': 0.05515729517235543 },
        { 'word': 'one', 'prob': 0.05486669737616135 }
    ]
*/
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var sotu = require( '@stdlib/datasets/sotu' );
var roundn = require( '@stdlib/math/base/special/roundn' );
var stopwords = require( '@stdlib/datasets/stopwords-en' );
var lowercase = require( '@stdlib/string/lowercase' );
var lda = require( '@stdlib/nlp/lda' );

var speeches;
var words;
var terms;
var model;
var str;
var i;
var j;

words = stopwords();
for ( i = 0; i < words.length; i++ ) {
    words[ i ] = new RegExp( '\\b'+words[ i ]+'\\b', 'gi' );
}

speeches = sotu({
    'range': [ 1930, 2010 ]
});
for ( i = 0; i < speeches.length; i++ ) {
    str = lowercase( speeches[ i ].text );
    for ( j = 0; j < words.length; j++ ) {
        str = str.replace( words[ j ], '' );
    }
    speeches[ i ] = str;
}

model = lda( speeches, 3 );

model.fit( 1000, 100, 10 );

for ( i = 0; i <= 80; i++ ) {
    str = 'Year: ' + (1930+i) + '\t';
    str += 'Topic 1: ' + roundn( model.avgTheta.get( i, 0 ), -3 ) + '\t';
    str += 'Topic 2: ' + roundn( model.avgTheta.get( i, 1 ), -3 ) + '\t';
    str += 'Topic 3: ' + roundn( model.avgTheta.get( i, 2 ), -3 );
    console.log( str );
}

terms = model.getTerms( 0, 20 );
for ( i = 0; i < terms.length; i++ ) {
    terms[ i ] = terms[ i ].word;
}
console.log( 'Words most associated with first topic:\n ' + terms.join( ', ' ) );

terms = model.getTerms( 1, 20 );
for ( i = 0; i < terms.length; i++ ) {
    terms[ i ] = terms[ i ].word;
}
console.log( 'Words most associated with second topic:\n ' + terms.join( ', ' ) );

terms = model.getTerms( 2, 20 );
for ( i = 0; i < terms.length; i++ ) {
    terms[ i ] = terms[ i ].word;
}
console.log( 'Words most associated with third topic:\n ' + terms.join( ', ' ) );
```

</section>

<!-- /.examples -->

<section class="links">

[lda]: https://en.wikipedia.org/wiki/Latent_Dirichlet_allocation

</section>

<!-- /.links -->
