import { expect, test } from "bun:test"
import {
  differentialPairProps,
  type DifferentialPairProps,
} from "lib/components/differentialpair"

test("parses a differential pair with maximum length skew", () => {
  const raw: DifferentialPairProps = {
    name: "data",
    positiveConnection: "data-positive",
    negativeConnection: "data-negative",
    maxLengthSkew: 0.1,
  }

  const parsed = differentialPairProps.parse(raw)

  expect(parsed).toEqual(raw)
})
