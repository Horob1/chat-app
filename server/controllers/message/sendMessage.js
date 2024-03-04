import Message from '../../models/messageModel.js';
import Conversation from './../../models/conversationModel.js';
const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const senderId = req.user._id;
    const receiverId = req.params.id;

    let conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      message,
      senderId,
      receiverId,
    });
    await newMessage.save();

    if (newMessage) {
      conversation.messages.push(newMessage);
    }

    await conversation.save();

    res.status(201).json({
      newMessage: newMessage,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default sendMessage;
