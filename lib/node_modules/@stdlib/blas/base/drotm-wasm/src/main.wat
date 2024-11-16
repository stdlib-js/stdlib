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
  (type (;1;) (func (param i32 i32 i32 i32 i32 i32)))
  (type (;2;) (func (param i32 i32 i32 i32 i32 i32 i32 i32)))
  (import "env" "memory" (memory (;0;) 0))
  (func (;0;) (type 0)
    nop)
  (func (;1;) (type 1) (param i32 i32 i32 i32 i32 i32)
    local.get 0
    local.get 1
    local.get 2
    i32.const 1
    local.get 0
    i32.sub
    local.tee 0
    local.get 2
    i32.mul
    i32.const 0
    local.get 2
    i32.const 0
    i32.le_s
    select
    local.get 3
    local.get 4
    local.get 0
    local.get 4
    i32.mul
    i32.const 0
    local.get 4
    i32.const 0
    i32.le_s
    select
    local.get 5
    call 2)
  (func (;2;) (type 2) (param i32 i32 i32 i32 i32 i32 i32 i32)
    (local f64 f64 f64 f64 f64 f64 i32 i32)
    block  ;; label = @1
      local.get 0
      i32.const 0
      i32.le_s
      br_if 0 (;@1;)
      local.get 7
      f64.load
      local.tee 8
      f64.const -0x1p+1 (;=-2;)
      f64.eq
      br_if 0 (;@1;)
      local.get 2
      local.get 5
      i32.ne
      local.get 2
      i32.const 0
      i32.le_s
      i32.or
      i32.eqz
      if  ;; label = @2
        local.get 8
        f64.const 0x0p+0 (;=0;)
        f64.lt
        if  ;; label = @3
          local.get 7
          f64.load offset=32
          local.set 8
          local.get 7
          f64.load offset=16
          local.set 9
          local.get 7
          f64.load offset=24
          local.set 10
          local.get 7
          f64.load offset=8
          local.set 11
          i32.const 0
          local.set 6
          loop  ;; label = @4
            local.get 0
            local.get 6
            i32.eq
            br_if 3 (;@1;)
            local.get 1
            local.get 3
            i32.const 3
            i32.shl
            local.tee 5
            i32.add
            local.tee 7
            local.get 7
            f64.load
            local.tee 12
            local.get 11
            f64.mul
            local.get 10
            local.get 4
            local.get 5
            i32.add
            local.tee 5
            f64.load
            local.tee 13
            f64.mul
            f64.add
            f64.store
            local.get 5
            local.get 12
            local.get 9
            f64.mul
            local.get 8
            local.get 13
            f64.mul
            f64.add
            f64.store
            local.get 6
            i32.const 1
            i32.add
            local.set 6
            local.get 2
            local.get 3
            i32.add
            local.set 3
            br 0 (;@4;)
          end
          unreachable
        end
        local.get 8
        f64.const 0x0p+0 (;=0;)
        f64.eq
        if  ;; label = @3
          local.get 7
          f64.load offset=16
          local.set 8
          local.get 7
          f64.load offset=24
          local.set 9
          i32.const 0
          local.set 6
          loop  ;; label = @4
            local.get 0
            local.get 6
            i32.eq
            br_if 3 (;@1;)
            local.get 1
            local.get 3
            i32.const 3
            i32.shl
            local.tee 5
            i32.add
            local.tee 7
            local.get 4
            local.get 5
            i32.add
            local.tee 5
            f64.load
            local.tee 10
            local.get 9
            f64.mul
            local.get 7
            f64.load
            local.tee 11
            f64.add
            f64.store
            local.get 5
            local.get 10
            local.get 11
            local.get 8
            f64.mul
            f64.add
            f64.store
            local.get 6
            i32.const 1
            i32.add
            local.set 6
            local.get 2
            local.get 3
            i32.add
            local.set 3
            br 0 (;@4;)
          end
          unreachable
        end
        local.get 7
        f64.load offset=32
        local.set 8
        local.get 7
        f64.load offset=8
        local.set 9
        i32.const 0
        local.set 6
        loop  ;; label = @3
          local.get 0
          local.get 6
          i32.eq
          br_if 2 (;@1;)
          local.get 1
          local.get 3
          i32.const 3
          i32.shl
          local.tee 5
          i32.add
          local.tee 7
          local.get 7
          f64.load
          local.tee 10
          local.get 9
          f64.mul
          local.get 4
          local.get 5
          i32.add
          local.tee 5
          f64.load
          local.tee 11
          f64.add
          f64.store
          local.get 5
          local.get 11
          local.get 8
          f64.mul
          local.get 10
          f64.sub
          f64.store
          local.get 6
          i32.const 1
          i32.add
          local.set 6
          local.get 2
          local.get 3
          i32.add
          local.set 3
          br 0 (;@3;)
        end
        unreachable
      end
      local.get 8
      f64.const 0x0p+0 (;=0;)
      f64.lt
      if  ;; label = @2
        local.get 7
        f64.load offset=32
        local.set 8
        local.get 7
        f64.load offset=16
        local.set 9
        local.get 7
        f64.load offset=24
        local.set 10
        local.get 7
        f64.load offset=8
        local.set 11
        i32.const 0
        local.set 7
        loop  ;; label = @3
          local.get 0
          local.get 7
          i32.eq
          br_if 2 (;@1;)
          local.get 1
          local.get 3
          i32.const 3
          i32.shl
          i32.add
          local.tee 14
          local.get 14
          f64.load
          local.tee 12
          local.get 11
          f64.mul
          local.get 10
          local.get 4
          local.get 6
          i32.const 3
          i32.shl
          i32.add
          local.tee 14
          f64.load
          local.tee 13
          f64.mul
          f64.add
          f64.store
          local.get 14
          local.get 12
          local.get 9
          f64.mul
          local.get 8
          local.get 13
          f64.mul
          f64.add
          f64.store
          local.get 7
          i32.const 1
          i32.add
          local.set 7
          local.get 5
          local.get 6
          i32.add
          local.set 6
          local.get 2
          local.get 3
          i32.add
          local.set 3
          br 0 (;@3;)
        end
        unreachable
      end
      local.get 8
      f64.const 0x0p+0 (;=0;)
      f64.eq
      if  ;; label = @2
        local.get 7
        f64.load offset=16
        local.set 8
        local.get 7
        f64.load offset=24
        local.set 9
        i32.const 0
        local.set 7
        loop  ;; label = @3
          local.get 0
          local.get 7
          i32.eq
          br_if 2 (;@1;)
          local.get 1
          local.get 3
          i32.const 3
          i32.shl
          i32.add
          local.tee 14
          local.get 4
          local.get 6
          i32.const 3
          i32.shl
          i32.add
          local.tee 15
          f64.load
          local.tee 10
          local.get 9
          f64.mul
          local.get 14
          f64.load
          local.tee 11
          f64.add
          f64.store
          local.get 15
          local.get 10
          local.get 11
          local.get 8
          f64.mul
          f64.add
          f64.store
          local.get 7
          i32.const 1
          i32.add
          local.set 7
          local.get 5
          local.get 6
          i32.add
          local.set 6
          local.get 2
          local.get 3
          i32.add
          local.set 3
          br 0 (;@3;)
        end
        unreachable
      end
      local.get 7
      f64.load offset=32
      local.set 8
      local.get 7
      f64.load offset=8
      local.set 9
      i32.const 0
      local.set 7
      loop  ;; label = @2
        local.get 0
        local.get 7
        i32.eq
        br_if 1 (;@1;)
        local.get 1
        local.get 3
        i32.const 3
        i32.shl
        i32.add
        local.tee 14
        local.get 14
        f64.load
        local.tee 10
        local.get 9
        f64.mul
        local.get 4
        local.get 6
        i32.const 3
        i32.shl
        i32.add
        local.tee 14
        f64.load
        local.tee 11
        f64.add
        f64.store
        local.get 14
        local.get 11
        local.get 8
        f64.mul
        local.get 10
        f64.sub
        f64.store
        local.get 7
        i32.const 1
        i32.add
        local.set 7
        local.get 5
        local.get 6
        i32.add
        local.set 6
        local.get 2
        local.get 3
        i32.add
        local.set 3
        br 0 (;@2;)
      end
      unreachable
    end)
  (export "__wasm_call_ctors" (func 0))
  (export "__wasm_apply_data_relocs" (func 0))
  (export "c_drotm" (func 1))
  (export "c_drotm_ndarray" (func 2)))
