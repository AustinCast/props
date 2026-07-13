import { expect, test } from "bun:test"
import { differentialPairProps } from "lib/components/differentialpair"

test("requires maximum length skew to be a ratio from zero through one", () => {
  expect(() =>
    differentialPairProps.parse({
      positiveConnection: "data-positive",
      negativeConnection: "data-negative",
      maxLengthSkew: 1.1,
    }),
  ).toThrow()
})
