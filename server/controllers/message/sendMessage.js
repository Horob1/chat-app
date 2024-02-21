import Message from '../../models/messageModel.js';
import Conversation from './../../models/conversationModel.js';
const sendMessage = async (req, res) => {
  try {
    const { message, conversationId, receiverId } =
      req.body;
    const senderId = req.user._id;
    let conversation;
    if (conversationId)
      conversation = await Conversation.findById(
        conversationId
      );
    if (!conversation || !conversationId) {
      conversation = new Conversation({
        participants: [senderId, receiverId],
        isChatGroup: false,
      });
      await conversation.save();
    }
    const newMessage = new Message({
      senderId,
      conversationId: conversation?._id,
      message,
      conversation,
    });
    await newMessage.save();
    if (conversationId && conversation)
      return res.status(201).json({
        message: newMessage,
      });
    else
      return res.status(201).json({
        message: newMessage,
        conversation: conversation,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default sendMessage;
