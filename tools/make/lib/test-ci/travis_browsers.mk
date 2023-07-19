#/
# @license Apache-2.0
#
# Copyright (c) 2017 The Stdlib Authors.
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
#/

# VARIABLES #

# Define the browser test command:
TRAVIS_HEADLESS_BROWSER ?= xvfb-run


# RULES #

#/
# Runs browser tests using a headless browser on Travis CI.
#
# @private
#
# @example
# make test-browsers-travis
#/
test-browsers-travis: $(NODE_MODULES)
	$(QUIET) $(TRAVIS_HEADLESS_BROWSER) make -f $(this_file) test-browsers

.PHONY: test-browsers-travis
