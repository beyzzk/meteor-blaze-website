import { Random } from "meteor/random";

Template.publicModalsCommentUpdate.events({
    "submit form": function (event, template) {
        event.preventDefault();

        const comment = AppUtil.temp.get("comment");
        console.log(comment);

        const title = event.target.title.value;
        const explanation = event.target.explanation.value;
        const obj = {
            _id: comment._id,
            comment: { title, explanation },
        };

        Meteor.call("comments.update", obj, function (error, result) {
            if (error) {
                console.log("hata:", error);
                //comment error handling
                return;
            }
            $("#publicModalsCommentUpdateModal").modal("hide");
            AppUtil.refreshTokens.set("comments", Random.id());
        });
    },
});
