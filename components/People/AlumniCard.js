import Image from "next/legacy/image";
import Link from 'next/link';
import { ArrowNarrowRightIcon } from '@heroicons/react/solid';

const AlumniCard = ({ alum }) => {
    let job;
    if (alum.current_job) {
        job = `${alum.current_job}`
        if (alum.current_company) {
            job = `${job} at ${alum.current_company}`;
        }
    }else{
        job = '-';
    }
  return (
    <div className='flex p-4 rounded-lg'>
      <div className='mr-4'>
        <Image
          src={alum.photo_url}
          width={64}
          height={64}
          layout='fixed'
          objectFit='cover'
          alt='Profile Picture'
          className='rounded-md'
        />
      </div>
      <div>
        <p className='font-bold'>{alum.fullname}</p>
        <p className='text-sm text-gray-400'>class of {alum.year}</p>
        <p className='text-md text-gray-500'>{job}</p>
        <Link legacyBehavior href={`/people/alumni/${alum.uuid}`}>
          <a className='flex items-center mt-2 text-sm gap-x-1 hover:gap-x-2 ease-out duration-300 text-blue-500' >
            Visit profile
            <ArrowNarrowRightIcon className='w-4 h-4' />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default AlumniCard;
