import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { IChatServiceClient as _chat_IChatServiceClient, IChatServiceDefinition as _chat_IChatServiceDefinition } from './chat/IChatService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  chat: {
    IChatService: SubtypeConstructor<typeof grpc.Client, _chat_IChatServiceClient> & { service: _chat_IChatServiceDefinition }
    Message: MessageTypeDefinition
    SendMessageRequest: MessageTypeDefinition
    SendMessageResponse: MessageTypeDefinition
  }
}

