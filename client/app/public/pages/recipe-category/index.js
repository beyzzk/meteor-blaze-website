import { FlowRouter } from "meteor/ostrio:flow-router-extra";

Template.pagesRecipeDetails.onCreated(function () {
  this.state = new ReactiveDict(null, {
    recipe: null,
  });
});

Template.pagesRecipeDetails.onRendered(function () {
  const self = this;

  this.autorun(function () {
    const recipeCategory = FlowRouter.getParam("recipeCategory");

    Meteor.call(
      "recipes.show",
      { category: recipeCategory },
      function (error, result) {
        if (error) {
          console.log("error", error);
        }
        console.log("result: ", result);
        self.state.set("recipe", result.recipe);
      }
    );
  });
});
