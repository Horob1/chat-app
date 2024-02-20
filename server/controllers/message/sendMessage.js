import Conversation from './../../models/conversationModel.js';
const sendMessage = async (req, res) => {
  try {
    // const { message } = req.body;
    // const { conversationId } = req.params;
    // const senderId = req.user.id;
    // console.log(conversationId);
    // let conversation = await Conversation.findById(
    //   conversationId
    // );
    // if (!conversation)
    //   conversation = await Conversation.create({});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default sendMessage;
