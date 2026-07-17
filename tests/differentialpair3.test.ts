import { expect, test } from "bun:test"
import { differentialPairProps } from "lib/components/differentialpair"

test("requires maximum length skew to be non-negative", () => {
  expect(() =>
    differentialPairProps.parse({
      positiveConnection: "data-positive",
      negativeConnection: "data-negative",
      maxLengthSkew: -0.1,
    }),
  ).toThrow()
})

test("requires maximum length skew to be finite", () => {
  expect(() =>
    differentialPairProps.parse({
      positiveConnection: "data-positive",
      negativeConnection: "data-negative",
      maxLengthSkew: Number.POSITIVE_INFINITY,
    }),
  ).toThrow()
})
