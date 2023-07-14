import { FlowRouter } from "meteor/ostrio:flow-router-extra";

Template.pagesRecipeDetails.onCreated(function () {
    this.state = new ReactiveDict(null, {
        recipe: null,
    });
});

Template.pagesRecipeDetails.onRendered(function () {
    const self = this;

    this.autorun(function () {
        const recipeId = FlowRouter.getParam("recipeId");

        Meteor.call("recipes.show", { _id: recipeId }, function (error, result) {
            if (error) {
                console.log("error", error);
            }
            console.log("result: ", result);
            self.state.set("recipe", result.recipe);
        });
    });
});

Template.pagesRecipeDetails.helpers({
    capitalizeFirstLetter: function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
});
