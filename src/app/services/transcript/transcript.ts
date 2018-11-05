export interface Transcript {
    conversation?: Conversation;
    id?: string;
    timestamp?: string;
    type?: string;
    channelID?: string;
    membersAdded?: From[];
    membersRemoved?: any[];
    recipient?: From;
    from?: From;
    text?: string;
    attachments?: Attachment[];
}

export interface Attachment {
    contentType?: string;
    content?: any;
}

export interface Conversation {
    id?: string;
}

export interface From {
    id?: string;
    name?: string;
    role?: Role;
}

export enum Role {
    Bot = 'bot',
    User = 'user',
}
