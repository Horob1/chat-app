import mongoose from 'mongoose';

const conversationSchemal = new mongoose.Schema(
  {
    participants: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    ],
    isChatGroup: {
      type: Boolean,
      default: false,
    },
    photo: {
      type: String,
      default:
        'https://avatar.iran.liara.run/username?username=group',
    },
    name: { type: String, default: 'New Group Chat' },
  },

  { timestamps: true }
);

const Conversation = mongoose.model(
  'Conversation',
  conversationSchemal
);

export default Conversation;
