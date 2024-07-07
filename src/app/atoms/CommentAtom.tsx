import { atom } from "recoil";

let arr = []

if(localStorage.newComm) {
    arr = JSON.parse(localStorage.newComm)
}

const CommentAtom = atom({
    key: 'textState',
    default: arr,
});

export default CommentAtom