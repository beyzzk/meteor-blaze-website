Template.pagesRecipes.onCreated(function () {
    this.state = new ReactiveDict(null, {
        recipes: [],
    });
});

Template.pagesRecipes.onRendered(function () {
    const self = this;

    this.autorun(function () {
        AppUtil.refreshTokens.get("recipes");

        Meteor.call("recipes.list", {}, function (error, result) {
            if (error) {
                console.log("hata:", error);
                return;
            }

            console.log("result: ", result.data);
            self.state.set("recipes", result.data);
        });
    });
});

Template.pagesRecipes.events({
    "click .recipe-create": function (event, template) {
        template.$("#publicModalsRecipeCreateModal").modal("show");
    },
});

Template.pagesRecipes.helpers({
    capitalizeFirstLetter: function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
});



