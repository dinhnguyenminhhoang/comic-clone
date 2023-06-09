import classNames from "classnames/bind";
import styles from "./DetailComic.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { icon } from "~/assets/images";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import {
  getComicById,
  getChapterById,
  getCategoriesByComic,
  createFollow,
  getFollowByComic,
} from "~/redux/action/action.js";
import {
  faCircleExclamation,
  faEye,
  faHeart,
  faHomeAlt,
  faList,
  faPlus,
  faSignal,
  faSignature,
  faStrikethrough,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import coverBase64ToBlob from "~/utils/coverBase64ToBlob";
import Comment from "~/Components/Comment/Comment";
import calculateTimePassed from "~/utils/timePass.js";
const cx = classNames.bind(styles);
function DetailComic() {
  const [height, setHeight] = useState(0);
  const { id } = useParams();
  const refDescription = useRef();
  const [isHeight, setIsHeight] = useState(true);
  const [isFollow, setIsFollow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const comicById = useSelector((state) => state.comicById.data);
  const chapterById = useSelector((state) => state.chapterById.data);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userInfo = useSelector((state) => state.userInfo.data);
  const followByComic = useSelector((state) => state.followByComic.data);
  const categoriesByComicData = useSelector(
    (state) => state.categoriesByComic.data
  );
  useEffect(() => {
    dispatch(getComicById(id));
    dispatch(getChapterById(id));
    dispatch(getCategoriesByComic(id));
    dispatch(getFollowByComic(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (refDescription.current) setHeight(refDescription.current.offsetHeight);
  }, [refDescription]);
  const handleHeightDes = (e) => {
    const newHeight = isHeight ? "100%" : "100px";
    const newText = isHeight ? "rút gọn" : "xem thêm";
    refDescription.current.style.height = newHeight;
    e.target.textContent = newText;
    setIsHeight(!isHeight);
  };
  const handleBackHistory = () => {
    navigate(-1);
  };
  useEffect(() => {
    if (chapterById && chapterById.data) {
      calculateTimePassed(chapterById.data);
    }
  });
  const handleFollowing = (comicId) => {
    if (userInfo && userInfo.user && userInfo.user.id && comicId) {
      dispatch(
        createFollow({
          userId: userInfo.user.id,
          comicId,
        })
      ).then(() => dispatch(getFollowByComic(id)));
      setIsFollow(true);
    }
  };
  return (
    <div className={cx("detail__doctor")}>
      {comicById?.data && (
        <Helmet>
          <meta charSet="utf-8" />
          <title>{comicById.data.name || "truyện hay"}</title>
          <link rel="icon" href={icon} />
        </Helmet>
      )}
      <div className={cx("detail__container")}>
        {comicById && comicById.errCode === 0 && (
          <div>
            <div className={cx("detail__heading")}>
              <div onClick={handleBackHistory} className={cx("detail-home")}>
                <FontAwesomeIcon icon={faHomeAlt} className={cx("icon")} />
                <span className={cx("home__page--title")}>Trang chủ /</span>
              </div>
              <span className={cx("home__page--title")}>
                {comicById.data.name}
              </span>
            </div>
            <div className={cx("content__container")}>
              <div className={cx("content__image")}>
                <img src={coverBase64ToBlob(comicById.data.image)} alt="test" />
                {!isFollow && isLoggedIn && (
                  <div className={cx("content__follow")}>
                    <button
                      className={cx("follow-btn")}
                      onClick={() => handleFollowing(comicById.data.id)}
                    >
                      <FontAwesomeIcon icon={faPlus} className={cx("icon")} />
                      Follow
                    </button>
                  </div>
                )}
              </div>
              <div className={cx("content__info")}>
                <span className={cx("info__name")}>{comicById.data.name}</span>
                <div className={cx("info__details")}>
                  <div className={cx("datails__title")}>
                    <div className={cx("title__wrapper")}>
                      <div className={cx("title-name")}>
                        <FontAwesomeIcon
                          className={cx("title-icon")}
                          icon={faSignature}
                        />
                        <span className={cx("title__text")}>Tên khác</span>
                      </div>
                      <span className={cx("title__content")}>
                        {comicById.data.nickName}
                      </span>
                    </div>
                    <div className={cx("title__wrapper")}>
                      <div className={cx("title-name")}>
                        <FontAwesomeIcon
                          className={cx("title-icon")}
                          icon={faUser}
                        />
                        <span className={cx("title__text")}>Tác giả</span>
                      </div>
                      <span className={cx("title__content")}>
                        {comicById.data.author}
                      </span>
                    </div>
                    <div className={cx("title__wrapper")}>
                      <div className={cx("title-name")}>
                        <FontAwesomeIcon
                          className={cx("title-icon")}
                          icon={faSignal}
                        />
                        <span className={cx("title__text")}>Tình trạng</span>
                      </div>
                      <span className={cx("title__content")}>
                        Đang Cập Nhật
                      </span>
                    </div>
                    <div className={cx("title__wrapper")}>
                      <div className={cx("title-name")}>
                        <FontAwesomeIcon
                          className={cx("title-icon")}
                          icon={faHeart}
                        />
                        <span className={cx("title__text")}>Lượt theo dõi</span>
                      </div>
                      {followByComic && (
                        <span className={cx("title__content")}>
                          {followByComic.data}
                        </span>
                      )}
                    </div>
                    <div className={cx("title__wrapper")}>
                      <div className={cx("title-name")}>
                        <FontAwesomeIcon
                          className={cx("title-icon")}
                          icon={faEye}
                        />
                        <span className={cx("title__text")}>Lượt xem</span>
                      </div>
                      <span className={cx("title__content")}>
                        {comicById.data.views}
                      </span>
                    </div>{" "}
                    <div className={cx("title__wrapper")}>
                      <div className={cx("title-name")}>
                        <FontAwesomeIcon
                          className={cx("title-icon")}
                          icon={faStrikethrough}
                        />
                        <span className={cx("title__text")}>Thể Loại </span>
                      </div>
                      <span className={cx("title__content")}>
                        <ul className={cx("list-action")}>
                          {categoriesByComicData?.categories?.map(
                            (category, index) => (
                              <li key={index}>
                                <Link to={`/categories/${category.id}`}>
                                  {category.name}
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      </span>
                    </div>
                  </div>
                </div>
                <div className={cx("read__type")}>
                  {comicById?.data && chapterById?.data ? (
                    <Link
                      to={`/reading/${comicById.data.name}/${
                        comicById.data.id
                      }/${chapterById.data[chapterById.data.length - 1].id}`}
                    >
                      <button
                        className={cx("read__btn--first")}
                        dangerouslySetInnerHTML={{
                          __html: "đọc từ đầu",
                        }}
                      />
                    </Link>
                  ) : (
                    ""
                  )}
                  {comicById?.data && chapterById?.data ? (
                    <Link
                      to={`/reading/${comicById.data.name}/${comicById.data.id}/${chapterById.data[0].id}`}
                    >
                      <button
                        className={cx("read__btn--new")}
                        dangerouslySetInnerHTML={{
                          __html: "đọc mới nhất",
                        }}
                      />
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className={cx("description__container")} ref={refDescription}>
              <div className={cx("description__heading")}>
                <FontAwesomeIcon icon={faCircleExclamation} />
                <span className={cx("introduce")}>Giới thiệu</span>
              </div>
              <span className={cx("description__content")}>
                {comicById.data.description}
              </span>
            </div>
            <div>
              {height >= 100 && (
                <button
                  type="button"
                  className={cx("btn-description")}
                  onClick={(e) => {
                    handleHeightDes(e);
                  }}
                >
                  rút gọn
                </button>
              )}
            </div>
          </div>
        )}
        <div className={cx("chapter__container")}>
          <div className={cx("chapter__title")}>
            <FontAwesomeIcon icon={faList} />
            <span className={cx("title__list")}>Danh sách chương</span>
          </div>
          <div className={cx("list__chapter")}>
            {chapterById &&
              chapterById.errCode === 0 &&
              chapterById.data.length > 0 &&
              chapterById.data.map((chapter, index) => {
                return (
                  <div key={index}>
                    {comicById && comicById.data ? (
                      <div className={cx("chapter__item")}>
                        <Link
                          to={`/reading/${comicById.data.name}/${comicById.data.id}/${chapter.id}`}
                        >
                          Chương {chapter.numericalOrder}
                        </Link>
                        <div>
                          {
                            calculateTimePassed(chapterById.data)[index]
                              .timePassed
                          }
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
            {chapterById && chapterById.errCode === 1 && (
              <div className={cx("no-chapter")} key={chapterById.errCode}>
                <span> {chapterById.message}</span>
              </div>
            )}
          </div>
        </div>
        <Comment comicId={id} />
      </div>
    </div>
  );
}

export default DetailComic;
