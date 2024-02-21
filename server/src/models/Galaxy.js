import { Schema } from "mongoose";

export class GalaxySchema = new Schema(
    {
        name: { type: String, required: true, maxLength: 75 },
        stars: { type: Number, required: true, }
    },
    {
        timestamps: true,
        toJSON: { virtuals: true }
    }
)