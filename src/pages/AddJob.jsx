import { useContext } from "react";
import { AuthProvider } from "../Provider/Provider";
import axios from "axios";
import toast from "react-hot-toast";

const AddJob = () => {
  const { user } = useContext(AuthProvider);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const buyeremail = form.email.value;
    const description = form.description.value;
    const maxprice = form.maxprice.value;
    const minprice = form.minprice.value;
    const category = form.category.value;
    const jobtitle = form.title.value;
    const date = form.date.value;
    const jobData = {
      buyeremail,
      description,
      date,
      category,
      maxprice,
      minprice,
      jobtitle,
    };
    console.log(jobData);
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/job`,
        jobData,
        { withCredentials: true }
      );
      toast.success("seccesfuly");
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="hero min-h-screen w-full bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left"></div>
          <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body ">
              <div className="flex items-center gap-3 w-full">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Job Title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="title"
                    name="title"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email Address</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    defaultValue={user?.email}
                    required
                  />
                </div>
              </div>
              <div className="flex items-center gap-3 w-full">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">deadline</span>
                  </label>
                  <input
                    type="date"
                    placeholder="date"
                    name="date"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <select
                    name="category"
                    className="select input-bordered"
                    required
                  >
                    {" "}
                    <option value="" disabled selected>
                      Choose a category
                    </option>
                    <option value="Web Development">Web Development</option>
                    <option value="Grapics Desing">Grapics Desing</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center gap-3 w-full">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Minimum Price</span>
                  </label>
                  <input
                    type="number"
                    placeholder="price"
                    name="minprice"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Max Price</span>
                  </label>
                  <input
                    type="number"
                    placeholder="price"
                    name="maxprice"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea
                    type="text"
                    cols={40}
                    rows={20}
                    placeholder="description"
                    name="description"
                    className="input input-bordered"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
