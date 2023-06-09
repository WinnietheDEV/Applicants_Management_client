import React, { useState } from "react";
import Job from "./Job";
import { useEffect } from "react";
import axios from "axios";
import { useAppContext } from "../context/appContext";
const Joblist = () => {
  const [jobs, setJobs] = useState([]);
  const { isFetchJobs } = useAppContext();
  const fetchJobs = async () => {
    try {
      const response = await axios(
        `https://applicants-management-server.onrender.com/tofu/jobs`
      );
      const fetchedJobs = await response.data;
      setJobs(fetchedJobs);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, [isFetchJobs]);

  return (
    <>
      <div className="job-container">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </>
  );
};

export default Joblist;
