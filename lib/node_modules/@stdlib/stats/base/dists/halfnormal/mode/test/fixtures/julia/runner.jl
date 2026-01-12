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

import JSON

"""
	gen( sigma, name )

Generate fixture data for the mode of a half-normal distribution and write to file.

# Arguments

* `sigma::AbstractVector{<:Real}`: scale parameter (σ > 0)
* `name::AbstractString`: output filename
"""
function gen(sigma, name)
	expected = Array{Float64}(undef, length(sigma))

	for i in eachindex(sigma)
		if sigma[i] > 0.0
			expected[i] = 0.0
		else
			expected[i] = NaN
		end
	end

	data = Dict(
		"sigma" => sigma,
		"expected" => expected
	)

	open(name, "w") do io
		write(io, JSON.json(data))
		write(io, "\n")
	end
end

# Generate fixtures:
sigma = rand( 100 ) .* 5.0;
gen( sigma, "data.json" );
