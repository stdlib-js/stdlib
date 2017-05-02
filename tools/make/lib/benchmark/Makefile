
# DEPENDENCIES #

include $(TOOLS_MAKE_LIB_DIR)/benchmark/javascript.mk
include $(TOOLS_MAKE_LIB_DIR)/benchmark/c.mk
include $(TOOLS_MAKE_LIB_DIR)/benchmark/julia.mk
include $(TOOLS_MAKE_LIB_DIR)/benchmark/python.mk
include $(TOOLS_MAKE_LIB_DIR)/benchmark/r.mk


# TARGETS #

# Run benchmarks.
#
# This target runs benchmarks.

benchmark: benchmark-javascript

.PHONY: benchmark


# Run cross-language benchmarks.
#
# This target runs cross-language benchmarks.

benchmark-lang: benchmark-javascript benchmark-julia benchmark-python benchmark-r benchmark-c

.PHONY: benchmark-lang
