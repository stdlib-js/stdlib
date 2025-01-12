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

# Define the path to the Codecov configuration file:
CODECOV_CONF ?= $(ROOT_DIR)/.codecov.yml


# RULES #

#/
# Lints a [Codecov][1] configuration file.
#
# [1]: https://docs.codecov.com/docs/codecovyml-reference
#
# @example
# make lint-conf-codecov
#/
lint-conf-codecov:
	$(QUIET) echo "Linting file: $(CODECOV_CONF)"
	$(QUIET) curl -X POST --data-binary @$(CODECOV_CONF) https://codecov.io/validate

.PHONY: lint-conf-codecov
