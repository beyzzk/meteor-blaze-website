import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
    name: 'recipes.list',
    validate: new SimpleSchema().validator(),
    run: function (data) {
        this.unblock();

        const { base64RP, name, category, ingredients, describe } = data


        return Fetch(Recipes, data, 'recipes');
    }

});