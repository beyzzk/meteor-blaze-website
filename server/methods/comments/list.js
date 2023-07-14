import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
    name: 'comments.list',
    validate: new SimpleSchema().validator(),
    run: function (data) {
        this.unblock();

        const { title, explanation } = data


        return Fetch(Comments, data, 'comments');
    }

});