import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../../components/Modal";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const [categoryData, setCategoryData] = useState({
    name: "",
  });

  const [addNewModal, setAddNewModal] = useState(false);
  const [editCategoryModal, setEditCategoryModal] = useState(false);
  const [deleteCategoryModal, setDeleteCategoryModal] = useState(false);

  useEffect(() => {
    axios
      .get("https://localhost:7143/api/Categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const addCategory = (e) => {
    console.log(categoryData);

    e.preventDefault();

    axios
      .post(`https://localhost:7143/api/Categories`, categoryData)
      .then((response) => {
        console.log("Category added successfully: ", response.data);
        setCategories((prevCategories) => [...prevCategories, response.data]);
        setCategoryData({
          name: "",
        });
      })
      .catch((error) => {
        console.error("Error adding category: ", error);
      });

    setAddNewModal(false);
  };

  const deleteCategory = (id) => {
    axios
      .delete(`https://localhost:7143/api/Categories/${id}`)
      .then(() => {})
      .catch((error) => {
        console.error("Error deleting category:", error);
      });
  };

  const saveEdit = (id) => {
    axios
      .put(`https://localhost:7143/api/Categories/${id}`, categoryData)
      .then(() => {
        setCategoryData({
          name: "",
        });
      })
      .catch((error) => {
        console.error("Error adding category:", error);
      });

    setEditCategoryModal(false);
  };

  const openModal = () => {
    setAddNewModal(true);
  };

  const closeModal = () => {
    setAddNewModal(false);
  };

  const openEditModal = (id) => {
    axios
      .get(`https://localhost:7143/api/Categories/${id}`)
      .then((response) => {
        setCategoryData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching category data: ", error);
      });
    setEditCategoryModal(true);
  };

  const closeEditModal = () => {
    setEditCategoryModal(false);
  };

  const openDeleteModal = () => {
    setDeleteCategoryModal(true);
  };

  const closeDeleteModal = (isDelete = false, id = 0) => {
    if (isDelete === true) deleteCategory(id);

    setDeleteCategoryModal(false);
  };

  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setCategoryData((prevCategoryData) => ({
      ...prevCategoryData,
      [name]: value,
    }));
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setCategoryData((prevCategoryData) => ({
      ...prevCategoryData,
      [name]: value,
    }));
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 max-h-full">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Categories
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the categories in your account including their name,
            title, email and role.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            onClick={openModal}
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add category
          </button>
          <Modal
            isOpen={addNewModal}
            onClose={closeModal}
            title="Add new Category"
          >
            <form onSubmit={addCategory}>
              <div className="relative p-6 flex-auto">
                <div className="border-gray-900/10 pb-12">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Personal Information
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Use a permanent address where you can receive mail.
                  </p>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        First name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          autoComplete="given-name"
                          required
                          onChange={handleAddChange}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Add Category
                </button>
              </div>
            </form>
          </Modal>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Name
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    Action
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {categories.map((category) => (
                  <tr key={category.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {category.name}
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0 flex justify-around">
                      <button
                        onClick={() => openEditModal(category.id)}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </button>
                      <Modal
                        isOpen={editCategoryModal}
                        onClose={closeEditModal}
                        title="Edit category"
                      >
                        <form onSubmit={saveEdit}>
                          <div className="relative p-6 flex-auto">
                            <div className=" border-gray-900/10 pb-12">
                              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="name"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Name
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      type="text"
                                      name="name"
                                      id="name"
                                      autoComplete="name"
                                      defaultValue={category.name}
                                      onChange={handleEditChange}
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                            <button
                              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={closeEditModal}
                            >
                              Close
                            </button>
                            <button
                              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="submit"
                              onClick={() => saveEdit(category.id)}
                            >
                              Save Changes
                            </button>
                          </div>
                        </form>
                      </Modal>
                      <button
                        onClick={openDeleteModal}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Delete
                      </button>
                      <Modal
                        isOpen={deleteCategoryModal}
                        title="Delete Category"
                      >
                        <div className="relative p-6 flex-auto">
                          <div className=" border-gray-900/10 pb-12">
                            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                              Are you sure
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={closeDeleteModal}
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            className="bg-indigo-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            onClick={() => closeDeleteModal(true, category.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </Modal>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
