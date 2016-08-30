
# VARIABLES #

# Define the command for `npm`:
NPM ?= npm

# Define the command for `node`:
NODE ?= node

# Define the command for `cat`:
CAT ?= cat
CAT_FLAGS ?=

# Define the path to the Codecov executable:
CODECOV ?= $(BIN_DIR)/codecov

# Define the command-line options to be used when reporting coverage statistics:
CODECOV_FLAGS ?= \
	-F $(CI_SERVICE) \
	-F $(shell echo $(KERNEL) | tr '[:upper:]' '[:lower:]') \
	-F $(shell $(NODE) --version | tr '\.' '_' | (printf 'node_' && $(CAT)))

ifdef COVERAGE_NAME
	CODECOV_FLAGS := $(CODECOV_FLAGS) -F $(COVERAGE_NAME)
endif


# TARGETS #

# Report coverage statistics.
#
# This target sends coverage statistics to [Codecov][1].
#
# To install Codecov:
#     $ npm install codecov
#
# [1]: https://codecov.io/

coverage-codecov:
	$(QUIET) $(NPM) install codecov
	$(QUIET) $(CAT) $(CAT_FLAGS) $(LCOV_INFO) | $(CODECOV) $(CODECOV_FLAGS)

.PHONY: coverage-codecov
