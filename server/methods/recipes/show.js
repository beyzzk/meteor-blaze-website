import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
    name: 'recipes.show',
    validate: new SimpleSchema({
        _id: String,
    }).validator(),
    run: function (data) {
        this.unblock();

        const { _id } = data
        const recipe = Recipes.findOne({
            _id
        });

        return { recipe }

    }

});