import { FlowRouter } from "meteor/ostrio:flow-router-extra";

FlowRouter.route("/", {
  name: "public.home",
  action: function (params, queryParams) {
    this.render("publicLayoutsDefault", { page: "pagesHome" });
  },
});

FlowRouter.route("/about", {
  name: "public.about",
  action: function (params, queryParams) {
    this.render("publicLayoutsDefault", { page: "pagesAbout" });
  },
});

FlowRouter.route("/comments", {
  name: "public.comments",
  action: function (params, queryParams) {
    this.render("publicLayoutsDefault", { page: "pagesComments" });
  },
});

FlowRouter.route("/recipes", {
  name: "public.recipes",
  action: function (params, queryParams) {
    this.render("publicLayoutsDefault", { page: "pagesRecipes" });
  },
});

FlowRouter.route("/recipe-details/:recipeId", {
  name: "public.recipe-details",
  action: function (params, queryParams) {
    this.render("publicLayoutsDefault", { page: "pagesRecipeDetails" });
  },
});

FlowRouter.route("/recipe-category", {
  name: "public.recipe-category",
  action: function (params, queryParams) {
    this.render("publicLayoutsDefault", { page: "pagesRecipeCategory" });
  },
});
