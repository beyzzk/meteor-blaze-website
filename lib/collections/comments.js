import SimpleSchema from "simpl-schema";

Comments = new Mongo.Collection("comments");

CommentSchema = new SimpleSchema({
    title: String,
    explanation: String,
    createdAt: {
        type: Date,
        optional: true,
    },
    updatedAt: {
        type: Date,
        optional: true,
    },
});

Comments.attachSchema(CommentSchema);
