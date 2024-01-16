import MessageModel from "../models/post.js";

class postController {
  static sendPost = async (req, res) => {
    const { message } = req.body;
    try {
      const newPost = await MessageModel.create({ message });
      res.status(200).send({
        status: "success",
        message: "Posted Successfully",
        post: newPost,
      });
    } catch(error) {
      console.log(error);
      res.send({ status: "failed", message: "Unable to post" });
    }
  };
}

export default postController;
