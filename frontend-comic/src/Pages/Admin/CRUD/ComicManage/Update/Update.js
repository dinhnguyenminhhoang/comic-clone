import { Button, Col, Form, Row } from "react-bootstrap";
import styles from "../ComicManage.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {
  updateComic,
  getAllComic,
  createComic_categories,
} from "~/redux/action/action";
import { useDropzone } from "react-dropzone";
import CoverImage from "~/Components/CoverImage/CoverImage";
import CreateCategoryForComic from "~/Components/CreateCategoryForComic/CreateCategoryForComic";
const cx = classNames.bind(styles);
function Update(props) {
  let { formData, handleSetIsUpdate } = props;
  const [imageData, setImageData] = useState("");
  const [isImage, setIsImage] = useState(false);
  const [form, setFormData] = useState(formData);
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    setFormData(formData);
  }, [formData]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...form, [name]: value });
  };
  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageData(reader.result);
      setFormData({ ...form, image: reader.result });
    };

    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
  });
  const handleUpdate = (event) => {
    event.preventDefault();
    const requiredFields = [
      "name",
      "author",
      "description",
      "image",
      "nickName",
    ];
    const isAllFieldsFilled = requiredFields.every(
      (field) => form[field].trim() !== ""
    );

    if (!isAllFieldsFilled) {
      toast.warning("😅 Vui lòng nhập đầy đủ thông tin", {
        position: "top-right",
        closeOnClick: true,
      });
      return;
    } else {
      dispatch(
        updateComic({
          id: form.id,
          name: form.name,
          author: form.author,
          description: form.description,
          image: form.image,
          nickName: form.nickName,
        })
      ).then(() => {
        dispatch(getAllComic());
        dispatch(
          createComic_categories({
            comicId: form.id,
            categoryId: category,
          })
        );
        setFormData({
          name: "",
          author: "",
          description: "",
          image: "",
          nickName: "",
        });
        setImageData("");
        toast.success("🤩 Chỉnh sửa thành công", {
          position: "top-right",
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        handleSetIsUpdate(false);
        setIsImage(false);
      });
    }
  };
  const handleIsImage = (isImage) => {
    setIsImage(isImage);
  };
  const handleCategories = (categories) => {
    setCategory(categories);
  };
  return (
    <>
      <h1 className={cx("mb-4", "header")}>Cập nhật truyện</h1>
      <div className={cx("from-container")}>
        <Row className={cx("mb-3")}>
          <Form.Group as={Col} controlId="name">
            <Form.Label>tên truyện:</Form.Label>
            <Form.Control
              className={cx("form-control-lg")}
              style={{ borderRadius: "10px" }}
              type="text"
              name="name"
              value={form.name}
              onChange={handleInputChange}
              placeholder="Nhập tên truyện"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="author">
            <Form.Label>Tên tác giả:</Form.Label>
            <Form.Control
              className={cx("form-control-lg")}
              style={{ borderRadius: "10px" }}
              type="text"
              name="author"
              value={form.author}
              onChange={handleInputChange}
              placeholder="Nhập tên tác giả"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="nickName">
            <Form.Label>Tên khác:</Form.Label>
            <Form.Control
              className={cx("form-control-lg")}
              style={{ borderRadius: "10px" }}
              type="text"
              name="nickName"
              value={form.nickName}
              onChange={handleInputChange}
              placeholder="Nhập tên khác"
            />
          </Form.Group>
        </Row>
        <Row className={cx("mb-3")}>
          <Form.Group className={cx("mb-3")} controlId="description">
            <Form.Label>Mô tả truyện:</Form.Label>
            <Form.Control
              as="textarea"
              className={cx("form-control-lg")}
              style={{ borderRadius: "10px" }}
              type="text"
              name="description"
              value={form.description}
              onChange={handleInputChange}
              placeholder="Nhập mô tả"
            />
          </Form.Group>
        </Row>
        <div
          className={cx("mb-3")}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {form.image && !isImage ? (
            <CoverImage base64Data={form.image} handleIsImage={handleIsImage} />
          ) : (
            <div
              {...getRootProps()}
              style={{ position: "relative" }}
              className={cx("upload__image")}
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Cập nhật avata mới</p>
              ) : (
                <p>Cập nhật avata mới</p>
              )}
              {imageData && (
                <img className={cx("avata")} src={imageData} alt="" />
              )}
            </div>
          )}
          <CreateCategoryForComic
            id={form.id}
            handleCategories={handleCategories}
          />
        </div>
        <Form onSubmit={handleUpdate}>
          <Row className="justify-content-center">
            <Col sm={2}>
              <Button variant="primary" type="submit" className="w-100">
                chỉnh sữa
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
      <ToastContainer limit={4} />
    </>
  );
}

export default Update;
