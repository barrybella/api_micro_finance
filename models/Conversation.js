const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var conversationSchema = new mongoose.Schema({
    ingenieur_id: { type: Schema.Types.ObjectId, ref: 'Prospection' },
    user_id: { type: Schema.Types.ObjectId, ref: 'Utilisateur' },

        contenu: {
            type: String,
            default:'0'
        },
        status: {
            type: Number,
            default: 0
        },
        delete: {
            type: Number,
            default: 0
        }
        }, 
    {
    collection: 'conversations',
    timestamps: true
  });

module.exports = mongoose.model('Conversation', conversationSchema);
