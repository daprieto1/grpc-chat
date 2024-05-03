import { IChatServiceHandlers } from "../proto/chat/IChatService";
import {    
    ServerDuplexStream,    
} from "@grpc/grpc-js";
import { SendMessageRequest, SendMessageRequest__Output } from "../proto/chat/SendMessageRequest";
import { SendMessageResponse } from "../proto/chat/SendMessageResponse";

const ChatService: IChatServiceHandlers = {    
    SendMessage(call: ServerDuplexStream<SendMessageRequest__Output, SendMessageResponse>): void {
        call.on("data", (request: SendMessageRequest) => {
            if (request.message) {                
                call.write({ message: { text: "Server says:" + request.message.text } });
            }
        });

        call.on("end", () => {
            console.log(`communication end`);
            call.end();
        });
    }
}

export {
    ChatService,
}
