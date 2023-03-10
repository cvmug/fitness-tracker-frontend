import React, { useState } from 'react';

export default function UpdateRoutineActivity({ routineActivityId, token, onActivityUpdated }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [count, setCount] = useState(null);
  const [duration, setDuration] = useState(null);

  const handleUpdate = async () => {
    try {
      const response = await fetch(`HTTPS://fitnesstrac-kr.herokuapp.com/api/routine_activities/${routineActivityId}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          count,
          duration
        })
      });
      const result = await response.json();
      console.log(result);
      onActivityUpdated(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='updateActivityForm'>
      <label>
        Count:
        <input className='durationInput' type="number" value={count} onChange={(event) => setCount(event.target.value)} />
      </label>
      <label>
        Duration:
        <input className='countInput' type="number" value={duration} onChange={(event) => setDuration(event.target.value)} />
      </label>
      <button className='updateActivity' type='button' onClick={handleUpdate}>Update</button>
    </div>
  );
}
