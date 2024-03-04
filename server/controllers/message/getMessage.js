import Conversation from '../../models/conversationModel.js';

export const getMessage = async (req, res, next) => {
  try {
    const receiverId = req.params.id;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    }).populate('messages');

    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;

    res.status(200).json({ messages });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
