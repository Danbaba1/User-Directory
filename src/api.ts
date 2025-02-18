import { UserListResponse } from './types';

export const fetchUsers = async (): Promise<UserListResponse> => {
  const response = await fetch('https://dummyjson.com/users?limit=20');
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return response.json();
};