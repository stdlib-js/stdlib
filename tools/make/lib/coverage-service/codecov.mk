
# VARIABLES #

# Define the command for `cat`:
CAT ?= cat
CAT_FLAGS ?=

# Define the path to the Codecov executable:
CODECOV ?= $(BIN_DIR)/codecov


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
	$(QUIET) $(CAT) $(CAT_FLAGS) $(LCOV_INFO) | $(CODECOV)

.PHONY: coverage-codecov
