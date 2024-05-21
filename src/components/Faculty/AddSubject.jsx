import AdminNavbar from "./AdminNavbar";
import { useForm } from "react-hook-form";
import axios from "axios";
import "../../styles/signup.css";
import toast from "react-hot-toast";

const AddSubject = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const formData = {
        subjectName: data.name,
        semester: data.semester,
        labName: data.location,
      };

      const createUserResponse = await axios.post(
        "https://labfab.onrender.com/api/subjects/addSubject",
        formData
      );

      if (createUserResponse.status === 201) {
        toast.success(" Subject Added Successfully ", {
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
          iconTheme: {
            primary: "#713200",
            secondary: "#FFFAEE",
          },
        });
        reset();
      } else {
        toast.error(createUserResponse.data.error, {
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
          iconTheme: {
            primary: "#713200",
            secondary: "#FFFAEE",
          },
        });
      }
    } catch (error) {
      toast.error(error, {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      });
    }
  };

  return (
    <>
      <AdminNavbar />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="addsubject-form mb-4 mt-10"
      >
        <div className="mb-4">
          <h2
            className="text-2xl font-bold text-center mb-3"
            style={{ color: "grey" }}
          >
            Add Subject
          </h2>

          <label className="block mb-2 text-sm font-semibold">
            Subject Name
          </label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-semibold">Semester</label>
          <input
            type="text"
            {...register("semester", { required: "Semester is required" })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          {errors.semester && (
            <p className="text-red-500 text-xs mt-1">
              {errors.semester.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-semibold">Location</label>
          <select
            {...register("location", { required: "Location is required" })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Location</option>
            <option value="MA 102">MA 102</option>
            <option value="MA 103">MA 103</option>
            <option value="MA 104">MA 104</option>
            <option value="MA 107">MA 107</option>
            <option value="MA 108">MA 108</option>
            <option value="MA 109">MA 109</option>
            <option value="MA 112">MA 112</option>
            <option value="MA 113">MA 113</option>
            <option value="MA 115">MA 115</option>
          </select>
          {errors.location && (
            <p className="text-red-500 text-xs mt-1">
              {errors.location.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full text-white py-2 rounded-lg  transition duration-300"
        >
          Add Subject
        </button>
      </form>
    </>
  );
};

export default AddSubject;
