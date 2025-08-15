// models/BooleanValue.ts
import mongoose, { Schema, model, models } from "mongoose";

const BooleanSchema = new Schema({
  isActive: {
    type: Boolean,
    required: true
  }
}, { timestamps: true });

const BooleanValue = models.BooleanValue || model("BooleanValue", BooleanSchema);
export default BooleanValue;
