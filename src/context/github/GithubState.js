import React, { useReducer } from 'react';
import GithubContext from './githubContext';
import GithutReducer from './githubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from '../types';

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithutReducer, initialState);

  //Search users
  const searchUsers = async text => {
    setLoading();

    const res = await fetch(
      `https://api.github.com/search/users?q=${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    const data = await res.json();
    dispatch({
      type: SEARCH_USERS,
      payload: data.items,
    });
  };

  //Get user
  const getUser = async username => {
    setLoading();

    const res = await fetch(
      `https://api.github.com/users/${username}?client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    const data = await res.json();

    dispatch({
      type: GET_USER,
      payload: data,
    });
  };

  //Get repos
  const getUserRepos = async username => {
    setLoading();

    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created&direction=desc&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    const data = await res.json();

    dispatch({
      type: GET_REPOS,
      payload: data,
    });
  };

  //Clear users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  //Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
