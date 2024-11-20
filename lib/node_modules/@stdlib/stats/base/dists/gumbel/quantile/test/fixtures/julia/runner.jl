#!/usr/bin/env julia
#
# @license Apache-2.0
#
# Copyright (c) 2018 The Stdlib Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import Distributions: quantile, Gumbel
import JSON

"""
	gen( p, mu, beta, name )

Generate fixture data and write to file.

# Arguments

* `p`: input value
* `mu`: location parameter
* `beta`: scale parameter
* `name::AbstractString`: output filename

# Examples

``` julia
julia> p = rand( 1000 );
julia> mu = rand( 1000 ) .* -10.0;
julia> beta = rand( 1000 ) .* 5.0;
julia> gen( p, mu, beta, "data.json" );
```
"""
function gen( p, mu, beta, name )
	z = Array{Float64}( undef, length(p) );
	for i in eachindex(p)
		z[ i ] = quantile( Gumbel( mu[i], beta[i] ), p[i] );
	end

	# Store data to be written to file as a collection:
	data = Dict([
		("p", p),
		("mu", mu),
		("beta", beta),
		("expected", z)
	]);

	# Based on the script directory, create an output filepath:
	filepath = joinpath( dir, name );

	# Write the data to the output filepath as JSON:
	outfile = open( filepath, "w" );
	write( outfile, JSON.json(data) );
	write( outfile, "\n" );
	close( outfile );
end

# Get the filename:
file = @__FILE__;

# Extract the directory in which this file resides:
dir = dirname( file );

# Negative mean:
p = rand( 1000 );
mu = rand( 1000 ) .* -10.0;
beta = rand( 1000 ) .* 5.0;
gen( p, mu, beta, "negative_mean.json" );

# Positive mean:
p = rand( 1000 );
mu = rand( 1000 ) .* 10.0;
beta = rand( 1000 ) .* 5.0;
gen( p, mu, beta, "positive_mean.json" );

# Large variance:
p = rand( 1000 );
mu = rand( 1000 );
beta = rand( 1000 ) .* 20.0;
gen( p, mu, beta, "large_variance.json" );
