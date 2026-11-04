#/
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
#/

# VARIABLES #

# Define the path to the [ESLint][1] executable.
#
# To install ESLint:
#
# ```bash
# $ npm install eslint
# ```
#
# [1]: https://eslint.org/
ESLINT ?= $(BIN_DIR)/eslint

# Define the command-line options to use when invoking the ESLint executable:
eslint_yaml_flags := \
	--cache

# Define user-supplied command-line options:
ESLINT_YAML_FLAGS ?=

ifeq ($(AUTOFIX),true)
	eslint_yaml_flags += --fix
endif

# Append user-supplied command-line options:
eslint_yaml_flags += $(ESLINT_YAML_FLAGS)


# RULES #

#/
# Lints YAML files using [ESLint][1].
#
# ## Notes
#
# -   Uses `--cache` for performance.
#
# [1]: https://eslint.org/
#
# @example
# make lint-yaml
#/
lint-yaml: $(NODE_MODULES)
	$(QUIET) $(ESLINT) $(eslint_yaml_flags) ".github/**/*.yml" ".codecov.yml" ".github/*.yml"

.PHONY: lint-yaml
