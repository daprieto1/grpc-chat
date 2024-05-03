// Original file: proto/chat.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { SendMessageRequest as _chat_SendMessageRequest, SendMessageRequest__Output as _chat_SendMessageRequest__Output } from '../chat/SendMessageRequest';
import type { SendMessageResponse as _chat_SendMessageResponse, SendMessageResponse__Output as _chat_SendMessageResponse__Output } from '../chat/SendMessageResponse';

export interface IChatServiceClient extends grpc.Client {
  SendMessage(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_chat_SendMessageRequest, _chat_SendMessageResponse__Output>;
  SendMessage(options?: grpc.CallOptions): grpc.ClientDuplexStream<_chat_SendMessageRequest, _chat_SendMessageResponse__Output>;
  sendMessage(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_chat_SendMessageRequest, _chat_SendMessageResponse__Output>;
  sendMessage(options?: grpc.CallOptions): grpc.ClientDuplexStream<_chat_SendMessageRequest, _chat_SendMessageResponse__Output>;
  
}

export interface IChatServiceHandlers extends grpc.UntypedServiceImplementation {
  SendMessage: grpc.handleBidiStreamingCall<_chat_SendMessageRequest__Output, _chat_SendMessageResponse>;
  
}

export interface IChatServiceDefinition extends grpc.ServiceDefinition {
  SendMessage: MethodDefinition<_chat_SendMessageRequest, _chat_SendMessageResponse, _chat_SendMessageRequest__Output, _chat_SendMessageResponse__Output>
}
