import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";

import { QUERY_SINGLE_APP } from "../../utils/queries";
import { DELETE_APP } from "../../utils/mutations";
import Auth from '../../utils/auth';

import './assets/style.css'
import trashIcon from './assets/trash.svg';
import editIcon from './assets/edit.svg';

import StageBadge from "../../components/StageBadge";
import Modal from "../../components/Modal";
import Notes from "../../components/Notes";
import SectionContainer from "../../components/SectionContainer";
import ContentContainer from "../../components/ContentContainer";

const SingleApp = () => {
  const loggedIn = Auth.loggedIn();
  if (!loggedIn) {
    window.location.assign('/login')
  }
  const [modalOpen, setModalOpen] = useState(false);
  const [isSeeMoreOpen, setIsSeeMoreOpen] = useState('');
  let { jobId } = useParams();
  let { data } = useQuery(QUERY_SINGLE_APP, {
    variables: {
      id: jobId,
    },
  });
  const [deleteApp] = useMutation(DELETE_APP);
  const job = data?.app || {};

  const handleEdit = () => {
    setModalOpen(!modalOpen);
  };

  const handleDelete = async () => {
    await deleteApp({
      variables: { id: jobId },
    });
    window.location.assign("/applied");
  };
  
  const seeMoreClass = isSeeMoreOpen ? 'active' : '';
  const seeMoreText = isSeeMoreOpen ? 'See Less' : 'See More';

  const handleSeeMore = () => {
    if(isSeeMoreOpen) {
      setIsSeeMoreOpen('');
      return;
    } 
    setIsSeeMoreOpen('active');
  }

  const quickApplyText = () => job.quickApply ? "yes" : "no";
  return (
    <SectionContainer className='single-app'>
      <ContentContainer>
        <>
          <div className="top-content flex justify-between">
            <div className="job-info">
              <h1>{job.jobTitle}</h1>
              <p className="company">{job.companyName}</p>
              <h2>Job Description</h2>
              <div className={`desc-container ${seeMoreClass}`}>
                <p>{job.jobDescription}</p>
              </div>
              <div className="seeMore" onClick={handleSeeMore}>{seeMoreText}</div>
            </div>
            <div className="job-details-container">
              <div className="flex justify-between">
                <div className="edit-btn" onClick={handleEdit}><img src={editIcon} alt="" /></div>
                <div className="delete-btn" onClick={handleDelete}><img src={trashIcon} alt="" /></div>
              </div>
              <div className="details">
                <h4>
                  <span className="font-bold">updated last: </span>
                  {job.lastUpdated}
                </h4>
                <h4>
                  <span className="font-bold">location: </span>
                  {job.location}
                </h4>
                <h4>
                  <span className="font-bold">stage: </span>
                  <StageBadge stage={job.status} />
                </h4>
                <h4>
                  <span className="font-bold">date applied: </span>
                  {job.dateApplied}
                </h4>
                <h4>
                  <span className="font-bold">quick apply?: </span>
                  {quickApplyText()}
                </h4>
                {job.jobScore > 0 && (
                  <h4>
                    <span className="font-bold">JobScan Score: </span>
                    {job.jobScore}
                  </h4>
                )}
              </div>
            </div>
          </div>
          <div className="flex px-5 mt-10 bottom-content">
            <div className="basis-1/2">
              <h3 className="text-2xl mb-2">Questions</h3>
              <ul className="px-5">
                <li className="list-disc mb-3">
                  What is the breakdown of the team and who does what?
                </li>
                <li className="list-disc mb-3">
                  What are you most excited about having a new person in this role?
                </li>
                <li className="list-disc mb-3">
                  What is your biggest pain point? How will this role alleviate
                  that?
                </li>
                <li className="list-disc mb-3">
                  What advice would you give someone through the rest of the
                  interviewing process?
                </li>
                <li className="list-disc mb-3">
                  What is the rest of the hiring process?
                </li>
              </ul>
            </div>
            <div className="flex-col basis-1/2">
              <Notes notes={job.notes} appId={job._id} />
            </div>
          </div>
          {modalOpen && <Modal job={job} setModalOpen={setModalOpen} />}
        </>
      </ContentContainer>
    </SectionContainer>
  );
};

export default SingleApp;
