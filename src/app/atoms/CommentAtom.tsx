import { atom } from "recoil";

let arr = []

if(localStorage.newComm) {
    arr = JSON.parse(localStorage.newComm)
}
// console.log('hereee' , arr )
const CommentAtom = atom({
    key: 'textState',
    default: arr,
});

export default CommentAtom