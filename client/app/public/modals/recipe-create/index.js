import { Random } from "meteor/random";
Template.publicModalsRecipeCreate.onCreated(function () {
    this.state = new ReactiveDict(null, {
        base64RP: null,
    });

    this.getBase64 = function (file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                resolve(reader.result);
            };
            reader.onerror = function (error) {
                reject(error);
            };
        });
    };
});

Template.publicModalsRecipeCreate.events({
    "submit form": function (event, template) {
        event.preventDefault();

        const base64RP = template.state.get("base64RP");
        const name = event.target.name.value;
        const category = event.target.category.value;
        const ingredients1 = event.target.ingredients1.value;
        const ingredients2 = event.target.ingredients2.value;
        const ingredients3 = event.target.ingredients3.value;
        const ingredients4 = event.target.ingredients4.value;
        const ingredients5 = event.target.ingredients5.value;
        const describe = event.target.describe.value

        const obj = {
            recipe: {
                base64RP,
                name,
                category,
                ingredients1,
                ingredients1,
                ingredients2,
                ingredients3,
                ingredients4,
                ingredients5,
                describe
            },
        };
        console.log(obj);

        Meteor.call("recipes.create", obj, function (error, result) {
            $("#publicModalsRecipeCreateModal").modal("hide");

            AppUtil.refreshTokens.set("recipes", Random.id());
        });
        event.target.reset()
    },

    "change #publicModalsRecipeCreateInputImage": async function (
        event,
        template
    ) {
        console.log(event.target.files);
        template.state.set(
            "base64RP",
            await template.getBase64(event.target.files[0])
        );
    },
});



