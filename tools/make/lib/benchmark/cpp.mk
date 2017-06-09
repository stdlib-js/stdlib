
# TARGETS #

# Run C++ benchmarks.
#
# This target runs a list of C++ benchmarks consecutively.

benchmark-cpp:
	$(QUIET) $(FIND_CPP_BENCHMARKS_CMD) | grep '^\/' | while read -r file; do \
		echo ""; \
		echo "Running benchmark: $$file"; \
		cd `dirname $$file` && \
		$(MAKE) clean && \
		BOOST=$(DEPS_BOOST_BUILD_OUT) $(MAKE) && \
		$(MAKE) run || exit 1; \
	done

.PHONY: benchmark-cpp


# Run C++ benchmarks.
#
# This target runs a specified list of C++ benchmarks consecutively.

benchmark-cpp-files:
	$(QUIET) for file in $(FILES); do \
		echo ""; \
		echo "Running benchmark: $$file"; \
		cd `dirname $$file` && \
		$(MAKE) clean && \
		BOOST=$(DEPS_BOOST_BUILD_OUT) $(MAKE) && \
		$(MAKE) run || exit 1; \
	done

.PHONY: benchmark-cpp-files
