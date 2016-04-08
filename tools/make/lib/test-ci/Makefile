
# VARIABLES #

TRAVIS ?= false


# DEPENDENCIES #

ifeq ($(TRAVIS), true)
	include $(TOOLS_MAKE_DIR)/lib/test-ci/travis.mk
endif


# TARGETS #

# Run CI tests.
#
# This target runs continuous integration tests, which may include unit tests, browser tests, and/or UI tests.

# test-ci: test test-browsers
test-ci: test


.PHONY: test-ci
