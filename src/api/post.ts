// src/api/posts.ts

// API 호출 라이브러리
import axios from 'axios';

// 환경 변수에서 가져온 주소 값
const API_ROUTE = process.env.REACT_APP_API_ROUTE;
const API_URL = `${API_ROUTE}/api/posts`;

// 게시글의 타입 정의
export interface Post {
    id: number;
    title: string;
    content: string;
    author: string;
    createdAt: string;
}

// 모든 게시글 가져오기
export const getAllPosts = async () => {
    return await axios.get<Post[]>(API_URL);
};

// 특정 게시글 가져오기
export const getPostById = async (id: number) => {
    return await axios.get<Post>(`${API_URL}/${id}`);
};

// 게시글 작성하기
export const createPost = async (post: Omit<Post, 'id' | 'createdAt'>) => {
    return await axios.post<Post>(API_URL, post);
};

// 게시글 수정하기
export const updatePost = async (id: number, post: Omit<Post, 'id' | 'createdAt'>) => {
    return await axios.put<Post>(`${API_URL}/${id}`, post);
};

// 게시글 삭제하기
export const deletePost = async (id: number) => {
    return await axios.delete(`${API_URL}/${id}`);
};
