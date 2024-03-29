import { Schema, models, model } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }, 
  prompt: {
    type: String,
    required:[ true, "Prompt is required"]

  },
  tag: {
    type: String,
    required:[ true, "Tag is required"]
  }
});
const Prompt = models.Prompts || model("Prompts", PromptSchema);

export default Prompt
