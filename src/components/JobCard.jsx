import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <div>
      <Link to={`/job/${job._id}`} className="card bg-base-100 shadow-xl">
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
        </div>
      </Link>
    </div>
  );
};

export default JobCard;
