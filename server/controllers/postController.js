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
    } catch (error) {
      console.log(error);
      res.send({ status: "failed", message: "Unable to post" });
    }
  };

  static getAllSecretMessages = async (req, res) => {
    try {
      const allMessages = await MessageModel.find();
      res.status(200).send({
        status: "success",
        message: "Retrieved All Messages Successfully",
        messages: allMessages,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        status: "failed",
        message: "Unable to retrieve messages. Internal Server Error.",
      });
    }
  };
}

export default postController;
