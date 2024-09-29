;; @license Apache-2.0
;;
;; Copyright (c) 2024 The Stdlib Authors.
;;
;; Licensed under the Apache License, Version 2.0 (the "License");
;; you may not use this file except in compliance with the License.
;; You may obtain a copy of the License at
;;
;;    http://www.apache.org/licenses/LICENSE-2.0
;;
;; Unless required by applicable law or agreed to in writing, software
;; distributed under the License is distributed on an "AS IS" BASIS,
;; WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
;; See the License for the specific language governing permissions and
;; limitations under the License.

(module
  (type (;0;) (func))
  (type (;1;) (func (param i32 i32 i32 i32 i32)))
  (type (;2;) (func (param i32 i32 i32 i32 i32 i32 i32)))
  (import "env" "memory" (memory (;0;) 0))
  (func (;0;) (type 0)
    nop)
  (func (;1;) (type 1) (param i32 i32 i32 i32 i32)
    (local i64 i64)
    local.get 0
    local.get 1
    local.get 2
    local.get 2
    i64.extend_i32_s
    local.tee 5
    i64.const 1
    local.get 0
    i64.extend_i32_s
    local.tee 6
    i64.sub
    i64.mul
    i64.const 0
    local.get 5
    i64.const 0
    i64.le_s
    select
    i32.wrap_i64
    local.get 3
    local.get 4
    local.get 4
    i64.extend_i32_s
    local.tee 5
    i64.const 1
    local.get 6
    i64.sub
    i64.mul
    i64.const 0
    local.get 5
    i64.const 0
    i64.le_s
    select
    i32.wrap_i64
    call 2)
  (func (;2;) (type 2) (param i32 i32 i32 i32 i32 i32 i32)
    (local i32 i32 i32 i32 i32 i32 i32 i32 i32)
    block  ;; label = @1
      local.get 0
      i32.const 0
      i32.le_s
      br_if 0 (;@1;)
      local.get 2
      i32.const 1
      i32.eq
      local.get 5
      i32.const 1
      i32.eq
      i32.and
      i32.eqz
      if  ;; label = @2
        local.get 0
        i32.const 4
        i32.ge_u
        if  ;; label = @3
          local.get 0
          i32.const 2147483644
          i32.and
          local.set 8
          local.get 5
          local.get 5
          i32.add
          local.tee 9
          local.get 5
          i32.add
          local.tee 10
          local.get 5
          i32.add
          local.set 11
          local.get 2
          local.get 2
          i32.add
          local.tee 12
          local.get 2
          i32.add
          local.tee 13
          local.get 2
          i32.add
          local.set 14
          loop  ;; label = @4
            local.get 4
            local.get 6
            i32.const 3
            i32.shl
            i32.add
            local.get 1
            local.get 3
            i32.const 3
            i32.shl
            i32.add
            f64.load
            f64.store
            local.get 4
            local.get 5
            local.get 6
            i32.add
            i32.const 3
            i32.shl
            i32.add
            local.get 1
            local.get 2
            local.get 3
            i32.add
            i32.const 3
            i32.shl
            i32.add
            f64.load
            f64.store
            local.get 4
            local.get 6
            local.get 9
            i32.add
            i32.const 3
            i32.shl
            i32.add
            local.get 1
            local.get 3
            local.get 12
            i32.add
            i32.const 3
            i32.shl
            i32.add
            f64.load
            f64.store
            local.get 4
            local.get 6
            local.get 10
            i32.add
            i32.const 3
            i32.shl
            i32.add
            local.get 1
            local.get 3
            local.get 13
            i32.add
            i32.const 3
            i32.shl
            i32.add
            f64.load
            f64.store
            local.get 6
            local.get 11
            i32.add
            local.set 6
            local.get 3
            local.get 14
            i32.add
            local.set 3
            local.get 7
            i32.const 4
            i32.add
            local.tee 7
            local.get 8
            i32.ne
            br_if 0 (;@4;)
          end
        end
        local.get 0
        i32.const 3
        i32.and
        local.tee 0
        i32.eqz
        br_if 1 (;@1;)
        i32.const 0
        local.set 7
        loop  ;; label = @3
          local.get 4
          local.get 6
          i32.const 3
          i32.shl
          i32.add
          local.get 1
          local.get 3
          i32.const 3
          i32.shl
          i32.add
          f64.load
          f64.store
          local.get 5
          local.get 6
          i32.add
          local.set 6
          local.get 2
          local.get 3
          i32.add
          local.set 3
          local.get 7
          i32.const 1
          i32.add
          local.tee 7
          local.get 0
          i32.ne
          br_if 0 (;@3;)
        end
        br 1 (;@1;)
      end
      local.get 0
      i32.const 7
      i32.rem_u
      local.tee 2
      local.tee 7
      if  ;; label = @2
        local.get 2
        i32.const 1
        i32.sub
        i32.const 3
        i32.ge_u
        if  ;; label = @3
          local.get 4
          i32.const 24
          i32.add
          local.set 9
          local.get 1
          i32.const 24
          i32.add
          local.set 10
          local.get 4
          i32.const 16
          i32.add
          local.set 11
          local.get 1
          i32.const 16
          i32.add
          local.set 12
          local.get 4
          i32.const 8
          i32.add
          local.set 13
          local.get 1
          i32.const 8
          i32.add
          local.set 14
          local.get 7
          i32.const 4
          i32.and
          local.set 15
          loop  ;; label = @4
            local.get 4
            local.get 6
            i32.const 3
            i32.shl
            local.tee 2
            i32.add
            local.get 1
            local.get 3
            i32.const 3
            i32.shl
            local.tee 5
            i32.add
            f64.load
            f64.store
            local.get 2
            local.get 13
            i32.add
            local.get 5
            local.get 14
            i32.add
            f64.load
            f64.store
            local.get 2
            local.get 11
            i32.add
            local.get 5
            local.get 12
            i32.add
            f64.load
            f64.store
            local.get 2
            local.get 9
            i32.add
            local.get 5
            local.get 10
            i32.add
            f64.load
            f64.store
            local.get 6
            i32.const 4
            i32.add
            local.set 6
            local.get 3
            i32.const 4
            i32.add
            local.set 3
            local.get 8
            i32.const 4
            i32.add
            local.tee 8
            local.get 15
            i32.ne
            br_if 0 (;@4;)
          end
        end
        local.get 7
        i32.const 3
        i32.and
        local.tee 5
        if  ;; label = @3
          i32.const 0
          local.set 2
          loop  ;; label = @4
            local.get 4
            local.get 6
            i32.const 3
            i32.shl
            i32.add
            local.get 1
            local.get 3
            i32.const 3
            i32.shl
            i32.add
            f64.load
            f64.store
            local.get 6
            i32.const 1
            i32.add
            local.set 6
            local.get 3
            i32.const 1
            i32.add
            local.set 3
            local.get 2
            i32.const 1
            i32.add
            local.tee 2
            local.get 5
            i32.ne
            br_if 0 (;@4;)
          end
        end
        local.get 0
        i32.const 7
        i32.lt_s
        br_if 1 (;@1;)
      end
      local.get 0
      local.get 7
      i32.le_s
      br_if 0 (;@1;)
      local.get 4
      local.get 6
      i32.const 3
      i32.shl
      i32.add
      local.set 2
      local.get 1
      local.get 3
      i32.const 3
      i32.shl
      i32.add
      local.set 1
      loop  ;; label = @2
        local.get 2
        local.get 1
        f64.load
        f64.store
        local.get 2
        local.get 1
        f64.load offset=8
        f64.store offset=8
        local.get 2
        local.get 1
        f64.load offset=16
        f64.store offset=16
        local.get 2
        local.get 1
        f64.load offset=24
        f64.store offset=24
        local.get 2
        local.get 1
        f64.load offset=32
        f64.store offset=32
        local.get 2
        local.get 1
        f64.load offset=40
        f64.store offset=40
        local.get 2
        local.get 1
        f64.load offset=48
        f64.store offset=48
        local.get 7
        i32.const 7
        i32.add
        local.tee 7
        local.get 0
        i32.lt_s
        br_if 0 (;@2;)
      end
    end)
  (export "__wasm_call_ctors" (func 0))
  (export "__wasm_apply_data_relocs" (func 0))
  (export "c_dcopy" (func 1))
  (export "c_dcopy_ndarray" (func 2)))
