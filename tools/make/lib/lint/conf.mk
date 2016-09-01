
# DEPENDENCIES #

include $(TOOLS_MAKE_LIB_DIR)/lint/codecov.mk
include $(TOOLS_MAKE_LIB_DIR)/lint/travis.mk


# TARGETS #

# Lint configuration files.
#
# This target lints configuration files.

lint-conf: lint-conf-travis lint-conf-codecov

.PHONY: lint-conf
