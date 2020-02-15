import { Subject } from 'rxjs';

const subject = new Subject();

export const messageService = {
    sendMessage: message => subject.next({ text: message }),
    clearMessages: () => subject.next(),
    getMessage: () => subject.asObservable()
};

const getLabel = new Subject();
export const labelService = {
    sendMessage: message => getLabel.next({ text: message }),
    clearMessages: () => getLabel.next(),
    getMessage: () => getLabel.asObservable()
};

// const gridlist = new Subject();
// export const listView = {
//     sendMessage: message => gridlist.next({ text: message }),
//     clearMessages: () => gridlist.next(),
//     getMessage: () => gridlist.asObservable()
// };

const listSubject = new Subject();
export const listView = {
    enableListView: message => listSubject.next({
        text: message
    }),
    clearMessages: () => listSubject.next(),
    getListView: () => listSubject.asObservable()
};