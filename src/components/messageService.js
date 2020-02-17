import { Subject } from 'rxjs';

const subject = new Subject();

export const messageService = {
    sendMessage: message => subject.next({ text: message }),
    clearMessages: () => subject.next(),
    getMessage: () => subject.asObservable()
};

const listSubject = new Subject();
export const listView = {
    enableListView: message => listSubject.next({
        text: message
    }),
    clearMessages: () => listSubject.next(),
    getListView: () => listSubject.asObservable()
};

const getLabel = new Subject();
export const labelService = {
    sendAllLabelMessage: message => getLabel.next({ text: message }),
    clearMessages: () => getLabel.next(),
    getAllLabel: () => getLabel.asObservable()
};
