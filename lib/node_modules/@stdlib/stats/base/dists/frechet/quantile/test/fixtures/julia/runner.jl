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

import Distributions: quantile, Frechet
import JSON

"""
	gen( p, alpha, s, name )

Generate fixture data and write to file.

# Arguments

* `p`: input probability
* `alpha`: shape parameter
* `s`: scale parameter
* `name::AbstractString`: output filename

# Examples

``` julia
julia> p = rand( 1000 );
julia> alpha = rand( 1000 ) .* 5.0;
julia> s = rand( 1000 ) .* 5.0;
julia> gen( p, alpha, s, "data.json" );
```
"""
function gen( p, alpha, s, name )
	z = Array{Float64}( undef, length(p) );
	for i in eachindex(p)
		z[ i ] = quantile( Frechet( alpha[i], s[i] ), p[i] );
	end

	# Store data to be written to file as a collection:
	data = Dict([
		("p", p),
		("alpha", alpha),
		("s", s),
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

# Large shape:
p = rand( 1000 );
alpha = rand( 1000 ) .* 20.0;
s = rand( 1000 ) .* 2.0;
gen( p, alpha, s, "large_shape.json" );

# Large scale:
p = rand( 1000 );
alpha = rand( 1000 ) .* 2.0;
s = rand( 1000 ) .* 20.0;
gen( p, alpha, s, "large_scale.json" );

# Both large:
p = rand( 1000 );
alpha = rand( 1000 ) .* 20;
s = rand( 1000 ) .* 20.0;
gen( p, alpha, s, "both_large.json" );
