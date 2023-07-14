import { Random } from "meteor/random";

Template.publicModalsCommentCreate.events({
    "submit form": function (event, template) {
        event.preventDefault();

        const title = event.target.title.value;
        const explanation = event.target.explanation.value;

        const obj = {
            comment: { title, explanation },
        };


        Meteor.call("comments.create", obj, function (error, result) {
            template.$("#publicModalsCommentCreateModal").modal("hide");

            AppUtil.refreshTokens.set("comments", Random.id());
            event.target.reset();
        });

    },
});
