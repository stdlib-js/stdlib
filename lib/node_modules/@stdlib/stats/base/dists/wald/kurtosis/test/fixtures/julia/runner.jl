#!/usr/bin/env julia
#
# @license Apache-2.0
#
# Copyright (c) 2026 The Stdlib Authors.
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

import Distributions: kurtosis, InverseGaussian
import JSON

"""
	gen( mu, lambda, name )

Generate fixture data and write to file.

# Arguments

* `mu`: mean parameter
* `lambda`: shape parameter
* `name::AbstractString`: output filename

# Examples

``` julia
julia> mu = rand( 1000 ) .* 10.0 .+ 0.1;
julia> lambda = rand( 1000 ) .* 5.0 .+ 0.1;
julia> gen( mu, lambda, "data.json" );
```
"""
function gen( mu, lambda, name )
	z = Array{Float64}( undef, length(mu) );
	for i in eachindex(mu)
		z[ i ] = kurtosis( InverseGaussian( mu[i], lambda[i] ) );
	end

	# Store data to be written to file as a collection:
	data = Dict([
		("mu", mu),
		("lambda", lambda),
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

# Generate fixtures:
mu = rand( 100 ) .* 10.0 .+ 0.5;
lambda = rand( 100 ) .* 5.0 .+ 0.5;
gen( mu, lambda, "data.json" );
