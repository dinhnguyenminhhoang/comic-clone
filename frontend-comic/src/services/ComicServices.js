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
  //
  handleCreateComic,
  handleCreateChapter,
  handleCreateComic_Categories,
  //
  handleUpdateViews,
  handleUpdateTimePass,
};
