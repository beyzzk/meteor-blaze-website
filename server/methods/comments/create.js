import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
    name: 'comments.create',
    validate: new SimpleSchema({
        comment: CommentSchema,
    }).validator(),
    run: function (data) {
        this.unblock();
        const { comment } = data

        const now = new Date()

        comment.createdAt = now
        comment.updatedAt = now

        return Comments.insert(comment)
    },

});