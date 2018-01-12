#/
# @license Apache-2.0
#
# Copyright 2017 The Stdlib Authors
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

# Define the [Codecov][1] command (see [2][2] and [3][3]).
#
# [1]: https://codecov.io/
# [2]: https://github.com/codecov/codecov-bash
# [3]: https://github.com/codecov/codecov-python
ifeq ($(OS), WINNT)
	CODECOV ?= pip install --user codecov && codecov
else
	CODECOV ?= bash <(curl -s https://codecov.io/bash)
endif

# Define the command-line options to be used when reporting coverage statistics:
CODECOV_FLAGS ?= \
	-f "$(LCOV_INFO)" \
	-F $(CI_SERVICE) \
	-F $(shell echo $(OS) | tr '[:upper:]' '[:lower:]') \
	-F $(shell (command -v $(NODE) >/dev/null 2>&1 && $(NODE) --version || echo '') | tr '\.' '_' | (printf 'node_' && $(CAT))) \
	-X fix \
	-Z

ifdef COVERAGE_NAME
	CODECOV_FLAGS := $(CODECOV_FLAGS) -F $(COVERAGE_NAME)
endif


# RULES #

#/
# Sends coverage statistics to [Codecov][1].
#
# [1]: https://codecov.io/
#
# @param {string} LCOV_INFO - path of the `lcov.info` file which will be sent to the coverage service
# @param {string} [CI_SERVICE] - continuous integration (CI) service from which the coverage report originates
# @param {string} [COVERAGE_NAME] - coverage report name
#
# @example
# make coverage-codecov
#/
coverage-codecov:
	$(QUIET) $(CODECOV) $(CODECOV_FLAGS) || echo 'Failed to upload coverage reports to Codecov.'

.PHONY: coverage-codecov
