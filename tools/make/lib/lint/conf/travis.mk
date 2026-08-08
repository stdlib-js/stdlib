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

# Define the path to the Travis CI configuration file:
TRAVIS_CONF ?= $(ROOT_DIR)/.travis.yml

# Define the path of the linter executable:
LINT_TRAVIS_CONF ?= $(TOOLS_DIR)/lint/travis-conf/lint


# RULES #

#/
# Lints a [Travis CI][1] configuration file.
#
# [1]: https://docs.travis-ci.com/user/customizing-the-build
#
# @example
# make lint-conf-travis
#/
lint-conf-travis:
	$(QUIET) $(MAKE_EXECUTABLE) $(LINT_TRAVIS_CONF)
	$(QUIET) echo "Linting file: $(TRAVIS_CONF)"
	$(QUIET) $(LINT_TRAVIS_CONF) $(TRAVIS_CONF)

.PHONY: lint-conf-travis
