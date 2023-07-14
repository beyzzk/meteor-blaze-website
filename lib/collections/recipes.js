import SimpleSchema from 'simpl-schema';

Recipes = new Mongo.Collection('recipes');

RecipeSchema = new SimpleSchema({
    base64RP: {
        type: String,
    },
    name: String,
    category: {
        type: String,
        allowedValues: ['Main Course', 'Soups', 'Salads', 'Snacks', 'Desserts', 'Drinks'],
    },
    ingredients1: {
        type: String,
    },
    ingredients2: {
        type: String,
    },
    ingredients3: {
        type: String,
    },
    ingredients4: {
        type: String,
        optional: true
    },
    ingredients5: {
        type: String,
        optional: true
    },
    describe: {
        type: String,
    },
    createdAt: {
        type: Date,
        optional: true

    },

});

Recipes.attachSchema(RecipeSchema);