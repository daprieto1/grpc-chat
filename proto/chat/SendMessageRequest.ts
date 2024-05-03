// Original file: proto/chat.proto

import type { Message as _chat_Message, Message__Output as _chat_Message__Output } from '../chat/Message';

export interface SendMessageRequest {
  'message'?: (_chat_Message | null);
}

export interface SendMessageRequest__Output {
  'message'?: (_chat_Message__Output);
}
