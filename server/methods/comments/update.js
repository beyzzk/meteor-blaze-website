import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
    name: 'comments.update',
    validate: new SimpleSchema({
        _id: String,
        comment: CommentSchema,
    }).validator(),
    run: function (data) {
        this.unblock();
        const { _id, comment } = data

        comment.updatedAt = new Date()


        return Comments.update(
            { _id },
            {
                $set: comment,
            })
    },

});