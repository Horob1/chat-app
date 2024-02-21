import Conversation from '../../models/conversationModel.js';
import Message from '../../models/messageModel.js';

const getConversation = async (req, res, next) => {
  try {
    const conversationId = req.params.conversationId;
    const conversation = await Conversation.findById(
      conversationId
    );
    if (!conversation) {
      return res.status(404).json({
        error: 'Conversation not found',
      });
    }
    const messages = await Message.find({
      conversationId: conversation._id,
    });
    if (!messages)
      return res.status(200).json({ conversation: [] });
    return res.status(200).json({ conversation: messages });
  } catch (error) {}
};

export default getConversation;
