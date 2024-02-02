import { z } from "zod";

const catchValue = {} as never;

export const configSchema = z.object({
  settings: z
    .object({ name: z.string().optional(), tag: z.string().optional() })
    .optional(),
  text1: z.string(),
  icon1: z.string(),
  color1:z.string(),
  borderColor1:z.string() ,
  text2: z.string(),
  icon2: z.string(),
  color2:z.string(),
  borderColor2:z.string() ,
  text3: z.string(),
  icon3: z.string(),
  color3:z.string(),
  borderColor3:z.string()  
});

export type Config = z.infer<typeof configSchema>;
