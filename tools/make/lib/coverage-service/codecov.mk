
# VARIABLES #

CAT ?= cat

# Define the path to the Codecov executable:
CODECOV ?= $(BIN)/codecov


# TARGETS #

# Report coverage statistics.
#
# This target sends coverage statistics to [Codecov][1].
#
# To install Codecov:
#     $ npm install codecov
#
# [1] https://codecov.io/

coverage-codecov:
	$(NPM) install codecov
	$(CAT) $(LCOV_INFO_PATH) | $(CODECOV)

.PHONY: coverage-codecov
