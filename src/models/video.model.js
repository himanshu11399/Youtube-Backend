import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile: {
            type: String, //Cloudinary Service to store video
            required: true,
        },
        thumbnail: {
            type: String, //Cloudinary Service to store image
            required: true,
        },
        title: {
            type: String,
            required: true,
            trim: true
        },
        duration: {
            type: Number, //Clock time in seconds
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        views: {
            type: Number,
            default: 0
        },
        ispublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    { timestamps: true })

    VideoSchema.plugin(mongooseAggregatePaginate); //It help to write the Aggregate query in a better way
export const Video = mongoose.model("Video", videoSchema)