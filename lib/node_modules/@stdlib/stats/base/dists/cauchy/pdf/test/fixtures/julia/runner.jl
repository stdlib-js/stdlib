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

import Distributions: pdf, Cauchy
import JSON

"""
	gen( x, x0, gamma, name )

Generate fixture data and write to file.

# Arguments

* `x`: input value
* `x0`: location parameter
* `gamma`: scale parameter
* `name::AbstractString`: output filename

# Examples

``` julia
julia> x = rand( 1000 ) .* 100.0;
julia> x0 = rand( 1000 ) .* 25.0;
julia> gamma = rand( 1000 ) .* 20.0;
julia> gen( x, x0, gamma, \"data.json\" );
```
"""
function gen( x, x0, gamma, name )
	z = Array{Float64}( undef, length(x) );
	for i in eachindex(x)
		z[ i ] = pdf( Cauchy( x0[i], gamma[i] ), x[i] );
	end

	# Store data to be written to file as a collection:
	data = Dict([
		("x", x),
		("x0", x0),
		("gamma", gamma),
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

# Random (negative median):
x = rand( 1000 ) .* 100.0 .- 200.0;
x0 = rand( 1000 ) .* -50.0;
gamma = rand( 1000 ) .* 20.0;
gen( x, x0, gamma, "negative_median.json" );

# Random (positive median):
x = rand( 1000 ) .* 100.0 .- 200.0;
x0 = rand( 1000 ) .* 50.0;
gamma = rand( 1000 ) .* 20.0;
gen( x, x0, gamma, "positive_median.json" );

# Random (large gamma):
x = rand( 1000 ) .* 2.0;
x0 = rand( 1000 ) .* 1.0;
gamma = rand( 1000 ) .* 50.0;
gen( x, x0, gamma, "large_gamma.json" );
