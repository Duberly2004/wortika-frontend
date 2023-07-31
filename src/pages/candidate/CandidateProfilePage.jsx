import React, { useState, useEffect } from 'react';
import { UseCandidate } from '../../context/profiles/CandidateContext';

export default function ProfilePage() {
  const [candidate, setCandidate] = useState();
  const { profileCandidate } = UseCandidate();

  useEffect(() => {
    async function fetchData() {
      const res = await profileCandidate();
      if(res && res.data) setCandidate(res.data)
    } 
    fetchData() 
  }, []);

  return <div>{JSON.stringify(candidate)}</div>;
}