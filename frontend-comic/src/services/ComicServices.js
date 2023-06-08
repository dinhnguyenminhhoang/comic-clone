import axios from "../utils/instance";
const handleGetCategory = () => {
  return axios.get(`/api/getCetagory`);
};
const handleGetTopComic = (limit) => {
  return axios.get(`/api/getComic?limit=${limit}`);
};
const handleGetAllComic = () => {
  return axios.get(`/api/getAllComic`);
};
const handleGetPagination = (pageNumber, pageSize) => {
  return axios.get(
    `/api/getPagination?pageNumber=${pageNumber}&pageSize=${pageSize}`
  );
};
const handleGetComicById = (id) => {
  return axios.get(`/api/getComicById?id=${id}`);
};
const handleGetChapterById = (id) => {
  return axios.get(`/api/getChapterById?id=${id}`);
};
const handleGetComicByCategory = (categoryId) => {
  return axios.get(`/api/getComicByCategory?categoryId=${categoryId}`);
};
const handleGetCategoriesByComic = (comicId) => {
  return axios.get(`/api/getCategoriesByComic?comicId=${comicId}`);
};
const handlerGetOnlyChapterById = (chapterId, comicId) => {
  return axios.get(
    `/api/getOnlyChapterbyId?chapterId=${chapterId}&comicId=${comicId}`
  );
};
const handleGetUserInfo = (email) => {
  return axios.get(`/api/get-infoUser?email=${email}`);
};
const handleLogin = (data) => {
  return axios.post(`/api/auth/login`, data);
};
const handleGetTotalUser = () => {
  return axios.get(`/api/getTotalUser`);
};
const handleGetTotalComic = () => {
  return axios.get(`/api/getTotalComic`);
};
const handleGetTotalChapter = () => {
  return axios.get(`/api/getTotalChapter`);
};
const handleGetComicFollow = (userId) => {
  return axios.get(`/api/get-follow?userId=${userId}`);
};
//post
const handleCreateComic = (data) => {
  return axios.post(`/api/create-comic`, data);
};
const handleCreateChapter = (data) => {
  return axios.post(`/api/create-chapter`, data);
};
const handleCreateComic_Categories = (data) => {
  return axios.post(`/api/create-categories-comic`, data);
};
const handleCreateUser = (data) => {
  return axios.post(`/api/create-user`, data);
};
const handleCreateFollow = (data) => {
  return axios.post(`/api/create-follow`, data);
};
//put
const handleUpdateViews = (comicId) => {
  return axios.put(`/api/update-views?comicId=${comicId}`);
};
const handleUpdateTimePass = (comicId) => {
  return axios.put(`/api/day-update?comicId=${comicId}`);
};
export {
  handleGetCategory,
  handleGetTopComic,
  handleGetAllComic,
  handleGetPagination,
  handleGetComicById,
  handleGetChapterById,
  handleGetComicByCategory,
  handleGetCategoriesByComic,
  handlerGetOnlyChapterById,
  handleLogin,
  handleGetUserInfo,
  handleGetTotalUser,
  handleGetTotalComic,
  handleGetTotalChapter,
  handleGetComicFollow,
  //
  handleCreateComic,
  handleCreateChapter,
  handleCreateComic_Categories,
  handleCreateUser,
  handleCreateFollow,
  //
  handleUpdateViews,
  handleUpdateTimePass,
};
