import { expectTypesMatch } from "lib/typecheck"
import { z } from "zod"

/**
 * Defines matched routing constraints for two named traces that form a
 * differential pair. Both connections must refer to trace `name` values.
 */
export interface DifferentialPairProps {
  name?: string
  /** Name of the trace or pin carrying the positive signal. */
  positiveConnection: string
  /** Name of the trace or pin carrying the negative signal. */
  negativeConnection: string
  /** Maximum permitted routed-length skew in millimeters. */
  maxLengthSkew?: number
}

export const differentialPairProps = z.object({
  name: z.string().optional(),
  positiveConnection: z.string(),
  negativeConnection: z.string(),
  maxLengthSkew: z.number().min(0).finite().optional(),
})

type InferredDifferentialPairProps = z.input<typeof differentialPairProps>
expectTypesMatch<DifferentialPairProps, InferredDifferentialPairProps>(true)
