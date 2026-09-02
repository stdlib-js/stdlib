;; @license Apache-2.0
;;
;; Copyright (c) 2025 The Stdlib Authors.
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
  (type (;1;) (func (param i32 f32 i32 i32 i32 i32) (result f32)))
  (type (;2;) (func (param i32 f32 i32 i32 i32 i32 i32 i32) (result f32)))
  (import "env" "memory" (memory (;0;) 0))
  (func (;0;) (type 0)
    nop)
  (func (;1;) (type 1) (param i32 f32 i32 i32 i32 i32) (result f32)
    local.get 0
    local.get 1
    local.get 2
    local.get 3
    i32.const 1
    local.get 0
    i32.sub
    local.tee 0
    local.get 3
    i32.mul
    i32.const 0
    local.get 3
    i32.const 0
    i32.le_s
    select
    local.get 4
    local.get 5
    local.get 0
    local.get 5
    i32.mul
    i32.const 0
    local.get 5
    i32.const 0
    i32.le_s
    select
    call 2)
  (func (;2;) (type 2) (param i32 f32 i32 i32 i32 i32 i32 i32) (result f32)
    (local i32 f64)
    local.get 0
    i32.const 0
    i32.gt_s
    if (result f32)  ;; label = @1
      local.get 1
      f64.promote_f32
      local.set 9
      block  ;; label = @2
        local.get 3
        i32.const 1
        i32.ne
        local.get 6
        i32.const 1
        i32.ne
        i32.or
        i32.eqz
        if  ;; label = @3
          block  ;; label = @4
            local.get 0
            i32.const 5
            i32.rem_u
            local.tee 6
            i32.eqz
            br_if 0 (;@4;)
            loop  ;; label = @5
              local.get 6
              local.get 8
              i32.eq
              br_if 1 (;@4;)
              local.get 2
              local.get 4
              i32.const 2
              i32.shl
              i32.add
              f32.load
              f64.promote_f32
              local.get 5
              local.get 7
              i32.const 2
              i32.shl
              i32.add
              f32.load
              f64.promote_f32
              f64.mul
              local.get 9
              f64.add
              local.set 9
              local.get 8
              i32.const 1
              i32.add
              local.set 8
              local.get 7
              i32.const 1
              i32.add
              local.set 7
              local.get 4
              i32.const 1
              i32.add
              local.set 4
              br 0 (;@5;)
            end
            unreachable
          end
          local.get 0
          i32.const 4
          i32.le_s
          br_if 1 (;@2;)
          loop  ;; label = @4
            local.get 0
            local.get 6
            i32.le_s
            br_if 2 (;@2;)
            local.get 9
            local.get 2
            local.get 4
            i32.const 2
            i32.shl
            i32.add
            local.tee 3
            f32.load offset=16
            f64.promote_f32
            local.get 5
            local.get 7
            i32.const 2
            i32.shl
            i32.add
            local.tee 8
            f32.load offset=16
            f64.promote_f32
            f64.mul
            local.get 3
            f32.load offset=12
            f64.promote_f32
            local.get 8
            f32.load offset=12
            f64.promote_f32
            f64.mul
            local.get 3
            f32.load offset=8
            f64.promote_f32
            local.get 8
            f32.load offset=8
            f64.promote_f32
            f64.mul
            local.get 3
            f32.load
            f64.promote_f32
            local.get 8
            f32.load
            f64.promote_f32
            f64.mul
            local.get 3
            f32.load offset=4
            f64.promote_f32
            local.get 8
            f32.load offset=4
            f64.promote_f32
            f64.mul
            f64.add
            f64.add
            f64.add
            f64.add
            f64.add
            local.set 9
            local.get 6
            i32.const 5
            i32.add
            local.set 6
            local.get 7
            i32.const 5
            i32.add
            local.set 7
            local.get 4
            i32.const 5
            i32.add
            local.set 4
            br 0 (;@4;)
          end
          unreachable
        end
        loop  ;; label = @3
          local.get 0
          local.get 8
          i32.eq
          br_if 1 (;@2;)
          local.get 2
          local.get 4
          i32.const 2
          i32.shl
          i32.add
          f32.load
          f64.promote_f32
          local.get 5
          local.get 7
          i32.const 2
          i32.shl
          i32.add
          f32.load
          f64.promote_f32
          f64.mul
          local.get 9
          f64.add
          local.set 9
          local.get 8
          i32.const 1
          i32.add
          local.set 8
          local.get 6
          local.get 7
          i32.add
          local.set 7
          local.get 3
          local.get 4
          i32.add
          local.set 4
          br 0 (;@3;)
        end
        unreachable
      end
      local.get 9
      f32.demote_f64
    else
      local.get 1
    end)
  (export "__wasm_call_ctors" (func 0))
  (export "c_sdsdot" (func 1))
  (export "c_sdsdot_ndarray" (func 2)))
