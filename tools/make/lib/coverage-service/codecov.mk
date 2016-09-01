
# VARIABLES #

# Define the command for `node`:
NODE ?= node

# Define the path to the [Codecov][1] executable.
#
# [1]: https://github.com/codecov/codecov-bash

CODECOV ?= bash <(curl -s https://codecov.io/bash)

# Define the command-line options to be used when reporting coverage statistics:
CODECOV_FLAGS ?= \
	-f "$(LCOV_INFO)" \
	-F $(CI_SERVICE) \
	-F $(shell echo $(KERNEL) | tr '[:upper:]' '[:lower:]') \
	-F $(shell $(NODE) --version | tr '\.' '_' | (printf 'node_' && $(CAT))) \
	-X fix \
	-Z

ifdef COVERAGE_NAME
	CODECOV_FLAGS := $(CODECOV_FLAGS) -F $(COVERAGE_NAME)
endif

# Define the path to the Codecov configuration file:
CODECOV_CONF ?= $(ROOT)/.codecov.yml


# TARGETS #

# Report coverage statistics.
#
# This target sends coverage statistics to [Codecov][1].
#
# [1]: https://codecov.io/

coverage-codecov: SHELL := /bin/bash
coverage-codecov:
	$(QUIET) $(CODECOV) $(CODECOV_FLAGS) || echo 'Failed to upload coverage reports to Codecov.'

.PHONY: coverage-codecov


# Validate configuration.
#
# This target validates a Codecov configuration file.

validate-codecov-configuration:
	$(QUIET) curl -X POST --data-binary @$(CODECOV_CONF) https://codecov.io/validate

.PHONY: validate-codecov-configuration


