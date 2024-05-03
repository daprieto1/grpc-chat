// @ts-ignore
import path from "path";
import * as fs from 'fs';
import * as protoLoader from "@grpc/proto-loader";
import * as grpc from "@grpc/grpc-js";
import {Empty} from "google-protobuf/google/protobuf/empty_pb";
import { ProtoGrpcType } from "./proto/chat";

const PORT = 8082
const PROTO_FILE = './proto/chat.proto'

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType

const channelCredentials = grpc.credentials.createInsecure();
const client = new grpcObj.chat.IChatService(
    `0.0.0.0:${PORT}`, channelCredentials
)

const deadline = new Date()
deadline.setSeconds(deadline.getSeconds() + 5)
client.waitForReady(deadline, (err) => {
    if (err) {
        console.error(err)
        return
    }
    onClientReady()
})

const sendMessage = () => {
    

    const stream = client.SendMessage();
    
    stream.on("data", (response) => {        
        console.log(`message: ${response.message.text}`)
    });
    stream.on("error", (err) => console.log('error'));
    stream.on("end", () => console.log(`end chat`));

    const text = 'Hi'
    console.log('Client says:' + text)
    stream.write({ message: { text }});
    stream.end();
}

function onClientReady() {
    sendMessage();
}
