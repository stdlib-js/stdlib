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

import Distributions: cdf, Hypergeometric
import JSON

"""
	gen( x, N, K, n , name )

Generate fixture data and write to file.

# Arguments

* `x`: input value
* `N`: population size
* `K`: subpopulation size
* `n`: number of draws
* `name::AbstractString`: output filename

# Examples

``` julia
julia> N = round.( ( rand( 1000 ) .* 200 ) .+ 20 );
julia> K = round.( rand( 1000 ) .* N );
julia> n = round.( rand( 1000 ) .* K );
julia> x = round.( rand( 1000 ) .* K );
julia> gen( x, N, K, n, "data.json" );
```
"""
function gen( x, N, K, n, name )
	z = Array{Float64}( undef, length(x) );
	for i in eachindex(x)
		z[ i ] = cdf( Hypergeometric( K[i], N[i] - K[i], n[i] ), x[i] );
	end

	# Store data to be written to file as a collection:
	data = Dict([
		("x", x),
		("N", N),
		("K", K),
		("n", n),
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

# Random (small n, small p):
N = round.( ( rand( 1000 ) .* 200 ) .+ 20 );
K = round.( rand( 1000 ) .* N );
n = round.( rand( 1000 ) .* K );
x = round.( rand( 1000 ) .* K );
gen( x, N, K, n, "data.json" );
