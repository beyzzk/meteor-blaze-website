import Swal from "sweetalert2";
import { Random } from "meteor/random";

Template.pagesComments.onCreated(function () {
    this.state = new ReactiveDict(null, {
        comments: [],
    });
});

Template.pagesComments.onRendered(function () {
    const self = this;

    this.autorun(function () {
        AppUtil.refreshTokens.get("comments");

        Meteor.call("comments.list", {}, function (error, result) {
            if (error) {
                console.log("hata:", error);
                return;
            }

            console.log("result: ", result.data);
            self.state.set("comments", result.data);
        });
    });
});

Template.pagesComments.events({
    "click .comment-create": function (event, template) {
        template.$("#publicModalsCommentCreateModal").modal("show");
    },

    "click .comment-update": function (event, template) {
        console.log(this);
        AppUtil.temp.set("comment", this);
        template.$("#publicModalsCommentUpdateModal").modal("show");
    },

    "click .comment-delete": function (event, template) {
        const comment = this;

        Swal.fire({
            title: "Are you sure you want to delete this?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#AB47BC",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                Meteor.call(
                    "comments.delete",
                    { _id: comment._id },
                    function (error, result) {
                        if (error) {
                            console.log("hata:", error);
                            //comment error handling
                            return
                        }

                        AppUtil.refreshTokens.set("comments", Random.id());
                    }
                );
            }
        });
    },
});
