import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
    name: 'comments.delete',
    validate: new SimpleSchema({
        _id: String,
    }).validator(),
    run: function (data) {
        this.unblock();
        const { _id } = data

        return Comments.remove({ _id })
    },

});