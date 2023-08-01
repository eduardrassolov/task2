import { INote } from "../interfaces/INote";

export const data: Array<INote> = [
  {
    id: "1",
    name: "Note1",
    created: "2021-01-01",
    content: `Im gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021`,
    category: "idea",
  },
  {
    id: "2",
    name: "Note2",
    created: "2021-01-01",
    content: `Im gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021`,
    category: "random",
  },
  {
    id: "3",
    name: "Task",
    created: "2021-01-05",
    content: `Im gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2022`,
    category: "task",
  },
  {
    id: "4",
    name: "Quote",
    created: "2021-01-05",
    content: `Im gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2022`,
    category: "quote",
  },
];
