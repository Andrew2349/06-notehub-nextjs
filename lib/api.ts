import axios from "axios";
// import type { CreateNoteRequest, Note } from "../types/note";


const myKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

export interface Note{
    id: string,
    title: string,
    content: string,
    tag:"Todo" | "Work" | "Personal" | "Meeting" | "Shopping"
}


export interface CreateNoteRequest{
    title: string,
    content: string,
    tag:"Todo" | "Work" | "Personal" | "Meeting" | "Shopping"
}


interface FetchNotesResponse{
    notes: Note[],
    totalPages:number
}


export async function fetchNotes(search:string,page:number): Promise<FetchNotesResponse> {
    const response = await axios.get<FetchNotesResponse>("https://notehub-public.goit.study/api/notes", {params: {
      search: search,
      page: page,
      perPage:12
  },
  headers: {
    Authorization: `Bearer ${myKey}`,
  }
    })
    return response.data
}

export async function createNote(payload:CreateNoteRequest) {
  const response = await axios.post<Note>("https://notehub-public.goit.study/api/notes", payload,
    {
      headers: {
        Authorization: `Bearer ${myKey}`,
      },
    })
  return response.data
}

export async function deleteNote(noteId: string) {
  const responce = await axios.delete<Note>(`https://notehub-public.goit.study/api/notes/${noteId}`, {
    
  headers: {
        Authorization: `Bearer ${myKey}`,
    },
  })
  return responce.data
  
}

export async function fetchNoteById(noteId: string) {
  const response = await axios.get<Note>(`https://notehub-public.goit.study/api/notes/${noteId}`,{
    
  headers: {
        Authorization: `Bearer ${myKey}`,
    },
  })
  return response.data
}