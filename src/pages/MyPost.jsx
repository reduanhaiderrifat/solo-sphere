import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../Provider/Provider";
import axios from "axios";

const MyPost = () => {
  const { user } = useContext(AuthProvider);
  const [loading, setLoadung] = useState(true);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getData();
  }, [user]);
  const getData = async () => {
    const { data } = await axios(
      `${import.meta.env.VITE_API_URL}/jobs/${user?.email}`,
      { withCredentials: true }
    );
    setJobs(data);
    setLoadung(false);
    console.log(data);
  };
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/jobs/${id}`
      );
      console.log(data);
      getData();
    } catch (err) {
      console.log(err);
    }
  };
  if (loading) return <p>Loading</p>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {jobs.map((job) => (
        <div key={job._id} className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h1>{job.jobtitle}</h1>
            <h2 className="card-title">
              {job.category}
              <div className="badge badge-secondary">{job.date}</div>
            </h2>
            <p>{job.description}</p>
            <p className=" break-all">{job.buyeremail}</p>
            <div className="card-actions justify-end">
              <span>price</span>
              <div className="badge badge-outline">{job.maxprice}max</div>
              <div className="badge badge-outline">{job.minprice}min</div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleDelete(job._id)}
                className="btn btn-primary"
              >
                delete
              </button>
              <button className="btn btn-primary">Edit</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyPost;
