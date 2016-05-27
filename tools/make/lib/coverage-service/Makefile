
# VARIABLES #

# Define the code coverage service to use:
COVERAGE_SERVICE ?= codecov

# Define the path of the `lcov.info` file which will be sent to the coverage service:
LCOV_INFO ?= $(COVERAGE_DIR)/lcov.info


# DEPENDENCIES #

ifeq ($(COVERAGE_SERVICE), codecov)
	include $(TOOLS_MAKE_LIB_DIR)/coverage-service/codecov.mk
endif


# TARGETS #

# Report coverage statistics.
#
# This target sends coverage statistics to a hosted code coverage service.

coverage:
ifeq ($(COVERAGE_SERVICE), codecov)
	@$(MAKE) -f $(this_file) coverage-codecov
endif

.PHONY: coverage
