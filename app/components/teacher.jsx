import React from 'react';

const teachers = [
  { id: 1, status: 'Dean of the faculty', name: 'Dr. Slama Abdeljalil', specialty: 'Mathematics', dateOfJoining: 'Date 1', imgSrc: './img/prof_slama.jpg' },
  { id: 2, status: 'Vice Dean', name: 'Dr.Ilyas Arbaoui', specialty: 'physics', dateOfJoining: 'Date 2', imgSrc: './img/prof_arbaui.jpg' },
  { id: 3, status: 'Vice Dean', name: 'Dr. Kaddi mohamed', specialty: 'Specialty 3', dateOfJoining: 'Date 3', imgSrc: './img/prof_kaddi.jpg' },
  { id: 4, status: 'General Secretary', name: 'Name 4', specialty: 'Specialty 4', dateOfJoining: 'Date 4', imgSrc: './img/23838594 (1).jpg' },
  { id: 5, status: 'Head of department (MI)', name: 'Dr. Kohili Mohammed', specialty: 'Specialty 5', dateOfJoining: 'Date 5', imgSrc: './img/23838594 (1).jpg' },
  { id: 6, status: 'Head of department (SM)', name: 'Name 6', specialty: 'Specialty 6', dateOfJoining: 'Date 6', imgSrc: './img/23838594 (1).jpg' },
];

export default function Teacher() {
  return (
    <div className='w-full h-full grid grid-cols-1 md:grid-cols-3 gap-5 px-4 my-4'>
      {teachers.map((teacher) => (
        <div key={teacher.id} className='flex flex-col md:flex-row bg-gray-200  rounded-lg overflow-hidden shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
          <div className='md:w-1/3 '>
            <img src={teacher.imgSrc} alt='' className='w-full h-full object-cover object-center' />
          </div>
          <div className='flex flex-col justify-center md:items-start p-4'>
            <p className='text-lg  font-semibold'>{teacher.status}</p>
            <p className='text-gray-800'>{teacher.name}</p>
            <p className='text-gray-600'>{teacher.specialty}</p>
            <p className='text-gray-600'>{teacher.dateOfJoining}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
