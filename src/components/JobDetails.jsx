import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthProvider } from "../Provider/Provider";
import axios from "axios";
import toast from "react-hot-toast";

const JobDetails = () => {
  const { user } = useContext(AuthProvider);
  const job = useLoaderData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const price = parseFloat(form.price.value);
    if (price < parseFloat(job.minprice))
      return toast.error("offer more price or go bakc");
    const email = form.email.value;
    const comment = form.comment.value;
    const dead = form.dead.value;
    const bidData = { price, email, comment, dead };
    console.log(bidData);
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/bid`,
        bidData
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
        <form
          onSubmit={handleSubmit}
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">{job.category}</p>
              <p className="font-medium">{job.jobtitle}</p>
              <p className="text-xs">{job.description}</p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Price
                </label>
                <input
                  id="firstname"
                  type="text"
                  name="price"
                  placeholder="First name"
                  className="w-full input input-bordered"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Comment
                </label>
                <input
                  id="lastname"
                  type="text"
                  name="comment"
                  placeholder="Last name"
                  className="w-full input input-bordered"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full input input-bordered"
                  defaultValue={user?.email}
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Deadline
                </label>
                <input
                  id="email"
                  type="date"
                  name="dead"
                  placeholder="Email"
                  className="w-full input input-bordered"
                  defaultValue={job.deadline}
                />
              </div>
            </div>
          </fieldset>
          <button className="w-full btn-primary btn">submit</button>
        </form>
      </section>
    </div>
  );
};

export default JobDetails;
