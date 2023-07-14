import SimpleSchema from 'simpl-schema';

new ValidatedMethod({
    name: 'recipes.create',
    validate: new SimpleSchema({
        recipe: RecipeSchema,
    }).validator(),
    run: function (data) {
        this.unblock();
        const { recipe } = data

        recipe.createdAt = new Date()

        return Recipes.insert(recipe)
    },

});